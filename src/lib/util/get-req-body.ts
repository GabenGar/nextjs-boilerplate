import { IncomingMessage } from "http";
import contentType from "content-type";
import getRawBody from "raw-body";

import type { NextApiRequestCookies } from "next/dist/server/api-utils";

export async function getReqBody<T = Record<string, unknown>>(
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
): Promise<T> {
  try {
    const body = await getRawBody(req, {
      length: req.headers["content-length"],
      limit: "1mb",
      encoding: true,
    });

    const params = new URLSearchParams(body);
    const result = Object.fromEntries(params);
    // @ts-expect-error
    return result;
  } catch (error) {
    console.error(error);
    // @ts-expect-error
    return error;
  }
}
