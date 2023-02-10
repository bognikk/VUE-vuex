<template>
	<section>
		<h2>{{ title }}</h2>
		<slot></slot>
	</section>
</template>

<script>
export default {
	props: ['title'],
};
</script>

<style lang="scss" scoped>
section {
	max-width: 40rem;
	padding: 2rem;
	margin: 2rem auto;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

	h2 {
		text-align: center;
	}
}
</style>