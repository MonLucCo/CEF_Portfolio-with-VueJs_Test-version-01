<template>
  <div class="jauge-circulaire-container">
    <div class="jauge-circulaire" :style="{ fontSize: taille + 'px' }">
      <svg class="jauge-circulaire-svg" viewBox="0 0 36 36">
        <path
          class="jauge-circulaire-bg"
          d="M18 2.0845 
                        a 15.9155 15.9155 0 0 1 0 31.831 
                        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="jauge-circulaire-fg"
          :stroke-dasharray="circonference + ' ' + circonference"
          :style="{ strokeDashoffset: progression }"
          d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div class="jauge-circulaire-image-container">
        <img
          class="jauge-circulaire-image"
          v-if="image.src"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
    <div v-if="afficheValeur">
      <div
        v-if="gabarit === 100"
        class="jauge-circulaire-text"
        :style="{ position: positionTexte }"
      >
        {{ valeur }}%
      </div>
      <div v-else class="jauge-circulaire-text" :style="{ position: positionTexte }">
        {{ Math.floor((valeur / gabarit) * 100) }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valeur: { type: Number, required: true },
    taille: { type: Number, default: 100 },
    positionTexte: { type: String, default: "absolute" },
    gabarit: { type: Number, default: 100 },
    afficheValeur: { type: Boolean, default: true },
    image: { type: Object, default: { src: "", alt: "" } },
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
.jauge-circulaire-container {
  display: flex;
  align-items: center;
}

.jauge-circulaire {
  justify-content: center;
  position: relative;
  width: 1em;
  height: 1em;
}

.jauge-circulaire-svg {
  transform: rotate(-90deg);
}

.jauge-circulaire-bg,
.jauge-circulaire-fg {
  fill: none;
  stroke-width: 3.8;
}

.jauge-circulaire-bg {
  stroke: #eee;
}

.jauge-circulaire-fg {
  stroke: #41b883;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}

.jauge-circulaire-text {
  font-size: 0.3em;
}

.jauge-circulaire-image-container {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  overflow: hidden;
}

.jauge-circulaire-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
