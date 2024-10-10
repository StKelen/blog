<svelte:head>
	<title>卑卑</title>
	<meta name="description" content="Svelte demo app" />
  <script src="https://cdn.bootcdn.net/ajax/libs/feather-icons/4.29.2/feather.min.js"></script>
</svelte:head>

<script lang="ts">
	import { browser } from '$app/environment';
	if (browser) {
		feather.replace();
	}
</script>

<div>PLACEHOLDER</div>

<style>
</style>
