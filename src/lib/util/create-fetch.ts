import { SITE_ORIGIN } from "#environment/vars";

export interface IRequestOptions extends RequestInit {
  params?: URLSearchParams;
}

export function createFetch(baseURL: string = SITE_ORIGIN!) {
  return async (path: string, { params, ...reqOptions }: IRequestOptions = {}) => {
    try {
      const url = new URL(path, baseURL);

      if (params) {
        url.search = params.toString();
      }

      url.searchParams.sort();

      const response = await fetch(url.toString(), reqOptions);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
