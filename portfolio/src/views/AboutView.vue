<template>
  <div class="about">
    <h1>
      This is an about page. <br />Presentation with some details on which is PerLucCo
    </h1>
    <comp-presentation-texte />
    <comp-presentation-competences />
    <comp-presentation-techno />
    <comp-presentation-services />
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
