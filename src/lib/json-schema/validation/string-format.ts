import { stringFormats, ValidationErrors } from "#lib/json-schema/types";

export function validateStringFormat(
  key: string,
  value: string,
  format: string = "plain"
) {
  const errors = new ValidationErrors();

  if (stringFormats.has(format)) {
    const isValidFormat = stringFormats.get(format)!(value);
    if (!isValidFormat) {
      errors.addError(
        key,
        Error(`Key "${key}" is not of the format "${format}".`)
      );
    }
  }

  return errors;
}
