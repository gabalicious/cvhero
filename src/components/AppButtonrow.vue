<template>
  <div class="button-container no-print">
    <b-modal id="toggle-visibility" title="BootstrapVue">
      <toggle-component></toggle-component>
    </b-modal>
    <div>
      <div>
        <b-card-group deck>
          <b-card text-variant="white" class="text-center bg-darker">
            <a :href="`/api/pdf/render/${currentResumeIndex}`">
              <i
                class="fas fas-third fa-file-pdf"
                v-bind:class="[isActive ? activeClass : defaultClass]"
              ></i>
              Print
            </a>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <a
              href="#"
              v-b-modal.toggle-visibility
              @mouseover="isActive = true"
              @mouseleave="isActive = false"
            >
              <i
                class="fas fas-fourth fa-brush"
                v-bind:class="[isActive ? activeClass : defaultClass]"
              ></i>
              <span>Change Theme</span>
            </a>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <a href="#">
              <i
                class="fas fa-tasks fa-primary"
                v-bind:class="[isActive ? activeClass : defaultClass]"
              ></i>
              Add/Remove
            </a>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
                Skills
              </a>
            </b-card-text>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
               Certificates
              </a>
            </b-card-text>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
                Basic Data
              </a>
            </b-card-text>
          </b-card>
        </b-card-group>
              <div class="mt-3">
        <b-card-group deck>
          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
                Projects
              </a>
            </b-card-text>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
                Work History
              </a>
            </b-card-text>
          </b-card>

          <b-card text-variant="white" class="text-center bg-darker">
            <b-card-text>
              <a
                href="#"
                v-b-modal.toggle-visibility
                @mouseover="isActive = true"
                @mouseleave="isActive = false"
              >
                <i
                  class="fas fas-secondary fa-database"
                  v-bind:class="[isActive ? activeClass : defaultClass]"
                ></i>
                Education
              </a>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import toggleComponent from "./toggleComponent.vue";

let vm = Vue.component("app-buttonrow", {
  computed: {
    profileDictionary() {
      return this.$store.state.Dictionary;
    }
    currentResumeIndex: {
      get: function() {
        return this.$store.state.currentResumeIndex;
      },
      set: function(newResumeIndex) {
        this.$store.commit("selectProfile", newResumeIndex);
      }
    }
  },
  data: function() {
    return {
      isActive: false,
      activeClass: "orange",
      defaultClass: "orangered",
      updateYaml: function name(params: type) {
        console.log(params);
      },
      selectProfile: function(index) {
        console.log("currentResumeIndex", index);
      }
    };
  },
    components: {
    child: {
      toggleComponent,
    }
    },
});

export default vm;
</script>

<style lang="scss" scoped>
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
}
.fas-secondary {
  color: #f2a341;
}
.fas-third {
  color: #7fdbff;
}

.fas-primary {
  color: #ff4136;
}
.fas-fourth {
  color: #3D9970
}
a:hover {
  text-decoration: none;
    //  span { text-decoration: underline; }

   i {
    text-decoration: none;
  }
}

a {
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  i {
    font-size: 40px;
  }
 
  > * {
    width: 100%;
  }
}
</style>