import {
  createAccount,
  findAccountByName,
  findAccount,
} from "#database/queries/account";
import { createSchemaValidation } from "#lib/json-schema/validation";
import { accountSchema } from "#types/schemas";
import { AuthError } from "#types/errors";

import { AccCreds, Account } from "#types/entities";

export const validateAccountFields = createSchemaValidation<Account | AccCreds>(
  accountSchema
);

export async function registerAccount(accCreds: AccCreds) {
  const existingAccount = await findAccountByName(accCreds);

  if (existingAccount) {
    return new AuthError("Account with this name already exists.");
  }

  const account = await createAccount(accCreds.name, accCreds.password);
  return account;
}

export async function loginAccount(accCreds: AccCreds) {
  const account = await findAccount(accCreds);

  if (!account) {
    return new AuthError("Account with these credentials doesn't exist.");
  }

  return account;
}
