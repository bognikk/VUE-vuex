export default {
  //mutations must be synchronous
  // always manipulate state from mutations and not from actions
  incrementMutation(state) {
    state.counter = state.counter + 2;
  },
  increaseMutation(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
