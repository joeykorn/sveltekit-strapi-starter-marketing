import { getPageBySlug } from '$lib/strapi';

export async function load({ params }) {
  const page = await getPageBySlug(params.slug);

  return { page }
}
