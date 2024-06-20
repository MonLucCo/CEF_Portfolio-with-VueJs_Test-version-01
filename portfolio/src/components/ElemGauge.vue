<template>
  <div class="gauge">
    <div class="gauge__fill" :style="{ height: `${value}%` }"></div>
    <div class="gauge__cover">{{ value }}%</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.gauge {
  width: 100px;
  height: 200px;
  background-color: #34495e;
  position: relative;
}

.gauge__fill {
  background-color: #41b883;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.gauge__cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}
</style>
