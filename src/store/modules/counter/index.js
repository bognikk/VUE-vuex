import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  // store for counter
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  actions: counterActions,
  mutations: counterMutations,
  getters: counterGetters,
};
