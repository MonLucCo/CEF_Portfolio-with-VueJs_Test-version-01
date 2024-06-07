<template>
  <div class="home">
    <h1>This is the home page</h1>
    <p>PerLucCo portfolio site - presentation page</p>
    <comp-presentation-contact />
  </div>
</template>

<script>
import CompPresentationContact from "../components/CompPresentationContact.vue";
export default {
  components: {
    CompPresentationContact,
  },
};
</script>
