<template lang="html">
<div>
  <header>
    <b-container fluid :style="{padding: 0}">
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">cvhero</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

       <b-nav-item>          <b-button size="sm" variant="primary" class="my-2 my-sm-0">Sign In</b-button>
</b-nav-item>
       <b-nav-item><b-button size="sm" variant="secondary" class="my-2 my-sm-0">Register</b-button></b-nav-item>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">English</b-dropdown-item>
          <b-dropdown-item href="#">Español</b-dropdown-item>
          <b-dropdown-item href="#">Pусский</b-dropdown-item>
          <b-dropdown-item href="#">Français</b-dropdown-item>
          <b-dropdown-item href="#">עברית</b-dropdown-item>
        </b-nav-item-dropdown>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </b-container>
</header>
<b-container class="bv-example-row">

  <b-row>
    <b-col col lg="2"></b-col>
    <b-col col lg="8">   
     <app-resume></app-resume>
</b-col>
    <b-col col lg="2">    <app-buttonrow></app-buttonrow>
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
  }
});
</script>

<style lang="scss" scoped>
</style>