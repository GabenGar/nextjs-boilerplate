import Head from "next/head";
import { AuthError } from "#types/errors";
import { getReqBody } from "#lib/util";
import {
  loginAccount,
  validateAccountFields,
  withSessionSSR,
} from "#lib/account";
import { Page } from "#components/pages";
import { Form } from "#components/forms";
import { ErrorsView } from "#components/errors";
import {
  FormSectionPassword,
  FormSectionText,
} from "#components/forms/sections";
import { LinkInternal } from "#components/links";

import type { BasePageProps } from "#types/pages";
import type { AccCreds } from "#types/entities";
import type { InferGetServerSidePropsType } from "next";

interface LoginPageProps extends BasePageProps {
  accCreds?: AccCreds;
}

export function LoginPage({
  errors,
  accCreds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page heading="Login">
      <Head>
        <title>Login</title>
        <meta name="description" content="Log in to your account." />
      </Head>
      <Form method="POST">
        <p>
          Not registered?{" "}
          <LinkInternal href="/auth/register">Register</LinkInternal>
        </p>
        <FormSectionText
          id="acc-name"
          name="name"
          required
          defaultValue={accCreds?.name}
        >
          Name
        </FormSectionText>
        <FormSectionPassword
          id="acc-password"
          name="password"
          required
          isNew={false}
          defaultValue={accCreds?.password}
        >
          Password
        </FormSectionPassword>
        {errors && <ErrorsView errors={errors} />}
      </Form>
    </Page>
  );
}

export const getServerSideProps = withSessionSSR<LoginPageProps>(
  async ({ req }) => {
    const { account_id } = req.session;

    if (account_id) {
      return {
        redirect: {
          destination: "/account",
          permanent: false,
        },
      };
    }

    if (req.method === "POST") {
      const accCreds = await getReqBody<AccCreds>(req);
      const { isValid, errors } = validateAccountFields(accCreds);

      if (!isValid) {
        return {
          props: {
            errors: errors!.toDict(),
            accCreds,
          },
        };
      }

      const result = await loginAccount(accCreds);

      if (result instanceof AuthError) {
        return {
          props: {
            errors: [result.message],
            accCreds,
          },
        };
      }

      req.session.account_id = result.id;
      await req.session.save();

      return {
        redirect: {
          destination: "/account",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }
);

export default LoginPage;
