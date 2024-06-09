<template>
  <div class="modal-mask" @click.stop="$emit('close')">
    <div class="modal-container">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <button @click.stop="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  background: rgb(85, 86, 139);
  width: 80%;
  height: 80%;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  animation: modalOpen 1s forwards;
}

@keyframes modalOpen {
  0% {
    transform: scale(0);
  }

  70% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
