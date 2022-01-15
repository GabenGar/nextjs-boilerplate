import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { SITE_NAME, SECRET_KEY } from "#environment/env-vars";
import { IS_DEVELOPMENT } from "#environment/derived-vars";
import type { IronSessionOptions } from "iron-session";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";

export type SSRCallback<P> = (
  context: GetServerSidePropsContext
) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>;

export const sessionOptions: IronSessionOptions = {
  password: SECRET_KEY,
  cookieName: `${SITE_NAME}_cookie_cutter`,
  cookieOptions: {
    secure: !IS_DEVELOPMENT,
  },
};

export function withSessionRoute<R>(handler: NextApiHandler<R>) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSSR<P extends Record<string, unknown>>(
  handler: SSRCallback<P>
) {
  return withIronSessionSsr(handler, sessionOptions);
}

// export function protectedPageSSR<P extends Record<string, unknown>>(
//   handler: SSRCallback<P>
// ) {}
