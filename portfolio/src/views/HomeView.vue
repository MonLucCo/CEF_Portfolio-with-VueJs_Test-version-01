<template>
  <div class="home">
    <div class="presentation-texte">
      <h1>Bienvenue dans le portfolio de PerLucCo</h1>
      <p>
        Une vue rapide par le carousel des projets ou un accès détaillé aux réalisations
        par le menu <em>Travaux</em> du portfolio
      </p>
    </div>
    <div class="presentation-portfolio">
      <div class="presentation-travaux">
        <!-- <comp-carrousel-travaux-image /> -->
        <comp-carrousel-travaux-slide />
      </div>
      <div class="presentation-photos">
        <img src="/Avatar_PerLucCo.png" alt="Avatar de PerLucCo" />
        <div class="presentation-contact">
          <comp-presentation-contact />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompCarrouselTravauxImage from "../components/CompCarrouselTravauxImage.vue";
import CompPresentationContact from "../components/CompPresentationContact.vue";
import CompCarrouselTravauxSlide from "../components/CompCarrouselTravauxSlide.vue";
export default {
  components: {
    CompPresentationContact,
    CompCarrouselTravauxImage,
    CompCarrouselTravauxSlide,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;
  align-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 15px;
  height: auto;
}

.presentation-texte {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.presentation-portfolio {
  display: flex;
  justify-content: space-around;
  gap: 10%;
  width: 90%;
}

.presentation-travaux {
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  gap: 2em;
}

.presentation-photos {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
}

.presentation-photos img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
