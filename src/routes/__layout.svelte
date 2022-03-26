<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style global lang="scss">
	@use 'src/styles/app.scss';
</style>
