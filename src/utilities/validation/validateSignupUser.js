const validateSignupUser = ({ email, username, password, confirmPassword }) => {
  const emailLength = email.length;
  const passwordLength = password.length;
  const usernameLength = username.length;
  if (emailLength === 0 || passwordLength === 0 || usernameLength === 0) {
    return "Email, username and Password cannot be empty!";
  } else if (passwordLength < 8) {
    return "Password must be atleast 8 characters long!";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match! Please try again";
  }

  const regexHasNum = /[0-9]/;
  const regexHasAlpha = /[a-z]/i;
  const regexEmail = /\S+@\S+\.\S+/;
  const passTestResult =
    regexHasNum.test(password) && regexHasAlpha.test(password);
  const emailTestResult = regexEmail.test(email);
  if (passTestResult && emailTestResult) {
    return true;
  } else if (emailTestResult) {
    return "Invalid password. Password should have smallcase letter, capital letter and number each";
  } else if (passTestResult) {
    return "Invalid Email. Please try again!";
  } else {
    return "Invalid Email and Password. Please try again!";
  }
};

export { validateSignupUser };
