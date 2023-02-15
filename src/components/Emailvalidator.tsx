// this function for validating email
export const validateEmail = (email: string): boolean => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
};

// this function is for validating password
export const validatePassword = (password: string): string | undefined => {
  if (password.length < 8) {
    return "Password should contain at least 8 characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password should contain at least one capital letter";
  }
  if (!/\d/.test(password)) {
    return "Password should contain at least one number";
  }
  if (!/_/.test(password)) {
    return "Password should contain at least one underscore";
  }
  return undefined;
};
