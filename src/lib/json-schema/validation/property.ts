import { validateStringFormat } from "./string-format";
import { NotImplementedError } from "#types/errors";
import { ValidationErrors } from "#lib/json-schema/types";

import type {
  SchemaPropertyValidationFunction,
  SchemaProperty,
} from "#lib/json-schema/types";

export function validateSchemaProperty(
  key: string,
  value: unknown,
  schemaKey: SchemaProperty,
  errors: ValidationErrors
) {
  const propertyErrors = propertyTypes[schemaKey.type](
    key,
    value,
    schemaKey,
    errors
  );
  if (propertyErrors.size) {
    errors.mergeErrors(propertyErrors);
  }

  return errors;
}

export const validateStringProperty: SchemaPropertyValidationFunction = (
  key,
  value,
  schemaProperty,
  errors
) => {
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

export const propertyTypes: Record<string, SchemaPropertyValidationFunction> = {
  array(key, value, schemaProperty, errors) {
    if (!Array.isArray(value)) {
      return errors.addError(key, Error(`Key "${key}" is not an array.`));
    }
    throw new NotImplementedError();
    return errors;
  },
  boolean(key, value, schemaProperty, errors) {
    if (typeof value !== "boolean") {
      return errors.addError(key, Error(`Key "${key}" is not a boolean.`));
    }
    throw new NotImplementedError();
    return errors;
  },
  integer(key, value, schemaProperty, errors) {
    throw new NotImplementedError();
    return errors;
  },
  null(key, value, schemaProperty, errors) {
    if (value !== null) {
      return errors.addError(key, Error(`Key "${key}" is not a null.`));
    }
    throw new NotImplementedError();
    return errors;
  },
  number(key, value, schemaProperty, errors) {
    throw new NotImplementedError();
    return errors;
  },
  object(key, value, schemaProperty, errors) {
    throw new NotImplementedError();
    return errors;
  },
  string: validateStringProperty,
};
