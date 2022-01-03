import { createAccount, findAccount } from "#database/queries/account";
import { accountSchema } from "#types/schemas";
import { validateAgainstSchema } from "#lib/json-schema/validation";

import type { AccCreds } from "#types/entities";

export async function registerAccount(accCreds: AccCreds) {
  const { isValid, errors } = validateAgainstSchema(accCreds, accountSchema);

  if (!isValid) {
    return errors;
  }

  const account = await createAccount(accCreds.name, accCreds.password);
  return account;
}

export async function loginAccount(accCreds: AccCreds) {
  const { isValid, errors } = validateAgainstSchema(accCreds, accountSchema);

  if (!isValid) {
    return errors;
  }

  const account = await findAccount(accCreds);
  return account;
}
