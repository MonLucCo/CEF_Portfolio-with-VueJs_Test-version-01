<template>
  <div class="presentation-services-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="presentation-service-tuile"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="activeModal = index"
    >
      <h2>{{ item.titre }}</h2>
      <img :src="item.image" alt="Image de l'activité" />
      <p>{{ item.text }}</p>
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
          titre: "gestion de projet Web",
          text: "assistance à la gestion et à la conception de projet web...",
          image: "/src/assets/images/Avatar_About_31.png",
        },
        {
          titre: "développement front-end",
          text: "conception et développement front-end : design, UI/UX...",
          image: "/src/assets/images/Avatar_About_32.png",
        },
        {
          titre: "développement back-end",
          text: "conception et développement back-end : données, services, sécurité...",
          image: "/src/assets/images/Avatar_About_24.png",
        },
        {
          titre: "maintenance et service Web",
          text: "maintenance système web et assistance utilisateur back-office...",
          image: "/src/assets/images/Avatar_About_37.png",
        },
        // ajoutez plus de diapositives ici...
      ],
    };
  },
};
</script>

<style scoped>
.presentation-services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.presentation-service-tuile {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px;
  padding: 20px;
  border-radius: 5%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.presentation-service-tuile:hover {
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}

.presentation-service-tuile img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
