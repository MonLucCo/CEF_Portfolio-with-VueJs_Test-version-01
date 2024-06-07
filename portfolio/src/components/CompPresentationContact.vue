<template>
  <div id="presentation-contact">
    <div id="contact-pdf-onglet">
      <a href="/CV-de-Luc-Pérard.pdf" target="_blank">
        <img
          src="/Icone_pdf_01.png"
          alt="Ouvrir dans un onglet le PDF du CV de PerLucCo"
        />
      </a>
    </div>
    <div id="contact-pdf-telechargement">
      <a href="/CV-de-Luc-Pérard.pdf" download>
        <img src="/Icone_pdf_02.png" alt="Télécharger le PDF du CV de PerLucCo" />
      </a>
    </div>
    <div id="contact-email-pre-rempli">
      <a :href="`${emailSetupHeader}&${emailSetupBody}`">
        <img src="/Icone_Email_08.png" alt="Contact par e-mail" />
      </a>
    </div>
    <div id="contact-telephone">
      <a :href="`tel:+${telSetup}`">
        <img src="/Icone_tel_05.png" alt="Contact par numéro de téléphone" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PresentationContact",
  data() {
    return {
      emailSetupHeader:
        "mailto:perlucco92@gmail.com?" + "subject=Contact Portfolio de PerLucCo",
      emailSetupBody:
        "body=Bonjour,%0D%0A" +
        "Nom : PerLucCo" +
        "%0D%0A" +
        "Tél : 0606060606" +
        "%0D%0A" +
        "Adresse : Rues du développement durable - 16 rue Roger Salengro - 42000 Saint-Etienne",
      telSetup: "0606060606",
    };
  },
};
</script>

<style scoped>
#presentation-contact {
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  gap: 10px;
}

#presentation-contact img {
  width: 30px;
  height: 30px;
}

#presentation-contact a {
  text-decoration: none;
  color: inherit;
}
</style>
