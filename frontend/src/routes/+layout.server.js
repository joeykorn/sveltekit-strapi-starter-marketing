import { fetchStrapiAPI } from '$lib/strapi';
import { getStrapiMedia } from '$lib/strapi';

export async function load() {
	const urlParamsObject = {
		populate: ['favicon', 'header.headerLogo.logoImage']
	};
	const globals = await fetchStrapiAPI('/global', urlParamsObject);
	const faviconUrl = await getStrapiMedia(globals.attributes.favicon.data?.attributes.url);
	const logoUrl = await getStrapiMedia(
		globals.attributes.header.headerLogo.logoImage.data?.attributes.url
	);

	return {
		faviconUrl,
		logoUrl
	};
}
