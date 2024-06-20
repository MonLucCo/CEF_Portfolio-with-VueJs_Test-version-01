<template>
  <div class="about">
    <div class="about-container flex-container">
      <div class="container-presentation col-2 flex-item">
        <h1>Quelques détails sur PerLucCo</h1>
        <comp-presentation-texte class="transfo-1" />
        <comp-presentation-competences />
      </div>
      <div class="container-presentation col-1 flex-item">
        <h1>Principales compétences pour mes activités</h1>
        <p>La valeur numérique est affichée pour une activité majeure...</p>
        <comp-presentation-techno class="transfo-2" />
      </div>
      <div class="container-presentation col-2">
        <comp-presentation-services class="flex-ligne" />
      </div>
    </div>
  </div>
</template>

<script>
import CompPresentationCompetences from "../components/CompPresentationCompetences.vue";
import CompPresentationServices from "../components/CompPresentationServices.vue";
import CompPresentationTechno from "../components/CompPresentationTechno.vue";
import CompPresentationTexte from "../components/CompPresentationTexte.vue";
export default {
  components: {
    CompPresentationTexte,
    CompPresentationCompetences,
    CompPresentationTechno,
    CompPresentationServices,
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: space-around;
}

.flex-container {
  flex-wrap: wrap;
}

.container-presentation {
  border: 1px solid;
  padding: 5px;
}

.col-1 {
  flex: 1;
}

.col-2 {
  flex: 2;
}

.flex-item {
  flex-basis: 50%;
}

.flex-ligne {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.transfo-1,
h1 {
  transform: scale(0.85);
}

.transfo-2 {
  transform: scale(0.75);
}

.transfo-3 {
  transform: scale(0.65);
}
</style>
