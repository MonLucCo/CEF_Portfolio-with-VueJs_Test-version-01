<template>
  <footer>
    <p>
      PerLucCo - Portfolio 2024 / dernière mise à jour le
      {{ new Date().toLocaleDateString() }}
    </p>
    <div class="liens-reseaux">
      <a href="https://www.linkedin.com/in/luc-pérard/" target="_blank">
        <img src="/Social_LinkedIn.png" alt="Page Linkedin de PerLucCo" />
      </a>
      <a href="https://github.com/MonLucCo" target="_blank">
        <img src="/Social_GitHub.png" alt="Page GitHub de PerLucCo" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  background-color: lightslategray;
  border-top: thick double lightgray;
}
p,
img {
  height: 30px;
  margin: 10px;
}
img:hover {
  opacity: 60%;
}
</style>
