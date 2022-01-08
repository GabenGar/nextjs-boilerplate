import Head from "next/head";
import { AuthError } from "#types/errors";
import { getReqBody } from "#lib/util";
import {
  validateAccountFields,
  registerAccount,
  withSessionSSR,
} from "#lib/account";
import { Form } from "#components/forms";
import { ErrorsView } from "#components/errors";
import {
  FormSectionPassword,
  FormSectionText,
} from "#components/forms/sections";

import type { InferGetServerSidePropsType } from "next";
import type { AccCreds } from "#types/entities";
import type { BasePageProps } from "#types/pages";

interface RegisterPageProps extends BasePageProps {
  accCreds?: AccCreds;
}

export function RegisterPage({
  accCreds,
  errors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Head>
      <h1>Register</h1>
      <Form method="POST">
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
          defaultValue={accCreds?.password}
        >
          Password
        </FormSectionPassword>
        {errors && <ErrorsView errors={errors} />}
      </Form>
    </>
  );
}

export const getServerSideProps = withSessionSSR<RegisterPageProps>(
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

      const newAcc = await registerAccount(accCreds);

      if (newAcc instanceof AuthError) {
        return {
          props: {
            errors: [newAcc.message],
            accCreds,
          },
        };
      }

      req.session.account_id = newAcc.id;
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

export default RegisterPage;
