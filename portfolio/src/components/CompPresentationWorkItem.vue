<template>
  <div class="work-item">
    <div id="item-container">
      <div id="image-item">
        <img :src="slide.image" alt="Image de la diapositive" />
      </div>
      <div id="presentation-item">
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
.work-item {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2mm ridge rgba(211, 220, 50, 0.6);
}

#item-container {
  display: flex;
  justify-content: space-around;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

#presentation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.work-item img {
  width: 20%;
  height: 20%;
  object-fit: contain;
  border-radius: 5%;
}

.work-item p {
  margin-top: 1em;
  text-align: center;
}
</style>
