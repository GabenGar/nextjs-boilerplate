import { useSession, getSession } from "next-auth/react";
import Head from "next/head";
import { Account } from "#types/entities";

import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";

interface AccountPageProps {}

function AccountPage() {
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

export const getServerSideProps: GetServerSideProps<AccountPageProps> = async (
  context
) => {
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
    },
  };
};

export default AccountPage;
