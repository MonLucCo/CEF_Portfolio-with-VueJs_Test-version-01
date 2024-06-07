<template>
  <div class="carousel">
    <div id="carousel-display">
      <transition :name="fade" mode="out-in">
        <img :key="currentImageIndex" :src="images[currentImageIndex]" alt="" />
      </transition>
    </div>
    <div id="carousel-command">
      <button @click="prev">Précédent</button>
      <button @click="next">Suivant</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/src/assets/images/Avatar_About_16.png",
        "/src/assets/images/Avatar_About_17.png",
        "/src/assets/images/Avatar_About_22.png",
        "/src/assets/images/Avatar_About_26.png",
        "src/assets/images/Avatar_About_27.png",
      ],
      currentImageIndex: 0,
      direction: "forward",
    };
  },
  methods: {
    next() {
      this.direction = "forward";
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prev() {
      this.direction = "backward";
      this.currentImageIndex =
        (this.currentImageIndex + this.images.length - 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
}

#carousel-display {
  position: relative;
}

.carousel-display img {
  position: absolute;
  width: 80%;
  /* height: auto; */
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* .carousel .forward-enter-active,
  .carousel .backward-leave-active {
    transition: opacity 1s;
  }
  
  .carousel .forward-enter,
  .carousel .backward-leave-to {
    opacity: 0;
  }
  
  .carousel .backward-enter-active,
  .carousel .forward-leave-active {
    transition: opacity 1s;
  }
  
  .carousel .backward-enter,
  .carousel .forward-leave-to {
    opacity: 0;
  } */
</style>
