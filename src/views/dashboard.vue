<template>
  <div>
    <navigation-header></navigation-header>
    <div
      class="text-white d-sm-block d-xl-none"
    >Viewport only available in 1200px width or wider. Widen screen or zoom out to see content.</div>
    <b-container class="bv-example-row d-none d-xl-block">
      <b-row>
        <b-col xl="2"></b-col>
        <b-col xl="8">
          <app-resume></app-resume>
        </b-col>
        <b-col xl="2">
          <app-buttonrow></app-buttonrow>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppResume from "../components/AppResume.vue";
import NavigtionHeader from "../components/NavigtionHeader.vue";

export default Vue.extend({
  components: {
    child: {
      AppResume,
      NavigtionHeader
    }
  }
});
</script>

<style lang="scss" scoped>
.beta-text {
  font-size: 0.55em;
  position: relative;
  letter-spacing: 0.1em;
  font-family: Comic Sans MS, Textile, Cursive;
  top: -7px;
  left: -2px;
  color: white;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: #00000030;
}
</style>