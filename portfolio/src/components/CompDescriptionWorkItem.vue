<template>
  <div class="work-item">
    <div id="item-container">
      <div class="presentation">
        <div class="presentation-description">
          <g
            id="description-text"
            v-for="(textDescription, index) in content.description"
            :key="index"
          >
            {{ textDescription }}
          </g>
        </div>
        <div class="presentation-description">
          <g
            id="description-services"
            v-for="(serviceDescription, index) in content.services"
            :key="index"
          >
            <input
              type="checkbox"
              id="myCheckbox"
              v-model="serviceDescription.active"
              disabled
            />
            <label for="myCheckbox"> : {{ serviceDescription.titre }}</label>
          </g>
        </div>
        <div class="presentation-description">
          <g
            id="description-techno"
            v-for="(technoDescription, index) in content.techno"
            :key="index"
          >
            <elem-gauge-circular-logo
              :valeur="technoDescription.value"
              :gabarit="technoDescription.gabarit"
              :afficheValeur="technoDescription.affiche"
              :image="technoDescription.image"
            />
          </g>
        </div>
        <div class="presentation-description">
          <g
            id="description-link"
            v-for="(linkDescription, index) in content.workLink"
            :key="index"
          >
            <div id="link-item">
              <a :href="linkDescription.href" :target="linkDescription.target">
                <img :src="linkDescription.src" :alt="linkDescription.alt" />
              </a>
            </div>
          </g>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElemGaugeCircularLogo from "./ElemGaugeCircularLogo.vue";
export default {
  components: { ElemGaugeCircularLogo },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.work-item {
  display: flex;
  width: 100%;
  border-bottom: 2mm ridge rgba(211, 220, 50, 0.6);
}

#item-container {
  display: flex;
  justify-content: space-around;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

.presentation {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  gap: 20px;
}

.presentation-description {
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  border: 1px solid #c5c0c0;
}
</style>
