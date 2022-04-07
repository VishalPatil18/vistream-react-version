const validateLoginUser = (login) => {
  const emailLength = login.email.length;
  const passwordLength = login.password.length;
  if (emailLength === 0 && passwordLength === 0) {
    return "Email and Password cannot be empty!";
  } else if (emailLength === 0) {
    return "Email cannot be empty! Please enter a valid email id";
  } else if (passwordLength === 0) {
    return "Password cannot be empty! Please enter a valid password";
  }

  const regexEmail = /\S+@\S+\.\S+/;
  const emailTestResult = regexEmail.test(login.email);
  if (emailTestResult) {
    return true;
  } else {
    return "Invalid Email! Please enter a valid email id";
  }
};

export { validateLoginUser };
