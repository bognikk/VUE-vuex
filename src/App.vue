<template>
	<base-container title="Vuex" v-if="isAuth">
		<the-counter></the-counter>
		<favorite-value></favorite-value>
		<button @click="addOne">Add 10</button>
		<change-counter></change-counter>
	</base-container>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
	},
	computed: {
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
		},
	},
	methods: {
		addOne() {
			// this.$store.state.counter = this.$store.state.counter + 11;
			// this.$store.commit('increment');
			// this.$store.commit('increase', { value: 10 });

			// form mutation
			// this.$store.commit({
			// 	type: 'increase',
			// 	value: 10,
			// });

			// form actions below
			this.$store.dispatch({
				type: 'numbers/increaseAction',
				value: 10,
			});
		},
	},
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

button,
a {
	padding: 0.5rem 2rem;
	border: 1px solid transparent;
	text-align: center;
	font: inherit;
	font-size: 17px;
	font-weight: 700;
	color: #000;
	text-decoration: none;
	background-color: #42b883;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: #35495e;
		color: #fff;
	}
}
</style>