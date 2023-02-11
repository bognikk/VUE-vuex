import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

// global / main store
const store = createStore({
  modules: {
    numbers: counterModule, // numbers will be used for namespace of the counterModule module
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },
  actions: rootActions,
  mutations: rootMutations,
  getters: rootGetters,
});

export default store;
