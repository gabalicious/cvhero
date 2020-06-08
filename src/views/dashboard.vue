<template lang="html">
<div>
  <header>
    <b-container fluid :style="{padding: 0}">
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">cvhero
      <span class="beta-text">beta</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

       <b-nav-item>          <b-button v-on:click="makeToast()" size="sm" variant="primary" class="my-2 my-sm-0">Sign In</b-button>
</b-nav-item>
       <b-nav-item><b-button v-on:click="makeToast()" size="sm" variant="secondary" class="my-2 my-sm-0">Register</b-button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </b-container>
</header>
<div class="text-white d-sm-block d-xl-none">
  Viewport only available in 1200px width or wider.  Widen screen or zoom out to see content.
</div>
<b-container class="bv-example-row  d-none d-xl-block">

  <b-row>
    <b-col  xl="2"></b-col>
    <b-col xl="8">   
     <app-resume></app-resume>
</b-col>
    <b-col  xl="2">    <app-buttonrow></app-buttonrow>
</b-col>
  </b-row>
</b-container>
</template>

<script lang="ts">
import Vue from "vue";

import AppResume from "../components/AppResume.vue";

export default Vue.extend({
  components: {
    child: {
      AppResume
    }
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`Feature Coming Soon`, {
        title: "Notification",
        autoHideDelay: 5000,
        appendToast: append
      });
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