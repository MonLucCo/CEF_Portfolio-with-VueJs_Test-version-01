<template>
  <div class="projects-container">
    <h1>This is the projects page<br />Presentation of some Perlucco's works</h1>
    <p>Click any for more...</p>
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
