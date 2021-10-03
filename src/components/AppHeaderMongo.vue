<template>
  <header>
    <div class="header-top">
      <!-- editable Name -->
      <app-header-property-mongo
        type="h1"
        property="name"
        route="basics"
      ></app-header-property-mongo>
      <!-- editable Position -->
      <app-header-property-mongo
        type="h1"
        property="label"
        filename="basics"
      ></app-header-property-mongo>
    </div>
    <div class="header-body">
      <!-- editable location -->
      <span>
        <i class="fas fa-map-marker-alt"></i>
        <app-header-property-mongo
          type="span"
          property="city"
          filename="basics"
        ></app-header-property-mongo
        >,
        <app-header-property-mongo
          type="span"
          property="state"
          filename="basics"
        ></app-header-property-mongo>
      </span>
      <!-- editable number -->
      <span>
        <i class="fas fa-mobile-alt"></i>
        <app-header-property-mongo
          :phone-link="true"
          type="a"
          property="phone"
          filename="basics"
        ></app-header-property-mongo>
      </span>
      <!-- editable email -->
      <span>
        <i class="far fa-envelope"></i>

        <app-header-property-mongo
          :email-link="true"
          type="a"
          property="email"
          filename="basics"
        ></app-header-property-mongo>
      </span>
      <!-- editable website -->
      <span>
        <i class="fas fa-link"></i>
        <app-header-property-mongo
          type="a"
          property="website"
          filename="basics"
        ></app-header-property-mongo>
      </span>
      <!-- editable github -->
      <span>
        <i class="fab fa-github"></i>&nbsp;

        <app-header-property-mongo
          type="a"
          property="github"
          filename="basics"
        ></app-header-property-mongo>
      </span>
    </div>
  </header>
</template>
// todo Split up templates into smaller components
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppHeaderPropertyMongo from "./AppHeaderPropertyMongo.vue";
let vm = Vue.component("app-header-mongo", {
  props: ["directory"],
  components: {
    child: {
      AppHeaderPropertyMongo
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