<template>
  <span class="main-container" v-if="currentProfile">
    <main class="resume-container">
      <h2 class="text-dark">
        <i class="fas fas-secondary fa-database"></i> Add / Remove
      </h2>
      <hr />
      <div class="bg-main">Coming Soon.</div>
    </main>
  </span>
  <span v-else>Fail</span>
</template>

<script lang="ts">
import Vue from "vue";
// import AppButtonrow from "./AppButtonrow.vue";
// import AppHeader from "./AppHeader.vue";
// import AppProjects from "./AppProjects.vue";
// import resumeFooter from "./resumeFooter.vue";
// import AppProfile from "./AppProfile.vue";
// import AppExperience from "./AppExperience.vue";
// import AppMiddleBlock from "./AppMiddleBlock.vue";

let vm = Vue.component("crud-add-remove", {
  computed: {
    currentProfile() {
      console.log(this.resumeId);
      if (this.resumeId) {
        this.$store.commit("selectProfile", this.resumeId);
      }
      return this.$store.getters.currentProfile;
    }
  },

  components: {
    child: {}
  },
  props: {
    resumeId: String
  }
});

export default vm;
</script>

<style lang="scss" scoped>
main {
  margin-top: 25px;
}
.bg-main {
  background-color: #f8f9fa60;
  min-height: 65vh;
  padding: 20px;
  border-radius: 17px;
  box-shadow: 0 0 0 1px rgba(206, 214, 238, 0.9),
    0 0 0 0px rgba(124, 124, 124, 0.9);
}

.fas-secondary {
  color: #c71616;
}
.main-container {
  height: 100vh;
}
@media only screen {
  .resume-container::-webkit-scrollbar-thumb {
    background: linear-gradient(
      135deg,
      rgba(39, 55, 105, 0.5) 0%,
      rgba(223, 104, 25, 0.5) 65%,
      rgba(58, 142, 145, 0.5) 100%
    );
    background: white;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  .resume-container::-webkit-scrollbar {
    width: 16px;
  }
  .resume-container {
    /* #4 AND INFINITY!!! (CSS3 only) */
    box-shadow: 0 0 0 1px rgba(206, 214, 238, 0.9),
      0 0 0 0px rgba(124, 124, 124, 0.9);

    width: 100%;
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;

    min-height: calc(100vh - 5vh - 104px);
    overflow: overlay;
    border-radius: 20px;
    // -webkit-transform: scale(0.65);
    // transform: scale(0.65);
    // -webkit-transform-origin: 0 0;
    // transform-origin: 0 0;
  }
}
</style>