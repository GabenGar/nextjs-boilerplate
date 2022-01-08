import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived-vars";
import { getAccountDetails, withSessionSSR } from "#lib/account";
import { LinkInternal } from "#components/links";

import type { InferGetServerSidePropsType } from "next";
import type { AccountClient } from "#types/entities";
import type { BasePageProps } from "#types/pages";

interface AccountPageProps extends BasePageProps {
  account: AccountClient;
}

function AccountPage({
  account,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Account page</title>
        <meta name="description" content="Account page" />
      </Head>
      <h1>Account page</h1>
      {IS_DEVELOPMENT && (
        <LinkInternal href="/account/admin">Admin</LinkInternal>
      )}
      <pre>{JSON.stringify(account, undefined, 2)}</pre>
    </>
  );
}

export const getServerSideProps = withSessionSSR<AccountPageProps>(
  async ({ req }) => {
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
    const { id, password, ...accountClient } = account;
    return {
      props: {
        account: accountClient,
      },
    };
  }
);

export default AccountPage;
