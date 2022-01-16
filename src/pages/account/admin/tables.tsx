import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { Form } from "#components/forms";
import { clearAccounts } from "#database/queries/account/admin";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface AdminPageProps {}

function AdminPage({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Accounts</title>
        <meta name="description" content="Accounts" />
      </Head>
      <h1>Accounts</h1>
      <Form submitButton="Clear" method="POST">
        <p>Accounts</p>
      </Form>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AdminPageProps> = async ({
  req,
}) => {
  if (!IS_DEVELOPMENT) {
    return {
      notFound: true,
    };
  }

  if (req.method === "POST") {
    await clearAccounts()
  }

  return {
    props: {},
  };
};

export default AdminPage;
