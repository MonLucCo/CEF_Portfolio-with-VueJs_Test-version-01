<template>
  <div class="page404-url-not-found">
    <div class="informations-page404">
      <div class="presentation-texte">
        <p>Bonjour,<br>Vous avez réussi, rien à dire</p>
        <h1>404 fois BRAVO !</h1>
        <p>vous avez trouvé une superbe erreur 404</p>
      </div>
      <div class="presentation-photos">
        <img src="/Avatar_PerLucCo.png" alt="Avatar de perLucCo">
      </div>
    </div>
    <router-link :to="{ name: 'home' }">Je vous ramène à la page d'accueil de PerLucCo</router-link>
  </div>
</template>

<style scoped>
.page404-url-not-found {
  display: flex;
  flex-direction: column;
  flex: auto;

  align-items: center;
}

.informations-page404 {
  display: flex;
  flex: auto;
  gap: 20px;
}

.presentation-texte {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>