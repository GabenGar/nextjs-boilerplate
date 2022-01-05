// this goes first to avoid specificity issues
import "#styles/globals.scss";

import { BaseLayout } from "#components/layout";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);

  return (
    // <SessionProvider session={session}>
      getLayout(<Component {...pageProps} />)
    // { </SessionProvider> }
  );
}

export default MyApp;
