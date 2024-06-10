<template>
  <div class="container">
    <div>
      <div v-if="content.titre" class="title">
        <!-- <p>{{ content.titre }}</p> -->
        {{ content.titre }}
      </div>
      <div class="element">
        <div v-if="content.image" class="elementImage">
          <img :src="content.image" alt="icone" />
        </div>
        <!-- <p v-if="content.texte">{{ content.texte }}</p> -->
        {{ content.texte }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: { titre: "zone de titre", texte: "zone de texte", image: "zone de image" },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.element {
  display: flex;
  gap: 5px;
}

.elementImage {
  width: 40px;
  height: 40px;
  border: 1px solid greenyellow;
  border-radius: 50%;
  padding: 2px;
}

.elementImage img {
  width: 100%;
  height: 100%;
  object-fit: content;
  border-radius: 50%;
}
</style>
