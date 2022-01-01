import Head from "next/head";
import { HTMLButton } from "#components/html/button";
import { HTMLForm } from "#components/html/form";
import { HTMLLabel } from "#components/html/label";
import { InputText, InputPassword } from "#components/inputs";

import type { SubmitArgs } from "#components/html/form";
import { registerAccount } from "#lib/api/site";

interface FormFields extends HTMLFormControlsCollection {
  name: HTMLInputElement
  password: HTMLInputElement
}

export function RegisterPage() {
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
    <HTMLForm action="/api/v1/auth/register" method="POST" onSubmit={handleSubmit}>
      <div>
        <HTMLLabel htmlFor="acc-name">Name</HTMLLabel>
        <InputText id="acc-name" name="name" />
      </div>
      <div>
        <HTMLLabel htmlFor="acc-password">Password</HTMLLabel>
        <InputPassword id="acc-password" name="password" />
      </div>
      <div>
        <HTMLButton type="submit">Submit</HTMLButton>
      </div>
    </HTMLForm>
  </>);
}

export default RegisterPage;