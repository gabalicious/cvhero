<template>
  <component
    class="header-top-item show-justin"
    @blur="onEdit"
    @keydown.enter="endEdit"
    contenteditable
    v-bind:is="type"
    >{{ propertyValue }}</component
  >
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("app-header-property-mongo", {
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
      console.log('email', this.emailLink)
      console.log('phone', this.phoneLink)
      return this.github === true
        ? `https://github.com/${this.propertyValue}`
        : this.emailLink===true ? `mailto:${this.propertyValue}` : this.phoneLink===true ? `tel:${this.propertyValue}` : `https://${this.propertyValue}`;
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
    github: Boolean,
    phoneLink: Boolean,
    emailLink: Boolean,
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
h1 {
  font-size: calc(1vw + 1vh + 1vmin);
}
</style>