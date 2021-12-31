import { createAccount } from "#database/queries/account";
import { accountSchema, ValidationErrors } from "#types/schemas";

import type { AccCreds } from "#types/entities";
import { validateSchemaProperty } from "#lib/json-shema";

interface ValidationResult {
  isValid: boolean;
  errors?: ValidationErrors;
}

export async function registerAccount(accCreds: AccCreds) {
  await createAccount(accCreds.name, accCreds.password);
}

export function validateRegCreds(accCreds: AccCreds): ValidationResult {
  const errors = Object.entries(accCreds).reduce<ValidationErrors>(
    (errors, [key, value]) => {
      const schemaProperty = accountSchema.properties[key];
      const validationErrors = validateSchemaProperty(
        key,
        value,
        schemaProperty
      );

      if (validationErrors.size) {
        for (const [key, keyErrors] of Array.from(validationErrors)) {
          if (errors.has(key)) {
            errors.set(key, [...errors.get(key)!, ...keyErrors]);
          } else {
            errors.set(key, keyErrors);
          }
        }
      }

      return errors;
    },
    new ValidationErrors()
  );

  return {
    isValid: Boolean(errors.size),
    errors,
  };
}


