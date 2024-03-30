import { PUBLIC_STRAPI_URL } from '$env/static/public';
import qs from 'qs';

export const getStrapiURL = (path = '') => {
	return `${PUBLIC_STRAPI_URL || 'http://localhost:1337'}${path}`;
};

export const getStrapiMedia = async (url) => {
	if (url) return `${getStrapiURL()}${url}`;
};

export const fetchStrapiAPI = async (pathname, urlParamsObject = {}) => {
	const queryString = qs.stringify(urlParamsObject);
	const url = new URL(`${getStrapiURL()}/api${pathname}${queryString ? `?${queryString}` : ``}`);
	const response = await fetch(url);
	const data = await response.json();
	return data.data;
};

export const getPageBySlug = async (slug) => {
	const path = `/pages`;
	const urlParamsObject = {
		filters: { slug }
	};

	return await fetchStrapiAPI(path, urlParamsObject);
};
