<template>
	<button @click="increment">Add 2</button>
	<button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		// addOne() {
		// 	// this.$store.state.counter = this.$store.state.counter + 1;
		// 	// this.$store.commit('incrementMutation');

		// 	// this.$store.dispatch('incrementAction');
		// },

		// ...mapActions(['increaseAction', 'incrementAction']),

		// naming mapped actions
		...mapActions('numbers', {
			increment: 'incrementAction',
			increase: 'increaseAction',
		}),
	},
};
</script>