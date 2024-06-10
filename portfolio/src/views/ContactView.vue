<template>
  <div class="contact">
    <h1>Discutons de vos projets, voici mes coordonnées</h1>
    <div class="container">
      <div class="contactInfos">
        <div v-for="(contactDetail, index) in contactInfos" :key="index">
          <elem-contact-detail :content="contactDetail" />
        </div>
      </div>
      <div class="contactInfos">
        <elem-form-email />
      </div>
    </div>
  </div>
</template>

<script>
import ElemContactDetail from "../components/ElemContactDetail.vue";
import ElemFormEmail from "../components/ElemFormEmail.vue";
export default {
  components: { ElemContactDetail, ElemFormEmail },
  data() {
    return {
      contactInfos: [
        {
          titre: "",
          texte: "16 rue Roger Salengro - 92370 Chaville",
          image: "/src/assets/icones/Icone_Position_01.png",
        },
        {
          titre: "",
          texte: "perlucco92@gmail.com",
          image: "/src/assets/icones/Icone_Email_02.png",
        },
        {
          titre: "",
          texte: "+33(0)6 06 06 06",
          image: "/src/assets/icones/Icone_tel_01.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 1em 1em;
}

.container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  align-content: center;
  gap: 10%;
  margin: 25px 0 5px 0;
}

.contactInfos {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
