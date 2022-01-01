import { SITE_ORIGIN } from "#environment/env-vars";

export function createFetch(baseURL: string = SITE_ORIGIN!) {
  return async (path: string, reqInit?: RequestInit) => {
    try {
      const url = new URL(path, baseURL);
      const response = await fetch(url.toString(), reqInit);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
