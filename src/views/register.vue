<template>
  <div>
    <navigation-header></navigation-header>
    <div class="full-height">
      <b-container>
        <b-row>
          <b-col xl="4"></b-col>
          <b-col class="login-container" xl="4">
            <h3 class="text-dark">Register</h3>
            <div class="center-buttons">
              <b-button variant="dark" v-on:click="makeToast()">
                <i class="fab fa-github"></i> Github
              </b-button>
              <b-button v-on:click="makeToast()" variant="danger">
                <i class="fab fa-google"></i> Google
              </b-button>
              <b-button v-on:click="makeToast()" variant="primary">
                <i class="fab fa-linkedin"></i> Linkedin
              </b-button>
            </div>
            <div class="division">
              <div class="line"></div>
              <div class="text-dark">or</div>
              <div class="line"></div>
            </div>
            <div>
              <b-form>
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input disabled type="email" required placeholder="Email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input disabled id="input-2" required placeholder="Enter name"></b-form-input>
                </b-form-group>

                <b-button v-on:click="makeToast()" variant="primary">Submit</b-button>
                <b-button to="resumedemo" variant="warning">
                  <i class="fas fa-user-circle shadow"></i>
                  <span class="text-white shadow">Try Test Account</span>
                </b-button>
              </b-form>
            </div>
          </b-col>
          <b-col xl="4"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigtionHeader from "../components/NavigtionHeader.vue";

let vm = Vue.component("register-view", {
  components: {
    child: { NavigtionHeader }
  },
  data: function () {
    return {};
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`Feature Coming Soon`, {
        title: "Notification",
        autoHideDelay: 5000,
        appendToast: append
      });
    }
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
.login-container {
  border-radius: 7px;
  padding: 20px;
  background: #ffffff99;
  margin-bottom: 100px;
}
i {
  color: #ffffff;
}
.division {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  .line {
    border-top: 1px solid #ffffff90;
    height: 1px;
    flex-basis: 33%;
  }
}
.shadow {
  text-shadow: 1px 1px 2px #000000;
}

button,
a.btn {
  margin-top: 15px;
}
.center-buttons {
  display: flex;
  justify-content: space-between;
}
</style>