<template>
  <div class="page404-projects-not-found">
    <h1>Error 404 - Page Not Found</h1>
    <p>La page de projet que vous cherchez n'existe pas.</p>
    <router-link :to="{ name: '/projects' }">Retour aux projets</router-link>
  </div>
</template>

<style scoped>
.page404-projects-not-found {
  flex-direction: column;
}
</style>
