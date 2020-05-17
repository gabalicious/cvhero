<template>
  <div class="flex-item-50">
    <div class="section-header">
      <h3 class="section-header-text skills">Highlighted Skills</h3>
    </div>
    <table class="skillsTable">
      <tbody>
        <tr class="skillsTable-header-row">
          <!-- <th
            contenteditable
            @blur="onEdit"
            @keydown.enter="endEdit"
            data-index="i"
            data-key="name"
            class="skillsTable-header-row-cell"
          >
            <span class="skillsTable-header-row-cell-fixpadding">{{ item.name }}</span>
          </th>-->
          <app-header-property
            v-for="(item, skillsIndex) in currentProfile.skills"
            type="th"
            :properties="{ isArray: true, level_one: String(skillsIndex), level_two: 'name' }"
            filename="skills.yaml"
          ></app-header-property>
        </tr>
        <tr v-for="(item, i) in currentProfile.skills[0]['keywords']">
          <app-header-property
            v-for="(item2, j) in currentProfile.skills"
            type="td"
            :properties="{ isArray: true, level_one: String(j), level_two: 'keywords',level_three: String(i) }"
            filename="skills.yaml"
          ></app-header-property>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("app-skills", {
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
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.experience-main-body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  strong {
    width: 100%;
  }
}

.section-header-text.skills {
  margin-bottom: 0.5rem;
}
table.skillsTable {
  border-collapse: collapse;
}

th.skillsTable-header-row-cell {
  font-weight: 600;
  font-size: 18px;
}
span.skillsTable-header-row-cell-fixpadding {
  display: flex;
  justify-content: flex-start;
  height: 21.5px;
  align-items: flex-end;
  padding-top: 0;
}
</style>