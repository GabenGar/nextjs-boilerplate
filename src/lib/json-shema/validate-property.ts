import { ValidationErrors } from "#types/schemas";

import type { SchemaProperty } from "#types/schemas";

export function validateSchemaProperty(
  key: string,
  value: unknown,
  schemaKey: SchemaProperty
) {
  const errors = new ValidationErrors();
  const valueType = typeof value;

  if (schemaKey.type !== valueType) {
    errors.addError(
      key,
      Error(
        `Key "${key}" of the type "${valueType}" is wrong, required type: "${schemaKey.type}".`
      )
    );
  }

  if (schemaKey.type === "string") {
    const isTooShort =
      schemaKey.minLength && (value as string).length < schemaKey.minLength;
    if (isTooShort) {
      errors.addError(
        key,
        Error(
          `Key "${key}" of length "${
            (value as string).length
          }" is too short, required minimum length: "${schemaKey.minLength}".`
        )
      );
    }

    if (schemaKey.format) {
      // key is an ISO date string
      if (schemaKey.format === "date-time") {
        try {
          
        } catch (error) {
          
        }
      }
    }
  }

  return errors;
}
