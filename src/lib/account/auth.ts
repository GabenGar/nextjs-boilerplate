import { createAccount, findAccount } from "#database/queries/account";
import { validateAgainstSchema } from "#lib/json-schema/validation";
import { accountSchema } from "#types/schemas";
import { AuthError } from "#types/errors";

import type { AccCreds } from "#types/entities";

export async function registerAccount(accCreds: AccCreds) {
  const { isValid, errors } = validateAgainstSchema(accCreds, accountSchema);

  if (!isValid) {
    return errors!;
  }

  const existingAccount = await findAccount(accCreds);

  if (existingAccount) {
    return new AuthError("Account already exists.");
  }

  const account = await createAccount(accCreds.name, accCreds.password);
  return account;
}

export async function loginAccount(accCreds: AccCreds) {
  const { isValid, errors } = validateAgainstSchema(accCreds, accountSchema);

  if (!isValid) {
    return errors!;
  }

  const account = await findAccount(accCreds);
  return account;
}
