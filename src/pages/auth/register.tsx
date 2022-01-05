import { getSession } from "next-auth/react";
import Head from "next/head";
import { AuthError } from "#types/errors";
import { getReqBody } from "#lib/util";
import { validateAccountFields, registerAccount } from "#lib/account";
import { Form } from "#components/forms";
import { ErrorsView } from "#components/errors";
import {
  FormSectionPassword,
  FormSectionText,
} from "#components/forms/sections";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
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

export const getServerSideProps: GetServerSideProps<RegisterPageProps> = async (
  context
) => {
  const { req } = context;
  // const session = await getSession(context);

  // if (session) {
  //   return {
  //     redirect: {
  //       destination: "/account",
  //       permanent: false,
  //     },
  //   };
  // }

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

    const result = await registerAccount(accCreds);

    if (result instanceof AuthError) {
      return {
        props: {
          errors: [result.message],
          accCreds,
        },
      };
    }
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
};

export default RegisterPage;
