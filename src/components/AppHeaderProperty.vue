<template>
  <!-- Edit H1 -->
  <h1
    v-if="type==='h1'"
    class="header-top-item show-justin"
    contenteditable
    @blur="onEdit"
    @keydown.enter="endEdit"
  >{{propertyValue}}</h1>
  <a
    :href="'https://'+ propertyValue"
    contenteditable
    v-else-if="type==='a'"
    @blur="onEdit"
    @keydown.enter="endEdit"
  >{{propertyValue}}</a>
  <li
    v-html="propertyValue"
    contenteditable
    v-else-if="type==='li'"
    @blur="onEdit"
    @keydown.enter="endEdit"
  ></li>
  <p
    v-html="propertyValue"
    href
    contenteditable
    v-else-if="type==='p'"
    @blur="onEdit"
    @keydown.enter="endEdit"
  ></p>
  <th
    v-else-if="type==='th'"
    contenteditable
    @blur="onEdit"
    @keydown.enter="endEdit"
    data-index="i"
    data-key="name"
    class="skillsTable-header-row-cell"
  >
    <span class="skillsTable-header-row-cell-fixpadding">{{ propertyValue }}</span>
  </th>
  <td
    v-else-if="type==='td'"
    contenteditable
    @blur="onEdit"
    @keydown.enter="endEdit"
    @keydown.delete="endDelete"
    data-index="i"
    data-key="keywords"
    data-index-second="j"
  >{{ propertyValue}}</td>
  <strong
    v-else-if="type==='strong'"
    contenteditable
    @blur="onEdit"
    @keydown.enter="endEdit"
    data-key="area"
  >{{ propertyValue }}</strong>
  <!-- Edit Single level property span -->
  <span
    v-html="propertyValue"
    :class="className"
    contenteditable
    v-else
    @blur="onEdit"
    @keydown.enter="endEdit"
  ></span>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("app-header-property", {
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    },
    levelZero() {
      return this.filename.split(".")[0];
    },
    propertyValue() {
      let { currentProfile, levelZero, property, properties } = this;
      if (properties?.level_three)
        return currentProfile[levelZero][properties.level_one][
          properties.level_two
        ][properties.level_three];
      else if (properties?.level_two)
        return currentProfile[levelZero][properties.level_one][
          properties.level_two
        ];
      return currentProfile[levelZero][property];
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
  props: {
    property: String,
    directory: String,
    filename: String,
    properties: Object,
    type: String,
    className: String
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.text-black {
  color: black;
}
</style>