import { getPageBySlug } from '$lib/strapi';

export async function load() {
	const page = await getPageBySlug('home');
}
