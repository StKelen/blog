<script>
	import '../app.css';
	import Footer from './components/Footer.svelte';
	import Aside from './components/Aside/index.svelte';
</script>

<div class="app">
	<div class="container">
		<Aside />
		<slot />
	</div>
	<Footer />
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
	}
	.container {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
		padding: 16px;
		flex-shrink: 1;
		flex-grow: 1;
	}
</style>
