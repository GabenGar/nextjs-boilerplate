import { createAccount } from "#database/queries/account";
import { accountSchema } from "#types/schemas";
import { validateAgainstSchema } from "#lib/json-schema/validation";

import type { AccCreds } from "#types/entities";

export async function registerAccount(accCreds: AccCreds) {
  const { isValid, errors } = validateAgainstSchema(accCreds, accountSchema);

  if (!isValid) {
    return errors
  }

  await createAccount(accCreds.name, accCreds.password);
}