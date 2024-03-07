import { fetchStrapiData } from '$lib/strapi';

export async function load() {
	return { home: await fetchStrapiData('home-page', 'populate=*') };
}
