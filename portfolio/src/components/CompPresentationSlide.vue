<template>
  <div class="slide">
    <div id="slide-container">
      <div id="image-slide">
        <img :src="slide.image" alt="Image de la diapositive" />
      </div>
      <div id="presentation-slide">
        <h2>Projet</h2>
        <p>{{ slide.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.slide {
  display: flex;
  border: 4mm ridge rgba(211, 220, 50, 0.6);
  border-radius: 10%;
}

#slide-container {
  display: flex;
  justify-content: space-around;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

#presentation-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.slide img {
  /* flex: 1; */
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5% 0 0 5%;
}

.slide p {
  margin-top: 1em;
  text-align: center;
}
</style>
