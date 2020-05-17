<template>
  <article class="flex">
    <app-skills></app-skills>

    <app-education></app-education>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppEducation from "./AppEducation.vue";
import AppSkills from "./AppSkills.vue";

let vm = Vue.component("app-middle-block", {
  components: {
    child: {
      AppEducation,
      AppSkills
    }
  }
});

export default vm;
</script>

<style lang="scss" scoped>
</style>