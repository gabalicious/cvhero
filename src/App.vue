<template lang="html">
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";

import AppResume from "./components/AppResume.vue";

export default Vue.extend({
  components: {
    child: {
      AppResume
    }
  }
});
</script>

<style lang="scss" scoped>
</style>