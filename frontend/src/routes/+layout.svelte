<script>
	import { Header } from '$lib/components';
	import { Footer } from '$lib/components';
	import '../app.css';
	export let data;

	const header = data.header;
	const headerLogoText = header.headerLogo.logoText;
	const headerLogoUrl = data.headerLogoUrl;
	const headerLogoAltText = header.headerLogo.logoImage.data?.attributes.alternativeText;
	const footer = data.footer;
	const footerLogoText = footer.footerLogo.logoText;
	const footerLogoAltText = footer.footerLogo.logoImage.data?.attributes.alternativeText;
	const footerLogoUrl = data.footerLogoUrl;
</script>

<svelte:head>
	<link rel="icon" href={data.faviconUrl} />
</svelte:head>

<Header
	logoUrl={headerLogoUrl}
	logoAlt={headerLogoAltText}
	logoText={headerLogoText}
	links={header.links}
/>
<main>
	<slot />
</main>
<Footer
	logoUrl={footerLogoUrl}
	logoAlt={footerLogoAltText}
	logoText={footerLogoText}
	message={footer.message}
	menuLinks={footer.menuLinks}
	socialLinks={footer.socialLinks}
/>
