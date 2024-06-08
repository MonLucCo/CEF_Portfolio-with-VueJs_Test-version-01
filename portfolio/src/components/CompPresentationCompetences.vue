<template>
  <div class="presentation-competence">
    <g v-for="skill in skills" :key="skill.id">
      <p>{{ skill.label }}</p>
      <elem-gauge-bar :valeur="skill.value" :gabarit="skill.gabarit" />
    </g>
  </div>
</template>

<script>
import ElemGaugeBar from "./ElemGaugeBar.vue";
import ElemGaugeCircular from "./ElemGaugeCircular.vue";
export default {
  components: { ElemGaugeCircular, ElemGaugeBar },
  data() {
    return {
      skills: [
        {
          id: 1,
          label: "compétence X1",
          value: 3,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
        {
          id: 2,
          label: "compétence X2",
          value: 5,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
        {
          id: 3,
          label: "compétence X3",
          value: 6,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
        {
          id: 4,
          label: "compétence X4",
          value: 8,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
        {
          id: 5,
          label: "compétence X5",
          value: 9,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
        {
          id: 6,
          label: "compétence X6",
          value: 4,
          gabarit: 10,
          affiche: true,
          position: "absolute",
        },
      ],
    };
  },
};
</script>

<style scoped>
.presentation-competence {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.presentation-competence g {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 5px 10px 10px 10px;
  border: 1px solid silver;
  border-radius: 25% 25% 45% 0;
  background-color: green;
}
</style>
