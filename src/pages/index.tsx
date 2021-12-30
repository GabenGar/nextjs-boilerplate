import { useEffect } from "react";
import Head from "next/head";
import { ERROR_MESSAGE } from "#environment/constants";
import { BaseLayout } from "#components/layout";

import type { ReactElement } from "react";

export function IndexPage() {
  useEffect(() => {
    console.log(ERROR_MESSAGE);
  });

  return (<>
    <Head>
      <title>{ERROR_MESSAGE}</title>
      <meta name="description" content={ERROR_MESSAGE} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>{ERROR_MESSAGE}</h1>
  </>);
}

IndexPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default IndexPage;
