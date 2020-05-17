// index.ts

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue';
import store from './store'
import router from './router';

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  store,
  beforeCreate() {
    this.$store.commit('initialiseSelection');
    this.$store.commit('initialiseYaml');

  },
  render: h => h(App),
  router
});
