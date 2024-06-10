<template>
  <transition name="modal">
    <div class="modal-mask" @click.stop="handleClick">
      <div class="modal-wrapper" @click="handleClick">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Titre par défaut</slot>
          </div>

          <div class="modal-body">
            <slot name="body">Message par défaut, qui s'allonge à loisir</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="handleClick">Fermer</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close"],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
      this.$emit("close");
    },
    handleClick(event) {
      const clickedElement = event.target;
      const className = clickedElement.className;
      console.log(`Le clic a eu lieu sur un élément de la classe : ${className}`);
      if (
        className.includes("modal-default-button") ||
        className.includes("modal-mask")
      ) {
        this.closeModal();
      }
      // if (className.includes('modal-mask')) {
      //     this.closeModal();
      // }
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  /* z-index: 9998; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  cursor: url("/src/assets/icones/Icone_Fermeture_01b.ico"), auto;
}

.modal-wrapper {
  display: flex;
  width: 80%;
  height: 80%;
  margin: auto;
}

.modal-container {
  background: rgb(85, 86, 139);
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 20px 30px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  cursor: default;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  max-height: 20%;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-header img {
  max-height: 20%;
}
.modal-body {
  margin: 20px 15px 20px 15px;
}

.modal-default-button {
  float: right;
  cursor: pointer;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
