<template>
  <form @submit.prevent="prepareEmail" class="email-form">
    <div class="flex-container">
      <div class="flex-item">
        <label for="fullName">Nom complet:</label>
        <input id="fullName" v-model="email.fullName" type="text" class="input-field" />
      </div>
      <div class="flex-item">
        <label for="emailAddress" class="obligatoire">Adresse email:</label>
        <input
          id="emailAddress"
          v-model="email.emailAddress"
          type="email"
          required
          class="input-field"
        />
        <!-- <span v-if="emailError">{{ emailError }}</span> -->
      </div>
    </div>
    <div class="flex-container">
      <div class="flex-item full-width">
        <label for="subject" class="obligatoire">Objet du message:</label>
        <input
          id="subject"
          v-model="email.subject"
          type="text"
          required
          class="input-field"
        />
      </div>
    </div>
    <div class="flex-container">
      <div class="flex-item full-width">
        <label for="body" class="obligatoire">Texte du message:</label>
        <textarea id="body" v-model="email.body" required class="input-field"></textarea>
      </div>
    </div>
    <p class="note-obligatoire">
      <span class="obligatoire">Les champs marqué d'un (</span> ) sont à compléter
      obligatoirement
    </p>
    <button type="submit" class="submit-button">
      Préparer l'email, puis retour à l'accueil
    </button>
  </form>
</template>

<script>
import router from "@/router";
import { ref, watch } from "vue";

export default {
  setup() {
    const email = ref({
      fullName: "",
      emailAddress: "",
      subject: "",
      body: "",
    });

    // const emailError = ref('');

    // watch(() => email.value.emailAddress, (newValue) => {
    //     if (newValue && !/^\S+@\S+\.\S+$/.test(newValue)) {
    //         emailError.value = 'Veuillez entrer une adresse email valide.';
    //     } else {
    //         emailError.value = '';
    //     }
    // });

    // const isFormInvalid = computed(() => {
    //     return !email.value.emailAddress || !email.value.subject || !email.value.body;
    // });

    const prepareEmail = () => {
      const fullNameStyled = email.value.fullName.trim()
        ? email.value.fullName
        : "<inconnu>";
      const mailtoLink = `mailto:${email.value.emailAddress}?subject=${encodeURIComponent(
        email.value.subject
      )}&body=${encodeURIComponent(
        "Nom du contact : " + fullNameStyled + "\n\n" + email.value.body
      )}`;
      window.open(mailtoLink, "_blank");

      email.value = { fullName: "", emailAddress: "", subject: "", body: "" };

      router.push("/");
    };

    // return { email, emailError, prepareEmail };
    return { email, prepareEmail };
  },
};
</script>

<style scoped>
.obligatoire::after {
  content: "*";
  color: red;
  margin-left: 4px;
}

.note-obligatoire {
  font-size: 0.9em;
  color: #333;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-item {
  flex: 1;
}

.flex-item.full-width {
  flex: 0 0 100%;
}

.input-field {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.submit-button {
  background-color: #41b883;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #34495e;
}
</style>
