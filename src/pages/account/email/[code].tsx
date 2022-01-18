import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { getAccountDetails, withSessionSSR } from "#lib/account";
import { Page } from "#components/pages";

import type { InferGetServerSidePropsType } from "next";
import type { BasePageProps } from "#types/pages";
import type { ParsedUrlQuery } from "querystring";

interface AccountEmailProps extends BasePageProps {

}

interface AccountEmailParams extends ParsedUrlQuery {
  code: string;
}

function EmailConfirmationPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <Page heading="Confirm Email">
      <Head>
        <title>Confirm Email</title>
        <meta name="description" content="Confirm Email" />
      </Head>
    </Page>
  );
}

export const getServerSideProps = withSessionSSR<
  AccountEmailProps,
  AccountEmailParams
>(async ({ req, params }) => {
  if (!IS_DEVELOPMENT) {
    return {
      notFound: true,
    };
  }

  const { account_id } = req.session;

  if (!account_id) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const account = await getAccountDetails(account_id);

  if (!account) {
    req.session.destroy();
    return {
      notFound: true,
    };
  }

  const { code } = params!;

  return {
    props: {},
  };
});

export default EmailConfirmationPage;
