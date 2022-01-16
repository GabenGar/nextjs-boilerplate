import Head from "next/head";
import { IS_DEVELOPMENT } from "#environment/derived";
import { getReqBody } from "#lib/util";
import { getAccountDetails, withSessionSSR } from "#lib/account";
import { Page } from "#components/pages";
import { Form } from "#components/forms";
import { FormSectionEmail } from "#components/forms/sections";

import type { InferGetServerSidePropsType } from "next";
import type { AccountClient } from "#types/entities";
import type { BasePageProps } from "#types/pages";
import {
  confirmEmailAddress,
  validateEmailString,
} from "src/lib/account/email";

interface AccountEmailProps extends BasePageProps {
  account: AccountClient;
  newEmail?: string;
}

function AccountEmailPage({
  account,
  newEmail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page heading="Account Email">
      <Head>
        <title>Account Email</title>
        <meta name="description" content="Account Email" />
      </Head>
      <Form method="POST">
        {account.email && (
          <FormSectionEmail
            id="email-current"
            name="current_email"
            isReadOnly
            defaultValue={account.email}
          >
            Current Email
          </FormSectionEmail>
        )}
        <FormSectionEmail
          id="email-new"
          name="new_email"
          required
          defaultValue={newEmail}
        >
          New Email
        </FormSectionEmail>
      </Form>
    </Page>
  );
}

export const getServerSideProps = withSessionSSR<AccountEmailProps>(
  async ({ req }) => {

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

    const { id, password, ...accountClient } = account;

    if (req.method === "POST") {
      const { new_email } = await getReqBody<{ new_email: string }>(req);

      if (!new_email?.trim()) {
        return {
          props: {
            errors: ["No email address provided."],
            account: accountClient,
          },
        };
      }

      const {
        isValid,
        errors,
        modifiedResult: formattedEmail,
      } = validateEmailString(new_email);

      if (!isValid) {
        return {
          props: {
            account: accountClient,
            errors: errors!.toDict(),
          },
        };
      }

      await confirmEmailAddress(formattedEmail!);
    }

    return {
      props: {
        account: accountClient,
      },
    };
  }
);

export default AccountEmailPage;
