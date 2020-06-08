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
    :href="formattedUrl"
    target="_blank"
    contenteditable
    v-else-if="type==='a'"
    @blur="onEdit"
    @keydown.enter="endEdit"
  >{{propertyValue}}</a>
  <li v-else-if="type==='li'" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <span
      v-html="propertyValue"
      :class="className"
      contenteditable
      @blur="onEdit"
      @keydown.enter="endEdit"
    ></span>
    <span v-show="active">
      <a href="#" v-on:click="makeToast()">
        <i class="fas fa-plus-circle text-success"></i>
      </a>
      <a href="#" v-on:click="makeToast()">
        <i class="fas fa-trash-alt text-danger"></i>
      </a>
    </span>
  </li>
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
    v-else
    v-html="propertyValue"
    :class="className"
    contenteditable
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
    },
    formattedUrl() {
      return this.github === true
        ? `https://github.com/${this.propertyValue}`
        : `https://${this.propertyValue}`;
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
    },

    mouseEnter (evt) {
      this.active = true;
    },
    mouseLeave (evt) {
      this.active = false;
    },
          makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`Feature Coming Soon`, {
          title: 'Notification',
          autoHideDelay: 5000,
          appendToast: append
        })
      }
  },
  data: function() {
    return {
      active: false;
    }
  }
  props: {
    property: String,
    directory: String,
    filename: String,
    properties: Object,
    type: String,
    className: String,
    github: Boolean
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.text-black {
  color: black;
}
.inner-float {
  display: none;
}
.inner-float:hover {
  display: none;

  position: absolute;
}
</style>