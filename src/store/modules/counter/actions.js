export default {
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
};
