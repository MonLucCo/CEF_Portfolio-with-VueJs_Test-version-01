<template>
  <div class="page404-page-not-found">
    <h1>Error 404 - Page Not Found</h1>
    <p>La page que vous cherchez n'existe pas.</p>
    <router-link :to="{ name: 'home' }">Retour à l'accueil</router-link>
  </div>
</template>

<style scoped>
.page404-page-not-found {
  flex-direction: column;
}
</style>
