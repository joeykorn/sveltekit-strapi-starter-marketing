<script>
	import { Header } from '$lib/components';
	import { Footer } from '$lib/components';
	import '../app.css';
	export let data;
</script>

<svelte:head>
	<link rel="icon" href={data.faviconUrl} />
</svelte:head>

<main>
	<slot />
</main>

<!-- <Header {logoUrl} {logoAlt} /> -->

<!--<Footer
	{logoUrl}
	{logoAlt}
	message={footer.message}
	facebookLink={footer.facebookLink}
	instagramLink={footer.instagramLink}
	twitterLink={footer.twitterLink}
/>-->
