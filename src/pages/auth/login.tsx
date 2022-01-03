import Head from "next/head";
import { registerAccount } from "#lib/api/site";
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

    const { success, errors } = await registerAccount({
      name,
      password
    });

    if (!success && errors) {
      console.error(errors);
    }
  }

  return (<>
    <Head>
      <title>Register</title>
      <meta name="description" content="Register" />
    </Head>
    <h1>Register</h1>
    <Form action="/api/v1/auth/register" method="POST" onSubmit={handleSubmit}>
      <FormSectionText id="acc-name" name="name" required>
        Name
      </FormSectionText>
      <FormSectionPassword id="acc-password" name="password" required>
        Password
      </FormSectionPassword>
    </Form>
  </>);
}

export default LoginPage;