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
      <!-- <comp-modal-work v-if="activeModal === index" :title="item.titre" :text="item.text"
                @close="activeModal = null" /> -->
      <comp-modal-work-test v-if="activeModal === index" @close="activeModal = null">
        <template v-slot:header>
          <comp-presentation-work-item :slide="{ text: item.text, image: item.image }" />
        </template>
        <template v-slot:body>
          <comp-description-work-item :content="item.details" />
        </template>
        <template v-slot:footer></template>
      </comp-modal-work-test>
    </div>
  </div>
</template>

<script>
import CompDescriptionWorkItem from "./CompDescriptionWorkItem.vue";
import CompModalWork from "./CompModalWork.vue";
import CompModalWorkTest from "./CompModalWorkTest.vue";
import CompPresentationWorkItem from "./CompPresentationWorkItem.vue";

export default {
  components: {
    CompModalWork,
    CompModalWorkTest,
    CompPresentationWorkItem,
    CompDescriptionWorkItem,
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
          details: {
            description: ["Mon texte 1", "Mon texte 2"],
            workLink: [
              {
                href: "/CV-de-Luc-Pérard.pdf",
                target: "_blank",
                src: "/Icone_pdf_01.png",
                alt: "Ouvrir dans un onglet le PDF du CV de PerLucCo",
              },
              {
                href: "https://github.com/MonLucCo",
                target: "_blank",
                src: "/Social_GitHub.png",
                alt: "Page GitHub de PerLucCo",
              },
              {
                href: "https://www.linkedin.com/in/luc-pérard/",
                target: "_blank",
                src: "/Social_LinkedIn.png",
                alt: "Page Linkedin de PerLucCo",
              },
            ],
            services: [
              { active: true, titre: "Service 1" },
              { active: false, titre: "Service 2" },
              { active: true, titre: "Service 3" },
              { active: false, titre: "Service 4" },
              { active: false, titre: "Service 5" },
              { active: true, titre: "Service 6" },
            ],
            techno: [
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
            ],
          },
        },
        {
          titre: "organisation des activités",
          text: "organisation des activités de projets...",
          image: "/src/assets/images/Avatar_About_17.png",
          details: { description: null, workLink: null, services: null, techno: null },
        },
        {
          titre: "réduction des charges",
          text:
            "participation à la réduction des charges par transformation numérique...",
          image: "/src/assets/images/Avatar_About_22.png",
          details: { description: null, workLink: null, services: null, techno: null },
        },
        {
          titre: "sécurisation des accès",
          text: "développement de la sécurisation des accès web et web mobile...",
          image: "/src/assets/images/Avatar_About_26.png",
          details: { description: null, workLink: null, services: null, techno: null },
        },
        {
          titre: "récompense des employés",
          text: "assistance au développement de la récompense des employés...",
          image: "/src/assets/images/Avatar_About_27.png",
          details: { description: null, workLink: null, services: null, techno: null },
        },
        {
          titre: "développement de projet",
          text: "conception, codage et développement de projets web et mobile...",
          image: "/src/assets/images/Avatar_About_25.png",
          details: { description: null, workLink: null, services: null, techno: null },
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
