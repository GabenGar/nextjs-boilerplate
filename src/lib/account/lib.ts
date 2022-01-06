import { getAccount } from "#database/queries/account";

export async function getAccountDetails(account_id: number) {
  const account = await getAccount(account_id);
  return account;
}
