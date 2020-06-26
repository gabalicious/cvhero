<template>
  <span class="main-container" v-if="currentProfile">
    <main class="resume-container">

    </main>
  </span>
  <span v-else>Fail</span>
</template>

<script lang="ts">
import Vue from "vue";


let vm = Vue.component("app-resume", {
  computed: {
    currentProfile() {
      if (this.resumeId) {
        this.$store.commit("selectProfile", this.resumeId);
      }
      return this.$store.getters.currentProfile;
    }
  },

  components: {
    child: {

    }
  },
  props: {
    resumeId: String
  }
});

export default vm;
</script>

<style lang="scss" scoped>

@media only screen {
//   .resume-container {
//     outline: 5px solid hsl(0, 0%, 60%);

//     /* #4 AND INFINITY!!! (CSS3 only) */
//     box-shadow: 0 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%);
//     background: white;
//     width: 1107px;
//     padding-top: 30px;
//     padding-right: 30px;
//     padding-bottom: 30px;
//     padding-left: 30px;
//     height: 11in;
//     overflow: scroll;

//     -webkit-transform: scale(0.65);
//     transform: scale(0.65);
//     -webkit-transform-origin: 0 0;
//     transform-origin: 0 0;
//   }
// }
</style>