import { Account } from "#types/entities";
import Head from "next/head";

interface IAccountPageProps {
  account: Account
}

function AccountPage({ account }: IAccountPageProps) {
  return (<>
    <Head>
      <title>Account page</title>
      <meta name="description" content="Account page" />
    </Head>
    <h1>Account page</h1>
    {/* name: {account.name} */}
  </>);
}

export default AccountPage;