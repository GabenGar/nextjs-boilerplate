import { nanoid } from "nanoid";
import { createEmailConfirmation } from "#database/queries/account";
import { sendEmail } from "#lib/email";
import { ValidationErrors, ValidationResult } from "#lib/json-schema/types";
import { isEmail } from "#lib/util/validator";
import { SITE_ORIGIN } from "#environment/vars";

export function validateEmailString(
  emailString: string
): ValidationResult<string> {
  const formattedEmail = emailString.trim();
  const errors = new ValidationErrors();

  if (!isEmail(formattedEmail)) {
    errors.addError("email", "Not a valid email string.");
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

export async function sendEmailConfirmation(email: string, account_id: number) {
  const confirmation_key = nanoid();
  const confirmationLink = new URL(
    `/account/email/${confirmation_key}`,
    SITE_ORIGIN
  ).toString();

  await sendEmail({
    to: email,
    subject: "Email Confirmation",
    text: `Confirm your email at ${confirmationLink} .`,
  });

  await createEmailConfirmation(account_id, email, confirmation_key)

  return true;
}
