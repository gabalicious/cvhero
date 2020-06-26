<template>
  <header>
    <div class="header-top">
      <!-- editable Name -->
      <app-header-property type="h1" property="name" filename="basics.yaml"></app-header-property>
      <!-- editable Position -->
      <app-header-property type="h1" property="label" filename="basics.yaml"></app-header-property>
    </div>
    <div class="header-body">
      <!-- editable location -->
      <span>
        <i class="fas fa-map-marker-alt"></i>
        <app-header-property
          type="span"
          :properties="{ level_one: 'location', level_two: 'city' }"
          filename="basics.yaml"
        ></app-header-property>,
        <app-header-property
          type="span"
          :properties="{ level_one: 'location', level_two: 'region' }"
          filename="basics.yaml"
        ></app-header-property>
      </span>
      <!-- editable number -->
      <span>
        <i class="fas fa-mobile-alt"></i>
        <app-header-property :phone-link="true" type="a" property="phone" filename="basics.yaml"></app-header-property>
      </span>
      <!-- editable email -->
      <span>
        <i class="far fa-envelope"></i>

        <app-header-property :email-link="true" type="a" property="email" filename="basics.yaml"></app-header-property>
      </span>
      <!-- editable website -->
      <span>
        <i class="fas fa-link"></i>
        <app-header-property type="a" property="website" filename="basics.yaml"></app-header-property>
      </span>
      <!-- editable github -->
      <span>
        <i class="fab fa-github"></i>&nbsp;
        <!-- <a
          contenteditable
          :href="social.Github.url"
          target="_blank"
        >{{ social.Github.shortUrl }}</a>-->
        <app-header-property
          type="a"
          :properties="{ level_one: 'profiles', level_two: '1', level_three: 'url' }"
          filename="basics.yaml"
        ></app-header-property>
      </span>
    </div>
  </header>
</template>
// todo Split up templates into smaller components
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppHeaderProperty from "./AppHeaderProperty.vue";
let vm = Vue.component("app-header", {
  props: ["directory"],
  components: {
    child: {
      AppHeaderProperty
    }
  },
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    },
    mailTo: function () {
      // return `${this.basics.email}x?subject=Re:Loved your resume&body=Hi ${
      //   this.basics.name.split("")[0]
      // },`;
      return 0;
    },
    social: function () {
      let newSocialObject = {};
      this.currentProfile.basics.profiles.forEach((jsonItem, i) => {
        newSocialObject[jsonItem.network] = jsonItem;
        newSocialObject[jsonItem.network]["shortUrl"] = (function () {
          return newSocialObject[jsonItem.network]["url"].replace(
            "https://www.",
            ""
          );
        })();
      });
      return newSocialObject;
    }
  }
});
export default vm;
</script>
<style lang="scss" scoped>
</style>