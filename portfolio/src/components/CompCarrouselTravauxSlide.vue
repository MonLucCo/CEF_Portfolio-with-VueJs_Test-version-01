<template>
  <div class="carousel">
    <transition name="fade" mode="out-in">
      <comp-presentation-slide
        :key="currentSlideIndex"
        :slide="slides[currentSlideIndex]"
      ></comp-presentation-slide>
    </transition>
    <button @click="prev">Précédent</button>
    <button @click="next">Suivant</button>
  </div>
</template>

<script>
import CompPresentationSlide from "./CompPresentationSlide.vue";
export default {
  components: {
    CompPresentationSlide,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          text: "gestion du temps",
          image: "/src/assets/images/Avatar_About_16.png",
        },
        {
          id: 2,
          text: "organisation des activités",
          image: "/src/assets/images/Avatar_About_17.png",
        },
        {
          id: 3,
          text: "réduction des charges",
          image: "/src/assets/images/Avatar_About_22.png",
        },
        {
          id: 4,
          text: "sécurisation des accès",
          image: "/src/assets/images/Avatar_About_26.png",
        },
        {
          id: 5,
          text: "récompense des employés",
          image: "/src/assets/images/Avatar_About_27.png",
        },
        // ajoutez plus de diapositives ici...
      ],
      currentSlideIndex: 0,
      direction: "forward",
    };
  },
  methods: {
    next() {
      this.direction = "forward";
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    },
    prev() {
      this.direction = "backward";
      this.currentSlideIndex =
        (this.currentSlideIndex + this.slides.length - 1) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  /* position: relative; */
  width: 300px;
  height: 200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
