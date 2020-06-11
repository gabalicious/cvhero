<template>
  <div>
    <navigation-header></navigation-header>
    <div class="full-height">
      <b-container>
        <b-row>
          <b-col xl="2"></b-col>
          <b-col xl="8">
            <div class="cover-container">
              <h1 class="cover-heading">Build Your Resume with CV Hero.</h1>
              <p
                class="lead"
              >CV Hero is a resume builder web app. It allows you to edit your resume in a WYSIWYG interface without having to worry about formatting and spacing.</p>
              <p class="lead">
                <b-button to="/resumedemo" size="lg" variant="secondary">Try a test account!</b-button>
              </p>
            </div>
          </b-col>
          <b-col xl="2"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigtionHeader from "../components/NavigtionHeader.vue";

let vm = Vue.component("login-view", {
  components: {
    child: { NavigtionHeader }
  },
  data: function () {
    return {};
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 63px);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.cover-heading {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.lead {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.cover-container {
  background: #dc3546d3;
  padding: 1.75rem;
  margin-bottom: 33%;
  border-radius: 5px;
}
</style>