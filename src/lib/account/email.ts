import { ValidationErrors, ValidationResult } from "#lib/json-schema/types";
import { isEmail } from "#lib/util/validator";

export function validateEmailString(
  emailString: string
): ValidationResult<string> {
  const formattedEmail = emailString.trim();
  const errors = new ValidationErrors();

  if (!isEmail(formattedEmail)) {
    errors.addError("email", "Not a valid email string.")
  }

  if (errors.size) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    modifiedResult: formattedEmail,
  };
}

export async function validateEmailAddress() {}
