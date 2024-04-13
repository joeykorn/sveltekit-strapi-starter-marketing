import { fetchStrapiAPI } from '$lib/strapi';
import { getStrapiMedia } from '$lib/strapi';
import { PUBLIC_STRAPI_API_TOKEN } from '$env/static/public';

export async function load() {
  const token = PUBLIC_STRAPI_API_TOKEN;
  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const urlParamsObject = {
    populate: ['favicon', 'header.headerLogo.logoImage']
  };
  const options = { headers: { Authorization: `Bearer ${token}` } }
  const globals = await fetchStrapiAPI('/global', urlParamsObject, options);
  const faviconUrl = await getStrapiMedia(globals.attributes.favicon.data?.attributes.url);
  const logoUrl = await getStrapiMedia(
    globals.attributes.header.headerLogo.logoImage.data?.attributes.url
  );

  return {
    faviconUrl,
    logoUrl
  };
}
