import { PRIVATE_STRAPI_URL } from '$env/static/private';

export const fetchStrapiData = async (pathname, query) => {
	const url = new URL(`${PRIVATE_STRAPI_URL}/api/${pathname}${query ? `?${query}` : ``}`);
	const response = await fetch(url);
	const data = await response.json();
	return data.data;
};
