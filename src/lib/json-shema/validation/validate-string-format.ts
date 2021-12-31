import validator from 'validator';
import { isISOString } from "#lib/util/dates";
import { ValidationErrors } from "#types/schemas";

const stringTypes: Map<string, (value: string) => boolean> = new Map([
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

export function validateStringFormat(
  key: string,
  value: string,
  format: string = "plain"
) {
  const errors = new ValidationErrors();

  if (stringTypes.has(format)) {
    const isValidFormat = stringTypes.get(format)!(value);
    if (!isValidFormat) {
      errors.addError(
        key,
        Error(`Key "${key}" is not of the format "${format}".`)
      );
    }
  }

  return errors;
}
