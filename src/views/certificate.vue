<template>
  <div>
    <navigation-header></navigation-header>
    <!-- <div
      class="text-white d-sm-block d-xl-none"
    >Viewport only available in 1200px width or wider. Widen screen or zoom out to see content.</div>-->

    <b-container class="bv-example-row">
      <div class="bolt-container">
        <a
          href="#"
          @click="toggleModal"
          ref="toggle-menu"
          @mouseover="isActive = true"
          @mouseleave="isActive = false"
        >
          <i class="fas fa-bolt"></i>
        </a>

        <b-modal
          modal-class="bg-heyui-modal"
          hide-backdrop
          content-class="bg-heyui"
          body-bg-variant="transparent"
          no-fade
          :hide-header="true"
          :hide-footer="true"
          header-bg-variant="dark"
          header-text-variant="white"
          id="toggle-menu"
          title="Options"
        >
          <app-buttonrow></app-buttonrow>
          <b-button class="btn-space" @click="toggleModal">Close</b-button>
        </b-modal>
      </div>
      <b-row>
        <b-col xl="12"></b-col>
      </b-row>
      <b-row>
        <b-col xl="1"></b-col>
        <b-col xl="10">
          <span class="fix-height">
            <crud-certificate></crud-certificate>
          </span>
        </b-col>
        <b-col xl="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CrudCertificate from "../components/data-components/CrudCertificate.vue";
import NavigtionHeader from "../components/NavigtionHeader.vue";
import AppButtonrow from "../components/AppButtonrow.vue";

export default Vue.extend({
  components: {
    child: {
      CrudCertificate,
      NavigtionHeader,
      AppButtonrow
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    setTrue() {
      this.show = !this.show;
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "toggle-menu", "#btnToggle");
    }
  },
  created: function () {
    document.body.classList.add("overlay");
  },
  destroyed: function () {
    document.body.classList.remove("overlay");
  }
});
</script>

<style lang="scss" scoped>
.bolt-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  a:active {
    position: relative;
    top: 2px;
    left: 2px;
  }
  a {
    background: linear-gradient(
      135deg,
      rgba(39, 55, 105, 0.5) 0%,
      rgba(223, 104, 25, 0.5) 65%,
      rgba(58, 142, 145, 0.5) 100%
    );
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    font-size: 20px;
  }
}
.btn-space {
  margin-top: 20px;
}
.fix-height {
  height: 962px;
  max-height: 962px;
}
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