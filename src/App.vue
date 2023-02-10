<template>
	<base-container title="Vuex">
		<h3>{{ $store.state.counter }}</h3>
		<button>Add 1</button>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
	components: {
		BaseContainer,
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
	border-radius: 12px;
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