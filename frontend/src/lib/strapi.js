import { PUBLIC_STRAPI_URL } from '$env/static/public';
import { PUBLIC_STRAPI_API_TOKEN } from '$env/static/public';
import qs from 'qs';

export const getStrapiURL = (path = '') => {
  return `${PUBLIC_STRAPI_URL || 'http://localhost:1337'}${path}`;
};

export const getStrapiMedia = async (url) => {
  if (url) return `${getStrapiURL()}${url}`;
};

export const fetchStrapiAPI = async (pathname, urlParamsObject = {}, options = {}) => {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }
  const queryString = qs.stringify(urlParamsObject);
  const url = new URL(`${getStrapiURL()}/api${pathname}${queryString ? `?${queryString}` : ``}`);
  const response = await fetch(url, mergedOptions);
  const data = await response.json();
  return data.data;
};

export const getPageBySlug = async (slug) => {
  const token = PUBLIC_STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug }
  };
  const options = { headers: { Authorization: `Bearer ${token}` } }

  return await fetchStrapiAPI(path, urlParamsObject, options);
};
