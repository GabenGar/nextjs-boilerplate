import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { getAccountDetails, withSessionSSR, confirmNewEmail } from "#lib/account";
import { Page } from "#components/pages";
import { LinkInternal } from "#components/links";

import type { InferGetServerSidePropsType } from "next";
import type { BasePageProps } from "#types/pages";
import type { ParsedUrlQuery } from "querystring";

interface AccountEmailProps extends BasePageProps {
  isSuccessful: boolean;
}

interface AccountEmailParams extends ParsedUrlQuery {
  code: string;
}

function EmailConfirmationPage({
  isSuccessful,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page heading="Confirm Email">
      <Head>
        <title>Confirm Email</title>
        <meta name="description" content="Confirm Email" />
      </Head>
      {isSuccessful && (
        <p>
          Your email was verified. Go back to{" "}
          <LinkInternal href="/account">account page</LinkInternal>.
        </p>
      )}
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

  await confirmNewEmail(account_id, code)

  return {
    props: {
      isSuccessful: true,
    },
  };
});

export default EmailConfirmationPage;
