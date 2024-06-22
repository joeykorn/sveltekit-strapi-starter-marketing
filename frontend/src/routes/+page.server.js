import { getPageBySlug } from '$lib/strapi';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // const urlParamsObject = {
  // populate: { blocks: { populate: '*' } }
  // };

  // const page = await getPageBySlug('home', urlParamsObject);
  const page = await getPageBySlug('home');
  return { page };
}
