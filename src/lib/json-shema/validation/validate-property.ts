import { validateStringFormat } from "./validate-string-format";
import { ValidationErrors } from "#types/schemas";

import type { SchemaProperty } from "#types/schemas";



const propertyTypes: Record<string, ValidationFunction> = {
  array(key, value, schemaProperty) {
    const errors = new ValidationErrors();

    if (!Array.isArray(value)) {
      return errors.addError(key, Error(`Key "${key}" is not an array.`));
    }

    return errors;
  },
  boolean(key, value, schemaProperty) {
    const errors = new ValidationErrors();

    if (typeof value !== "boolean") {
      return errors.addError(key, Error(`Key "${key}" is not a boolean.`));
    }

    return errors;
  },
  integer(key, value, schemaProperty) {
    const errors = new ValidationErrors();
    return errors;
  },
  null(key, value, schemaProperty) {
    const errors = new ValidationErrors();

    if (value !== null) {
      return errors.addError(key, Error(`Key "${key}" is not a null.`));
    }

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
  string: validateStringProperty,
};

export function validateSchemaProperty(
  key: string,
  value: unknown,
  schemaKey: SchemaProperty
) {
  const errors = new ValidationErrors();

  const propertyErrors = propertyTypes[schemaKey.type](key, value, schemaKey);
  if (propertyErrors.size) {
    errors.mergeErrors(propertyErrors);
  }

  return errors;
}

const validateStringProperty: ValidationFunction = (
  key,
  value,
  schemaProperty
) => {
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
};
