import {  ValidationErrors } from "#lib/json-schema/types";
import type {
  JSONTypes,
  SchemaValidationFunction,
  JSONSchema,
  ValidationResult,
} from "#lib/json-schema/types";
import { validateSchemaProperty } from "#lib/json-schema/validation";

export const validateObjectSchema: SchemaValidationFunction = (
  json,
  schema,
  errors
) => {
  if (typeof json !== "object") {
    return errors.addError(
      schema.title,
      `This json is not of type "${schema.type}" required by "${schema.title}" schema.`
    );
  }

  const schemaProps = schema.properties;
  const validationErrors = Object.entries(json!).reduce(
    (errors, [key, value]) => {
      if (!schemaProps[key]) {
        if (schema.additionalProperties === false) {
          return errors.addError(
            key,
            `Key ${key} is not a part of "${schema.title}" schema and it doesn't allow additional properties.`
          );
        } else {
          return errors.addError(
            key,
            `Key ${key} is not a part of "${schema.title}" schema.`
          );
        }
      }

      validateSchemaProperty(key, value, schemaProps[key], errors);

      return errors;
    },
    errors
  );

  return errors;
};

export const schemaTypes: Record<JSONTypes, SchemaValidationFunction> = {
  array(json, schema, errors) {
    return errors;
  },
  boolean(json, schema, errors) {
    return errors;
  },
  integer(json, schema, errors) {
    return errors;
  },
  null(json, schema, errors) {
    return errors;
  },
  number(json, schema, errors) {
    return errors;
  },
  object: validateObjectSchema,
  string(json, schema, errors) {
    return errors;
  },
};

export function validateAgainstSchema(
  json: unknown,
  jsonSchema: JSONSchema
): ValidationResult {
  const errors = schemaTypes[jsonSchema.type](
    json,
    jsonSchema,
    new ValidationErrors()
  );

  return {
    isValid: !errors.size,
    errors,
  };
}
