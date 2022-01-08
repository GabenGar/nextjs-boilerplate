import {
  addAccount,
  findAccountByName,
  findAccount,
} from "#database/queries/account";
import { createSchemaValidation } from "#lib/json-schema/validation";
import { accountSchema } from "#types/schemas";
import { AuthError } from "#types/errors";

import { AccCreds, Account } from "#types/entities";
import { sha3Encryption } from "#lib/encryption";

const { encryptString } = sha3Encryption;

export const validateAccountFields = createSchemaValidation<Account | AccCreds>(
  accountSchema
);

export async function registerAccount(accCreds: AccCreds) {
  const encryptedAccCreds: AccCreds = {
    ...accCreds,
    password: encryptString(accCreds.password),
  };

  const existingAccount = await findAccountByName(encryptedAccCreds);

  if (existingAccount) {
    return new AuthError("Account with this name already exists.");
  }

  const account = await addAccount(
    encryptedAccCreds.name,
    encryptedAccCreds.password
  );

  return account;
}

export async function loginAccount(accCreds: AccCreds) {
  const encryptedAccCreds: AccCreds = {
    ...accCreds,
    password: encryptString(accCreds.password),
  };

  const account = await findAccount(encryptedAccCreds);

  if (!account) {
    return new AuthError("Account with these credentials doesn't exist.");
  }

  return account;
}
