<template>
  <div class="flex-item-50">
    <div class="section-header">
      <h3 class="section-header-text">Education</h3>
    </div>
    <section v-for="(item, i) in currentProfile.education" :key="i" class="experience">
      <div class="education-main">
        <div class="experience-main-top">
          <app-header-property
            type="span"
            :properties="{ level_one: String(i), level_two: 'institution' }"
            filename="education.yaml"
          ></app-header-property>
          <span>
            <app-header-property
              type="span"
              :properties="{ level_one: String(i), level_two: 'startDate' }"
              filename="education.yaml"
            ></app-header-property>—
            <app-header-property
              type="span"
              :properties="{ level_one: String(i), level_two: 'endDate' }"
              filename="education.yaml"
            ></app-header-property>
          </span>
        </div>
        <p class="experience-main-body">
          <app-header-property
            type="strong"
            :properties="{ level_one: String(i), level_two: 'area'}"
            filename="education.yaml"
          ></app-header-property>

          <app-header-property
            v-for="(course, j) in item.courses"
            :key="j"
            type="span"
            :properties="{ level_one: String(i), level_two: 'courses', level_three: String(j) }"
            filename="education.yaml"
          ></app-header-property>
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeaderProperty from "./AppHeaderProperty.vue";

let vm = Vue.component("app-education", {
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    }
  },
  methods: {
    onEdit(evt) {
      let data = evt.target.innerText;

      let { property = null, properties = null, filename } = this;
      console.log(filename);
      let payload = { property, data, filename, properties };
      this.updateYaml(payload);
    },
    endEdit(evt) {
      evt.target.blur();
    },
    updateYaml(payload) {
      //  Call vuex mutator
      this.$store.dispatch("updateYaml", payload);
    }
  },

  components: {
    child: {
      AppHeaderProperty
    }
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.education-main {
  width: 100%;
}
.experience-main-body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  strong {
    width: 100%;
  }
}
</style>