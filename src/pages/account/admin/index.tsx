import { useSession, getSession } from "next-auth/react";
import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived-vars";
import { getAccountList } from "#lib/account/admin";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Session } from "next-auth";
import type { Account } from "#types/entities";

interface AdminPageProps {
  accounts: Account[]
}

function AdminPage({ accounts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <title>Accounts</title>
        <meta name="description" content="Accounts" />
      </Head>
      <h1>Accounts</h1>
      <section>
        <pre>{JSON.stringify(accounts, null, 2)}</pre>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AdminPageProps> = async (
  context
) => {

  if (!IS_DEVELOPMENT) {
    return {
      notFound: true,
    };
  }

  const accounts = await getAccountList({ currentPage: 1, limit: 50 })

  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      accounts
    },
  };
};

export default AdminPage;
