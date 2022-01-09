import Head from "next/head";
import { withSessionSSR } from "#lib/account";
import { Page } from "#components/pages";
import { Form } from "#components/forms";

import type { InferGetServerSidePropsType } from "next";
import type { BasePageProps } from "#types/pages";

interface LogoutPageProps extends BasePageProps {}

export function LogoutPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <Page heading="Logout">
      <Head>
        <title>Logout</title>
        <meta name="description" content="Logout" />
      </Head>
      <Form method="POST" submitButton="Logout"/>
    </Page>
  );
}

export const getServerSideProps = withSessionSSR<LogoutPageProps>(
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

    if (req.method === "POST") {
      req.session.destroy();

      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);

export default LogoutPage;
