import validator from "validator";
import { ValidationErrors } from "./validation-errors";
import { isISOString } from "#lib/util/dates";
import { validateStringProperty } from "#lib/json-schema/validation";
import { NotImplementedError } from "#types/errors";

export type JSONTypes =
  | "array"
  | "boolean"
  | "integer"
  | "null"
  | "number"
  | "object"
  | "string";

export type JSONKeyTypes = "string" | "number";

export interface ValidationResult {
  isValid: boolean;
  errors?: ValidationErrors;
}

export interface SchemaValidationFunction {
  (
    json: unknown,
    schema: JSONSchema,
    errors: ValidationErrors
  ): ValidationErrors;
}

export interface SchemaPropertyValidationFunction {
  (
    key: string,
    value: unknown,
    schemaProperty: SchemaProperty,
    errors: ValidationErrors
  ): ValidationErrors;
}

export interface JSONSchema<P = Record<string, SchemaProperty>> {
  title: string;
  description: string;
  type: JSONTypes;
  required: string[];
  properties: P;
  additionalProperties?: boolean;
}

export interface SchemaProperty {
  type: string;
  format?: string;
  minLength?: number;
}

export { ValidationErrors } from "./validation-errors";

export const propertyTypes: Record<string, SchemaPropertyValidationFunction> = {
  array(key, value, schemaProperty, errors) {
    if (!Array.isArray(value)) {
      return errors.addError(key, Error(`Key "${key}" is not an array.`));
    }
    throw new NotImplementedError()
    return errors;
  },
  boolean(key, value, schemaProperty, errors) {
    if (typeof value !== "boolean") {
      return errors.addError(key, Error(`Key "${key}" is not a boolean.`));
    }
    throw new NotImplementedError()
    return errors;
  },
  integer(key, value, schemaProperty, errors) {
    throw new NotImplementedError()
    return errors;
  },
  null(key, value, schemaProperty, errors) {
    if (value !== null) {
      return errors.addError(key, Error(`Key "${key}" is not a null.`));
    }
    throw new NotImplementedError()
    return errors;
  },
  number(key, value, schemaProperty, errors) {
    throw new NotImplementedError()
    return errors;
  },
  object(key, value, schemaProperty, errors) {
    throw new NotImplementedError()
    return errors;
  },
  string: validateStringProperty,
};

export const stringFormats: Map<string, (value: string) => boolean> = new Map([
  ["plain", (value) => true],
  ["date-time", (value) => isISOString(value)],
  ["time", (value) => false],
  ["date", (value) => false],
  ["email", (value) => validator.isEmail(value)],
  ["idn-email", (value) => false],
  ["hostname", (value) => false],
  ["idn-hostname", (value) => false],
  ["ipv4", (value) => false],
  ["ipv6", (value) => false],
  ["uri", (value) => false],
  ["uri-reference", (value) => false],
  ["iri", (value) => false],
  ["iri-reference", (value) => false],
  ["uri-template", (value) => false],
  ["json-pointer", (value) => false],
  ["relative-json-pointer", (value) => false],
  ["regex", (value) => false],
]);
