<template>
  <span>
    <div class="section-header">
      <h3 class="section-header-text">Highlighted Experience</h3>
      <h3 class="section-header-text--notes">Notes</h3>
    </div>
    <article>
      <!-- TODO Use Vuex filter instead of v-show -->
      <section
        v-for="(workItem, experienceIndex) in currentProfile.work"
        v-show="workItem.show"
        class="experience"
      >
        <div class="experience-main">
          <div class="experience-main-top">
            <span>
              <app-header-property
                type="span"
                :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'position' }"
                filename="work.yaml"
              ></app-header-property>,
              <app-header-property
                type="span"
                :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'company' }"
                filename="work.yaml"
              ></app-header-property>
            </span>
            <span>
              <app-header-property
                type="span"
                :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'startDate' }"
                filename="work.yaml"
              ></app-header-property>—
              <app-header-property
                type="span"
                :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'endDate' }"
                filename="work.yaml"
              ></app-header-property>
            </span>
          </div>
          <app-header-property
            type="p"
            :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'summary' }"
            filename="work.yaml"
          ></app-header-property>
          <ul v-if="workItem.highlights.length">
            <app-header-property
              v-for="(highlight, highlightIndex) in workItem.highlights"
              type="li"
              :properties="{ isArray: true, level_one: String(experienceIndex), level_two: 'highlights', level_three: String(highlightIndex)}"
              filename="work.yaml"
            ></app-header-property>
          </ul>
        </div>
        <!-- TODO Move notes and make functional -->
        <div class="experience-notes">
          <ul>
            <li>
              Changes Notes:&nbsp;
              <ul>
                <li
                  spellcheck="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index="96"
                  medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                  data-placeholder="Type your text"
                  data-medium-focused="true"
                >None</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Interview Notes:&nbsp;
              <ul>
                <li
                  spellcheck="true"
                  role="textbox"
                  aria-multiline="true"
                  data-medium-editor-editor-index="96"
                  medium-editor-index="59c5c956-bf4b-946d-2805-f36d99089e57"
                  data-placeholder="Type your text"
                  data-medium-focused="true"
                >None</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import AppHeaderProperty from "./AppHeaderProperty.vue";

let vm = Vue.component("app-experience", {
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    }
  },
  components: {
    child: {
      AppHeaderProperty
    }
  }
});

export default vm;
</script>

<style lang="scss" scoped>
.experience-main-top {
  font-size: 20px;
}
ul {
  margin: 0 7px;
  padding: 0 0 0 16px;
  li {
    margin: 2px 0 2px;
  }
}
p {
  margin: 3px 0 4px;
}
ul,
p {
  font-size: 19px;
}
section {
  margin-bottom: 5px;
}
</style>