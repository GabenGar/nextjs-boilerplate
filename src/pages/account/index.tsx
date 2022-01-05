import Head from "next/head";

import type { InferGetServerSidePropsType } from "next";
import { withSessionSSR } from "#lib/account";
import type { Account } from "#types/entities";

interface AccountPageProps extends Record<string, unknown> {
  account: Account;
}

function AccountPage({ account }: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  // const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Account page</title>
        <meta name="description" content="Account page" />
      </Head>
      <h1>Account page</h1>
      {/* name: {account.name} */}
    </>
  );
}

export const getServerSideProps = withSessionSSR<AccountPageProps>(
  async ({ req }) => {
    const account = req.session.account;

    if (!account) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        account,
      },
    };
  }
);

export default AccountPage;
