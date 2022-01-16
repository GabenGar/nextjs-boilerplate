import { SITE_ORIGIN } from "#environment/vars";
import { createFetch } from "#lib/util";

const baseFetch = createFetch(SITE_ORIGIN);

export async function apiV1Fetch(path: string, reqInit?: RequestInit) {
  const apiPath = `/api/v1/${path}`;
  const response = await baseFetch(apiPath, reqInit);
  return response;
}
