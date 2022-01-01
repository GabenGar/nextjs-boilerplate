import { validateStringFormat } from "./string-format";
import { propertyTypes, ValidationErrors } from "#lib/json-schema/types";

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
