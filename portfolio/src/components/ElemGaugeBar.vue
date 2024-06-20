<template>
  <div class="jauge-container">
    <div class="jauge-barre" :style="{ width: largeur + 'px', height: hauteur + 'px' }">
      <div
        class="jauge-valeur jauge-couleur-valeur"
        :style="{ width: Math.floor((valeur / gabarit) * 100) + '%' }"
      ></div>
      <div class="jauge-valeur jauge-couleur-base" :style="{ width: '100%' }"></div>
    </div>
    <div v-if="afficherValeur">{{ Math.floor((valeur / gabarit) * 100) }}%</div>
  </div>
</template>

<script>
export default {
  props: {
    valeur: {
      type: Number,
      required: true,
    },
    gabarit: {
      type: Number,
      default: 100,
    },
    largeur: {
      type: Number,
      default: 100,
    },
    hauteur: {
      type: Number,
      default: 20,
    },
    afficherValeur: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.jauge-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

.jauge-barre {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid;
  gap: 1px;
  padding: 1px;
}

.jauge-valeur {
  height: 50%;
}

.jauge-couleur-valeur {
  background-color: #41b883;
}

.jauge-couleur-base {
  background-color: #34495e;
}
</style>
