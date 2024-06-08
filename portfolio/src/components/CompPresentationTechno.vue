<template>
  <div class="presentation-techno">
    <g v-for="skill in skills" :key="skill.id">
      <p>{{ skill.label }}</p>
      <div id="techno-skill">
        <!-- <elem-gauge-circular :valeur="skill.value" :gabarit="skill.gabarit" :afficheValeur="skill.affiche"
                    :taille="100" :positionTexte="skill.position" :image="skill.image" /> -->
        <elem-gauge-circular-logo
          :valeur="skill.value"
          :gabarit="skill.gabarit"
          :afficheValeur="skill.affiche"
          :image="skill.image"
        />
      </div>
    </g>
  </div>
</template>

<script>
import ElemGaugeCircular from "./ElemGaugeCircular.vue";
import ElemGaugeCircularLogo from "./ElemGaugeCircularLogo.vue";
export default {
  components: { ElemGaugeCircular, ElemGaugeCircularLogo },
  data() {
    return {
      skills: [
        {
          id: 1,
          label: "HTML",
          value: 3,
          gabarit: 10,
          affiche: true,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_html5_02.png",
            alt: "Icone HTML",
          },
        },
        {
          id: 2,
          label: "CSS",
          value: 5,
          gabarit: 10,
          affiche: false,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_css3_03.png",
            alt: "icone CSS",
          },
        },
        {
          id: 3,
          label: "JavaScript",
          value: 6,
          gabarit: 10,
          affiche: true,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_JS_03.png",
            alt: "icone JavaScript",
          },
        },
        {
          id: 4,
          label: "RPA UI Path",
          value: 8,
          gabarit: 10,
          affiche: false,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_RPA_03.png",
            alt: "icone RPA UI Path",
          },
        },
        {
          id: 5,
          label: "VueJs",
          value: 7,
          gabarit: 10,
          affiche: false,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_VueJs_03.png",
            alt: "icone VueJs",
          },
        },
        {
          id: 6,
          label: "Drupal",
          value: 9,
          gabarit: 10,
          affiche: false,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_Drupal_01.png",
            alt: "icone Drupal",
          },
        },
        {
          id: 7,
          label: "VB Application",
          value: 4,
          gabarit: 10,
          affiche: false,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Icone_VBA_01.png",
            alt: "icone Visual basic Application",
          },
        },
        {
          id: 8,
          label: "GitHub",
          value: 4,
          gabarit: 10,
          affiche: true,
          position: "absolute",
          image: {
            src: "/src/assets/icones/Social_GitHub_03.png",
            alt: "icone GitHub",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.presentation-techno {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#techno-skill {
  display: flex;
  align-content: center;
  align-items: center;
}

.presentation-techno g {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 5px 10px 10px 10px;
  border: 1px solid silver;
  border-radius: 25% 25% 45% 40%;
  background-color: rgb(12, 25, 83);
}
</style>
