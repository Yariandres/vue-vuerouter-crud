<template>
	<div>
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './components/header/Header';

	export default {
		name: 'App',
		components: {
			Header,
		},
	};
</script>

<style>
	.slide-enter-active {
		animation: slide-in 200ms ease-out forwards;
	}
	.slide-leave-active {
		animation: slide-out 200ms ease-out forwards;
	}
	@keyframes slide-in {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
