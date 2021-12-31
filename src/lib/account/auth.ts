export function registerAccount(name: string, password: string) {
  const result = [validateName(name), validatePassword(password)].every(
    ({ isValid }) => isValid
  );

  if (!result) {
    return [false, ]
  }


}

function validateName(name: string) {
  const formattedName = name.trim();
  const errors: Error[] = [];

  if (formattedName.length < 5) {
    errors.push(new Error("The name is too short"));
  }

  if (errors.length) {
    return { isValid: false, errors };
  }

  return { isValid: true, result: formattedName };
}

function validatePassword(password: string) {
  const formattedPassword = password.trim();
  const errors: Error[] = [];

  if (formattedPassword.length < 8) {
    errors.push(new Error("The password is too short"));
  }

  if (errors.length) {
    return { isValid: false, errors };
  }

  return { isValid: true, result: formattedPassword };
}

function saveNewAccount(name: string, password: string) {}
