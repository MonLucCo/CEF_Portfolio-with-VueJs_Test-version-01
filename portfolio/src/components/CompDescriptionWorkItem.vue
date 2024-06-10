<template>
  <div class="work-item">
    <div id="item-container">
      <div class="presentation">
        <g v-for="(textDescription, index) in content.description" :key="index">
          {{ textDescription }}
        </g>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.work-item {
  display: flex;
  width: 100%;
  border-bottom: 2mm ridge rgba(211, 220, 50, 0.6);
}

#item-container {
  display: flex;
  justify-content: space-around;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

.presentation {
  display: flex;
  flex-direction: column;
}
</style>
