<template>
  <article id="projects" v-show="showProjects()">
    <div class="section-header">
      <h3 class="section-header-text">Projects</h3>
    </div>
    <section
      v-show="project.show"
      v-for="(project, projectsIndex) in currentProfile.projects"
      :key="projectsIndex"
      class="experience-50"
    >
      <div class="experience-main">
        <div class="experience-main-top block">
          <app-header-property
            type="span"
            :properties="{
              isArray: true,
              level_one: String(projectsIndex),
              level_two: 'title'
            }"
            filename="projects.yaml"
          ></app-header-property>
        </div>
        <!-- <p class="experience-main-body">{{ project.summary }}</p> -->
        <app-header-property
          type="p"
          :properties="{
            isArray: true,
            level_one: String(projectsIndex),
            level_two: 'summary'
          }"
          filename="projects.yaml"
        ></app-header-property>

        <div class="project-link-wrapper">
          <p class="project-link">
            <span>Github:&nbsp;</span>
            <app-header-property
              type="a"
              :github="true"
              :properties="{
                isArray: true,
                level_one: String(projectsIndex),
                level_two: 'url'
              }"
              filename="projects.yaml"
            ></app-header-property>
          </p>
          <p class="project-link">
            <span>Demo:&nbsp;</span>
            <app-header-property
              type="a"
              :properties="{
                isArray: true,
                level_one: String(projectsIndex),
                level_two: 'repo'
              }"
              filename="projects.yaml"
            ></app-header-property>
          </p>
        </div>
        <p class="project-main-link">
          <span>
            Last Updated:&nbsp
            <app-header-property
              type="span"
              :properties="{
                isArray: true,
                level_one: String(projectsIndex),
                level_two: 'start'
              }"
              filename="projects.yaml"
            ></app-header-property>
          </span>
        </p>
        <p class="experience-main-tags">
          <i
            v-for="(keywords, keywordsIndex) in project.keywords"
            :key="keywordsIndex"
          >
            <app-header-property
              v-html="keywords"
              type="span"
              class="text-black"
              :properties="{
                isArray: true,
                level_one: String(projectsIndex),
                level_two: 'keywords',
                level_three: String(keywordsIndex)
              }"
              filename="projects.yaml"
            ></app-header-property>
          </i>
        </p>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeaderProperty from "./AppHeaderProperty.vue";

// Rename from resume-body to resume-projects
let vm = Vue.component("app-projects", {
  data: function () {
    return {
      showProjects: function () {
        console.log(this.currentProfile);
        let result = this.currentProfile.projects.some(
          (project) => project.show === true
        );
        return result;
      }
    };
  },
  computed: {
    // a computed getter
    currentProfile() {
      return this.$store.getters.currentProfile;
    }
  },
  methods: {
    onEdit(evt) {
      let data = evt.target.innerText;

      let { property = null, properties = null, filename } = this;
      console.log(filename);
      let payload = { property, data, filename, properties };
      this.updateYaml(payload);
    },
    endEdit(evt) {
      evt.target.blur();
    },
    updateYaml(payload) {
      //  Call vuex mutator
      this.$store.dispatch("updateYaml", payload);
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
#projects {
  .project-link-wrapper {
    display: flex;
    flex-basis: 100%;
    margin-bottom: 8px;
    .project-link {
      margin: 0;
      margin-right: 20px;
    }
  }

  display: flex;
  flex-wrap: wrap;
  .section-header {
    flex-basis: 100%;
  }
  .experience-50 {
    flex-basis: 50%;
  }
  i {
    color: var(--main-color);
    .icon-text {
      color: black;
    }
  }
}
</style>