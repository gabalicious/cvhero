
<template>
  <div id="profile">
    <h3 class="section-header-text">Profile</h3>
    <h3 class="section-header-text--notes">Notes</h3>
    <article>
      <section class="experience">
        <div class="experience-main">
          <p
            v-html="currentProfile.basics.summary"
            contenteditable
            @blur="onEdit"
            @keydown.enter="endEdit"
            style="line-height: 1.15em;"
            class="experience-main-body editme"
          ></p>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

let vm = Vue.component("app-profile", {
  data: function() {
    return {
      hoverState: false
    };
  },

  props: ["profile", "profileKey", "directory"],
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    }
  },
  methods: {
    onEdit(evt) {
      let data = evt.target.innerText;

      let property = "summary",
        filename = "basics.yaml";
      let payload = { property, data, filename };
      this.updateYaml(payload);
    },
    endEdit(evt) {
      evt.target.blur();
    },
    updateYaml(payload) {
      //  Call vuex mutator
      console.log("payload ", payload);
      this.$store.dispatch("updateYaml", payload);
    }
  },
  props: {
    property: String,
    directory: String,
    filename: String,
    properties: Object,
    type: String
  }
});

export default vm;
</script>
<style lang="scss" scoped>
.section-header-text {
  margin: 1rem 0 0.35rem 0;
  padding: 0 0 0.35rem 0;
}
.experience-main-body,
p,
div {
  font-size: 20px;
}
.hoverTrue {
  // background: yellow;
}
</style>
