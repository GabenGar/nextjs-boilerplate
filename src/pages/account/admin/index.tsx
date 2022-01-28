import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { getAccountList } from "#lib/account/admin";
import { LinkInternal } from "#components/links";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { Account } from "#types/entities";

interface AdminPageProps {
  accounts: Account[];
}

function AdminPage({
  accounts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Admin" />
      </Head>
      <h1>Admin</h1>
      <section>
        <header>
          <h2>Accounts</h2>
        </header>
        <pre>{JSON.stringify(accounts, null, 2)}</pre>
      </section>
      <section>
        <LinkInternal href="/account/admin/tables">Tables</LinkInternal>
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

  const accounts = await getAccountList({ currentPage: 1, limit: 50 });

  return {
    props: {
      accounts,
    },
  };
};

export default AdminPage;
