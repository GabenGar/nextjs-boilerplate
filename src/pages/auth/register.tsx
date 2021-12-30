import Head from "next/head";
import type { GetServerSideProps } from "next";

export function RegisterPage({ }) {
  return (<>
    <Head>
      <title>Register</title>
      <meta name="description" content="Register" />
    </Head>
    <h1>Register</h1>
    <form method="POST">
      <div>
        <label htmlFor="acc-name">Name</label>
        <input type="text" name="name" id="acc-name" />
      </div>
      <div>
        <label htmlFor="acc-password">Password</label>
        <input type="password" name="password" id="acc-password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </>);
}

export const getServerSideProps: GetServerSideProps = async ({ req, previewData }) => {
  
  return {
    props: {}
  }
}

export default RegisterPage;