<template>
  <span>
    <resume-drop-down></resume-drop-down>
    <div class="modal-body">
      <h3>Toggle Experience</h3>
      <div v-for="(job,jobIndex) in currentProfile.work" :key="jobIndex" class="modal-body-child">
        {{job.company}} | {{job.show }}
        <b-form-checkbox
          class="flex-inline"
          v-on:change="updateYaml(job)"
          v-model="job.show"
          switch
          size="lg"
        ></b-form-checkbox>
      </div>
      <h3>Toggle Projects</h3>

      <div
        v-for="(project,projectIndex) in currentProfile.projects"
        :key="projectIndex"
        class="modal-body-child"
      >
        {{project.title}} | {{project.show }}
        <b-form-checkbox
          class="flex-inline"
          v-on:change="updateYaml(project)"
          v-model="project.show"
          switch
          size="lg"
        ></b-form-checkbox>
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("toggle-component", {
  computed: {
    currentResumeIndex: {
      get: function () {
        return this.$store.state.currentResumeIndex;
      },
      set: function (newResumeIndex) {
        this.$store.commit("selectProfile", newResumeIndex);
      }
    },
    currentProfile() {
      return this.$store.getters.currentProfile;
    }
  },
  data: function () {
    return {};
  },
  components: {
    child: {
      resumeDropDown
    }
  }
});
import resumeDropDown from "./resumeDropDown.vue";

export default vm;
</script>

<style lang="scss" scoped>
.flex-inline {
  display: inline-flex;
}
.modal-body h3 {
  padding-top: 20px;
}
.modal-body-child {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
}

.modal-body-select {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 2.5px;
}
.modal-body-select-text {
  display: flex;
  align-items: center;
  min-width: 88px;
}

@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
}
</style>