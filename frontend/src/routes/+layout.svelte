<script>
	import '../app.css';
	export let data;
</script>

<svelte:head>
	<link rel="icon" href={data.faviconUrl} />
</svelte:head>

<slot />
