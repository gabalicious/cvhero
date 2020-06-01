import Vue from 'vue';
import Vuex from 'vuex';
import { yamlData } from '../../**/*.yaml';

import axios from 'axios';
Vue.use(Vuex);

// Move to Vuex Store for when create profile feature is added
function getDictionary() {
  let dictionary = [];
  let count = 0;
  let array = Object.keys(yamlData);
  array = array.sort((a, b) => a.localeCompare(b));
  for (let key of array) {
    dictionary.push({ value: count, text: key });
    count++;
  }
  return dictionary;
}
function getLocalStorage(key) {
  return localStorage.getItem(key) === null
    ? setLocalStorage(key, 0)
    : localStorage.getItem(key);
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, data);
  return localStorage.getItem(key);
}
function sortByName(a, b) {
  let nameA = a.toUpperCase(); // ignore upper and lowercase
  let nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
export default new Vuex.Store({
  state: {
    isLoading: false,
    currentResume: {},
    Dictionary: getDictionary(),
    yamlData,
    currentResumeIndex: getLocalStorage('currentSelection'),
    // getLocalStorage: getLocalStorage(key),
    getYamlKeys() {
      let yaml = { ...yamlData };
      return Object.keys(yaml).sort(sortByName)
    }
    // todo
    // 1. See if `getDictionary` and `getYamlKeys` are the same.  Remove one of them.

  },
  getters: {

    // },
    currentProfile(state, getters) {
      let yamlKeys = state.getYamlKeys();
      let currentResumeIndex = state.currentResumeIndex
      let nextArrayValue = yamlKeys[currentResumeIndex];
      let currentProfile = { ...state.yamlData[nextArrayValue] };

      return currentProfile // this.$store.state.todos.filter(todo => todo.done).length
    },
    currentProfileId(state, getters) {
      let currentResumeIndex = state.currentResumeIndex


      return currentResumeIndex // this.$store.state.todos.filter(todo => todo.done).length
    },

  },
  mutations: {
    selectProfile(state, profileId) {
      let currentResumeIndex = state.currentResumeIndex;
      // set profile id for puppeteer pdf render
      if (profileId) {
        currentResumeIndex = profileId;
      }

      ‹      let yamlKeys = state.getYamlKeys();
      let nextArrayValue = yamlKeys[currentResumeIndex];
      let currentProfile = { ...state.yamlData[nextArrayValue] };

      return currentProfile // this.$store.state.todos.filter(todo => todo.done).length
    },
    initialiseSelection(state) {
      // initialise local storage selection if not present
      if (!localStorage.getItem('currentSelection')) {
        setLocalStorage('currentSelection', 0)
      }
    },
    initialiseYaml(state) {
      axios.get('/yamlall').then(function (response: any) {
        let YamlData = response.data;
        console.log('response', YamlData.frontend)

        state.yamlData = { ...YamlData }
      })
        .catch(function (error) {
          // handle error
          console.log('error', error);
        });
      console.log('Load Yaml from server')
    },
    //  This method is called when a user adds or removes text from the resume.

    updateLocalYaml(state) {
      // state.count++;
      // pseudocode\
      // 1b. Update Yaml file for changed data
    },
    //  This method is called when a user selects a resume from the dropdown menu
    selectProfile(state, selected) {
      console.log('select profile called', selected);
      setLocalStorage('currentSelection', selected)
      state.currentResumeIndex = selected;

    }
  },
  actions: {
    updateYaml({ context, state }, payload) {
      console.log(payload)
      let currentResumeIndex = state.currentResumeIndex
      let yamlKeys = state.getYamlKeys();

      let directory = yamlKeys[currentResumeIndex];
      let { property, data, filename, properties } = payload;
      payload.directory = directory;
      console.log(
        '\nproperty: ', property,
        '\nproperties: ', properties,
        '\ndata: ', data,
        '\nfilename: ', filename,
        '\ndirectory: ', directory,
      );
      axios.post('/api/yaml/save2', {
        filename,
        directory,
        keyValue: property,
        data,
        keyValues: properties
      }).then(function (response: any) {
        console.log('response', response)
        // context.commit("updateLocalYaml");
      })
        .catch(function (error) {
          // handle error
          console.log('error', error);
        });
      console.log('api should have ran')
    }
  }
});


