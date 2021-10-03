<template>
  <header>
    <b-container fluid :style="{ padding: 0 }">
      <b-navbar toggleable="lg" type="dark" :variant="accent">
        <b-navbar-brand to="/">
          cvhero
          <span class="beta-text">beta</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <b-button
                v-on:click="signIn()"
                class="my-2 my-sm-0"
                size="sm"
                variant="primary"
                >Sign In</b-button
              >
            </b-nav-item>
            <b-nav-item>
              <b-button
                v-on:click="register()"
                class="my-2 my-sm-0"
                size="sm"
                variant="secondary"
                >Register</b-button
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
let vm = Vue.component("navigation-header", {
  data: function () {
    return {};
  },
  props: {
    // Basic type check (`null` and `undefined` values will pass any type validation)
    accent: {
      type: String,
      default: "danger"
    }
  },
  methods: {
    signIn() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    }
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.beta-text {
  font-size: 0.55em;
  position: relative;
  letter-spacing: 0.1em;
  font-family: Comic Sans MS, Textile, Cursive;
  top: -7px;
  left: -2px;
  color: white;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: #00000030;
}
</style>