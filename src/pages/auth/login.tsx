import Head from "next/head";
import { Form } from "#components/forms";
import {
  FormSectionPassword,
  FormSectionText,
} from "#components/forms/sections";


export function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <h1>Login</h1>
      <Form method="POST">
        <FormSectionText id="acc-name" name="name" required>
          Name
        </FormSectionText>
        <FormSectionPassword
          id="acc-password"
          name="password"
          required
          isNew={false}
        >
          Password
        </FormSectionPassword>
      </Form>
    </>
  );
}

export default LoginPage;
