import { ValidationErrors } from "./validation-errors";

export interface ValidationFunction {
  (
    key: string,
    value: unknown,
    schemaProperty: SchemaProperty
  ): ValidationErrors;
}

export interface SchemaProperty {
  type: string;
  format?: string;
  minLength?: number;
}

export { ValidationErrors } from "./validation-errors";