<template>
  <div class="projects-container">
    <h1>Presentation des réalisations de PerLucCo</h1>
    <p>Pour en savoir plus, sélectionnez une réalisation...</p>
    <comp-presentation-works />
  </div>
</template>

<script>
import CompPresentationWorks from "../components/CompPresentationWorks.vue";
export default {
  components: { CompPresentationWorks },
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
}
</style>
