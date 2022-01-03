import Head from "next/head";
import { loginAccount } from "#lib/api/site";
import { Form } from "#components/forms";
import { FormSectionPassword, FormSectionText } from "#components/forms/sections";

import type { SubmitArgs } from "#components/html/form";

interface FormFields extends HTMLFormControlsCollection {
  name: HTMLInputElement
  password: HTMLInputElement
}

export function LoginPage() {
  async function handleSubmit(event: SubmitArgs) {
    const form = event.target as HTMLFormElement;
    const fields = form.elements as FormFields;
    const name = fields["name"].value
    const password = fields["password"].value

    const { success, errors } = await loginAccount({
      name,
      password
    });

    if (!success && errors) {
      console.error(errors);
    }
  }

  return (<>
    <Head>
      <title>Login</title>
      <meta name="description" content="Login" />
    </Head>
    <h1>Login</h1>
    <Form action="/api/v1/auth/login" method="POST" onSubmit={handleSubmit}>
      <FormSectionText id="acc-name" name="name" required>
        Name
      </FormSectionText>
      <FormSectionPassword id="acc-password" name="password" required isNew={false}>
        Password
      </FormSectionPassword>
    </Form>
  </>);
}

export default LoginPage;