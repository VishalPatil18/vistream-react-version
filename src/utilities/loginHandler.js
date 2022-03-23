import { loginService } from "../services";

const loginHandler = async (login, authDispatch, componentsDispatch, event) => {
  try {
    event.preventDefault();
    const response = await loginService(login);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.foundUser)
      );
      authDispatch({
        type: "LOGIN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.foundUser,
        },
      });
      componentsDispatch({
        type: "MODAL",
        payload: {
          active: false,
          child: "",
          title: "",
        },
      })
      alert("Login Successful");
    }
    if (response.status === 404) {
      throw new Error(
        "The email entered is not Registered. Please Enter a valid Email"
      );
    } else if (response.status === 401) {
      throw new Error("Incorrect Password! Please try again.");
    }
  } catch (error) {
    alert(error);
  }
};

export { loginHandler };
