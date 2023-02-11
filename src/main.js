import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// store for counter
const counterModule = {
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
};

// global / main store
const store = createStore({
  modules: {
    numbers: counterModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
