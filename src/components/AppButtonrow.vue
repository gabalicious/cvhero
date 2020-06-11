<template>
  <div class="button-container no-print">
    <a :href="`/api/pdf/render/${currentResumeIndex}`">
      <i class="fas fa-file-pdf" v-bind:class="[isActive ? activeClass : defaultClass]"></i>
      Print PDF
    </a>

    <a href="#" v-b-modal.modal-1 @mouseover="isActive = true" @mouseleave="isActive = false">
      <i class="fas fa-database" v-bind:class="[isActive ? activeClass : defaultClass]"></i>
      Manage Data
    </a>

    <b-modal id="modal-1" title="BootstrapVue">
      <toggle-component></toggle-component>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import toggleComponent from "./toggleComponent.vue";

let vm = Vue.component("app-buttonrow", {
  computed: {
    profileDictionary() {
      return this.$store.state.Dictionary;
    }
    currentResumeIndex: {
      get: function() {
        return this.$store.state.currentResumeIndex;
      },
      set: function(newResumeIndex) {
        this.$store.commit("selectProfile", newResumeIndex);
      }
    }
  },
  data: function() {
    return {
      isActive: false,
      activeClass: "orange",
      defaultClass: "orangered",
      updateYaml: function name(params: type) {
        console.log(params);
      },
      selectProfile: function(index) {
        console.log("currentResumeIndex", index);
      }
    };
  },
    components: {
    child: {
      toggleComponent,
    }
    },
});

export default vm;
</script>

<style lang="scss" scoped>
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
}

.button-container {
  margin-top: 50px;
  a {
    width: 100%;
    display: block;
    color: wheat;
  }
}
</style>