import { createFetch } from "#lib/util";
import type { IRequestOptions } from "#lib/util";

const baseFetch = createFetch("https://github.com");

export async function githubFetch(path: string, reqOptions?: IRequestOptions) {
  const response = await baseFetch(path, reqOptions);
  return response;
}
