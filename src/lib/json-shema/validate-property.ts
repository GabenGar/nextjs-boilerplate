import { validateStringFormat } from "./validate-string-format";
import { ValidationErrors } from "#types/schemas";

import type { SchemaProperty } from "#types/schemas";

const propertyTypes: Record<
  string,
  (
    key: string,
    value: unknown,
    schemaProperty: SchemaProperty
  ) => ValidationErrors
> = {
  array(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  boolean(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  integer(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  null(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  number(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  object(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  string(key, value, schemaProperty) {
    const errors = new ValidationErrors();

    if (typeof value !== "string") {
      return errors.addError(key, Error(`Key "${key}" is not a string.`));
    }

    const isTooShort =
      schemaProperty.minLength &&
      (value as string).length < schemaProperty.minLength;
    if (isTooShort) {
      errors.addError(
        key,
        Error(
          `Key "${key}" of length "${
            (value as string).length
          }" is too short, required minimum length: "${
            schemaProperty.minLength
          }".`
        )
      );
    }

    if (schemaProperty.format) {
      const formatErrors = validateStringFormat(
        key,
        value,
        schemaProperty.format
      );
      if (formatErrors.size) {
        errors.mergeErrors(formatErrors);
      }
    }

    return errors;
  },
};

export function validateSchemaProperty(
  key: string,
  value: unknown,
  schemaKey: SchemaProperty
) {
  const errors = new ValidationErrors();

  if (schemaKey.type) {
    const propertyErrors = propertyTypes[schemaKey.type](key, value, schemaKey);
    if (propertyErrors.size) {
      errors.mergeErrors(propertyErrors);
    }
  }

  return errors;
}
