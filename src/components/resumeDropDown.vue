<template>
  <div class="button-container form-group no-print modal-body-select">
    <div class="modal-body-select-text text-light">Select</div>
    <select
      v-model="currentResumeIndex"
      v-on:change="selectProfile(currentResumeIndex)"
      class="form-control"
    >
      <option
        v-for="(option,index) in profileDictionary"
        v-bind:value="option.value"
        :key="index"
      >{{ option.text }}</option>
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
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body-select-text {
  width: 75px;
}
</style>