import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    //it is a good practice to always call actions before mutations
    incrementAction(context) {
      setTimeout(function () {
        context.commit('incrementMutation');
      }, 2000);
    },
    increaseAction(context, payload) {
      setTimeout(function () {
        context.commit('increaseMutation', payload);
      }, 2000);
    },
  },
  mutations: {
    //mutations must be synchronous
    // always manipulate state from mutations and not from actions
    incrementMutation(state) {
      state.counter = state.counter + 2;
    },
    increaseMutation(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
