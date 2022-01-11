import Head from "next/head";
import { getAccountDetails, withSessionSSR } from "#lib/account";
import { Page } from "#components/pages";
import { Form } from "#components/forms";

import type { InferGetServerSidePropsType } from "next";
import type { AccountClient } from "#types/entities";
import type { BasePageProps } from "#types/pages";

interface AccountPageProps extends BasePageProps {
  account: AccountClient;
}

function AccountEmailPage({
  account,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page heading="Account Email">
      <Head>
        <title>Account Email</title>
        <meta name="description" content="Account Email" />
      </Head>
      <Form method="POST"></Form>
    </Page>
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

export default AccountEmailPage;
