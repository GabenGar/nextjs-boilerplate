import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { Page } from "#components/pages";

import type { ParsedUrlQuery } from "querystring";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ITemplatePageProps {}

interface ITemplatePageParams extends ParsedUrlQuery {}

function TemplatePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <Page heading="Template heading">
      <Head>
        <title>Template title</title>
        <meta name="description" content="Template description" />
      </Head>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<
  ITemplatePageProps,
  ITemplatePageParams
> = async (context) => {

  if (!IS_DEVELOPMENT) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default TemplatePage;
