import { getPageBySlug } from '$lib/strapi';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const page = await getPageBySlug(params.slug);

  return { page }
}
