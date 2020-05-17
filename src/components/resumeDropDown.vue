<template>
  <div class="button-container form-group no-print modal-body-select">
    <div class="modal-body-select-text">Select</div>
    <select
      v-model="currentResumeIndex"
      v-on:change="selectProfile(currentResumeIndex)"
      class="form-control"
    >
      <option v-for="option in profileDictionary" v-bind:value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("resume-drop-down", {
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

      updateYaml: function name(params: type) {
        console.log(params);
      },
      selectProfile: function(index) {
        console.log("currentResumeIndex", index);
      }
    };
  },

});

export default vm;
</script>

<style lang="scss" scoped>
</style>