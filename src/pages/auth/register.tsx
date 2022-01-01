import Head from "next/head";
import { HTMLButton } from "#components/html/button";
import { HTMLForm } from "#components/html/form";
import { HTMLLabel } from "#components/html/label";
import { InputText, InputPassword } from "#components/inputs";

export function RegisterPage() {
  return (<>
    <Head>
      <title>Register</title>
      <meta name="description" content="Register" />
    </Head>
    <h1>Register</h1>
    <HTMLForm action="/api/v1/auth/register" method="POST">
      <div>
        <HTMLLabel htmlFor="acc-name">Name</HTMLLabel>
        <InputText id="acc-name" name="name" />
      </div>
      <div>
        <HTMLLabel htmlFor="acc-password">Password</HTMLLabel>
        <InputPassword id="acc-password" name="password" />
      </div>
      <div>
        <HTMLButton type="submit" disabled>Submit</HTMLButton>
      </div>
    </HTMLForm>
  </>);
}


export default RegisterPage;