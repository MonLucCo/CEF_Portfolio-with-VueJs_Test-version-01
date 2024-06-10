<template>
  <form @submit.prevent="prepareEmail" class="email-form">
    <div class="flex-container">
      <div class="flex-item">
        <label for="fullName" class="obligatoire">Nom complet:</label>
        <input
          id="fullName"
          v-model="email.fullName"
          type="text"
          required
          class="input-field"
        />
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
        <label for="body">Texte du message:</label>
        <textarea id="body" v-model="email.body" required class="input-field"></textarea>
      </div>
    </div>
    <button type="submit" class="submit-button">Préparer l'email</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref({
      fullName: "",
      emailAddress: "",
      subject: "",
      body: "",
    });

    const prepareEmail = () => {
      const mailtoLink = `mailto:${email.value.emailAddress}?subject=${encodeURIComponent(
        email.value.subject
      )}&body=${encodeURIComponent(email.value.body)}`;
      window.open(mailtoLink, "_blank");
    };

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
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
