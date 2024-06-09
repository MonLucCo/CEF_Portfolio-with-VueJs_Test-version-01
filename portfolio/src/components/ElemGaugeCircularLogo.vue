<template>
  <div class="jauge-container">
    <div class="jauge">
      <svg class="jauge-svg" viewBox="0 0 36 36">
        <path
          class="jauge-bg"
          d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="jauge-fg"
          :stroke-dasharray="circonference + ' ' + circonference"
          :style="{ strokeDashoffset: progression }"
          d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div class="jauge-image-container">
        <img :src="image.src" :alt="image.alt" class="jauge-image" />
      </div>
    </div>
    <div v-if="afficheValeur">
      <div v-if="gabarit === 100" class="jauge-text">{{ valeur }}%</div>
      <div v-else class="jauge-text">{{ Math.floor((valeur / gabarit) * 100) }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valeur: { type: Number, required: true },
    gabarit: { type: Number, default: 100 },
    afficheValeur: { type: Boolean, default: true },
    image: { type: Object, required: true },
  },
  computed: {
    progression() {
      const rayon = 16;
      const circonference = 2 * Math.PI * rayon;
      const progression = ((this.gabarit - this.valeur) / this.gabarit) * circonference;
      return progression;
    },
    circonference() {
      const rayon = 16;
      return 2 * Math.PI * rayon;
    },
  },
};
</script>

<style scoped>
.jauge-container {
  display: flex;
  align-items: center;
}

.jauge {
  position: relative;
  width: 100px;
  height: 100px;
}

.jauge-svg {
  transform: rotate(-90deg);
}

.jauge-bg,
.jauge-fg {
  fill: none;
  stroke-width: 3.8;
}

.jauge-bg {
  /* stroke: #eee; */
  stroke: transparent;
}

.jauge-fg {
  stroke: yellowgreen;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}

.jauge-image-container {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  overflow: hidden;
}

.jauge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.jauge-text {
  margin-left: 10px;
}
</style>
