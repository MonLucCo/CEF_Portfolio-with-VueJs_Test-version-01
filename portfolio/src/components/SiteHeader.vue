<template>
  <header>
    <div id="logo-site">
      <router-link to="/">
        <img
          class="logo"
          alt="Vue logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
      </router-link>
      <div id="logo-site-presentation">
        <div id="presentation-button">
          <router-link to="/">
            <button type="button">PerLucCo</button>
          </router-link>
        </div>
        <div id="presentation-contact">
          <comp-presentation-contact v-if="$route.path !== '/'" />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <nav>
        <router-link to="/about">Présentation</router-link>
        <router-link to="/projects">Travaux</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import CompPresentationContact from "./CompPresentationContact.vue";
export default {
  components: {
    CompPresentationContact,
  },
};
</script>

<style scoped>
header {
  /* line-height: 1.5; */
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: rgb(117, 117, 117);
}

.logo {
  margin: 0 auto;
}

#logo-site {
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
}

#logo-site-presentation {
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
}

#presentation-button {
  flex: 3;
  align-content: center;
}

#presentation-contact {
  flex: 2;
}

button,
nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
}

.wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  flex: 5;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
} */
</style>
