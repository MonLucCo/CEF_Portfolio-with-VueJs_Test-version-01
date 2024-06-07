<template>
    <div class="page404-project-url-not-found">
        <div class="informations-page404">
            <div class="presentation-texte">
                <p>Désolé,<br>La page de projet n'existe pas à cette adresse</p>
                <h1>Mais, 404 fois BRAVO !</h1>
                <p>vous avez trouvé une superbe erreur 404 liée aux projets</p>
            </div>
            <div class="presentation-photos">
                <img src="/Avatar_PerLucCo.png" alt="Avatar de perLucCo">
            </div>
        </div>
        <router-link :to="{ name: '/projects' }">Retour aux projets</router-link>
    </div>
</template>

<style scoped>
.page404-project-url-not-found {
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