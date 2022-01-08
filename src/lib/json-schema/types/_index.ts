import validator from "validator";
import { ValidationErrors } from "./validation-errors";
import { isISOString } from "#lib/util/dates";

export type JSONTypes =
  | "array"
  | "boolean"
  | "integer"
  | "null"
  | "number"
  | "object"
  | "string";

export type JSONKeyTypes = "string" | "number";

export interface ValidationResult<T = undefined> {
  isValid: boolean;
  errors?: ValidationErrors;
  modifiedResult?: T;
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
