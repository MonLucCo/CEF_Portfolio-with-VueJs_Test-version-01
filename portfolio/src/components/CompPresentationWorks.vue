<template>
  <div class="presentation-works-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="presentation-work-tuile"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="activeModal = index"
    >
      <h2>{{ item.titre }}</h2>
      <img :src="item.image" alt="Image de l'activité" />
      <p>{{ item.text }}</p>
      <comp-modal-work
        v-if="activeModal === index"
        :title="item.titre"
        :text="item.text"
        @close="activeModal = null"
      />
    </div>
  </div>
</template>

<script>
import CompModalWork from "./CompModalWork.vue";

export default {
  components: {
    CompModalWork,
  },
  data() {
    return {
      hover: false,
      activeModal: null,
      items: [
        {
          titre: "gestion du temps",
          text: "assistance à la gestion du temps...",
          image: "/src/assets/images/Avatar_About_16.png",
        },
        {
          titre: "organisation des activités",
          text: "organisation des activités de projets...",
          image: "/src/assets/images/Avatar_About_17.png",
        },
        {
          titre: "réduction des charges",
          text:
            "participation à la réduction des charges par transformation numérique...",
          image: "/src/assets/images/Avatar_About_22.png",
        },
        {
          titre: "sécurisation des accès",
          text: "développement de la sécurisation des accès web et web mobile...",
          image: "/src/assets/images/Avatar_About_26.png",
        },
        {
          titre: "récompense des employés",
          text: "assistance au développement de la récompense des employés...",
          image: "/src/assets/images/Avatar_About_27.png",
        },
        {
          titre: "développement de projet",
          text: "conception, codage et développement de projets web et mobile...",
          image: "/src/assets/images/Avatar_About_25.png",
        },
        // ajoutez plus de diapositives ici...
      ],
    };
  },
};
</script>

<style scoped>
.presentation-works-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.presentation-work-tuile {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px;
  padding: 20px;
  border-radius: 5%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.presentation-work-tuile:hover {
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}

.presentation-work-tuile img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
