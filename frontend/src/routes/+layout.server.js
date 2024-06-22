import { fetchStrapiAPI } from '$lib/strapi';
import { getStrapiMedia } from '$lib/strapi';
import { PUBLIC_STRAPI_API_TOKEN } from '$env/static/public';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const token = PUBLIC_STRAPI_API_TOKEN;
  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const urlParamsObject = {
    populate: [
      'favicon',
      'header.headerLogo.logoImage',
      'header.links',
      'footer.footerLogo.logoImage',
      'footer.menuLinks',
      'footer.socialLinks'
    ]
  };
  const options = { headers: { Authorization: `Bearer ${token}` } }
  const globals = await fetchStrapiAPI('/global', urlParamsObject, options);
  const faviconUrl = await getStrapiMedia(globals.attributes.favicon.data?.attributes.url);
  const header = globals.attributes.header;
  const headerLogoUrl = await getStrapiMedia(
    globals.attributes.header.headerLogo.logoImage.data?.attributes.url
  );
  const footer = globals.attributes.footer;
  const footerLogoUrl = await getStrapiMedia(
    globals.attributes.footer.footerLogo.logoImage.data?.attributes.url
  );

  return {
    faviconUrl,
    header,
    headerLogoUrl,
    footer,
    footerLogoUrl
  };
}
