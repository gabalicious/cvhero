<template>
  <div>
    <app-resume :resume-id="resumeId"></app-resume>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

let vm = Vue.component("resume-view", {
  components: {
    child: {}
  },
  data: function(){
    return{
      resumeId: this.$route.params.id || undefined;
    }
  }
});

export default vm;
</script>

<style lang="scss" scoped>
main {
  margin-top: 50px;
}
</style>