import { signupService } from "../services";

const signupHandler = async (
  signup,
  authDispatch,
  componentsDispatch,
  event
) => {
  try {
    event.preventDefault();
    const response = await signupService(signup);
    if (response.status === 201) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      authDispatch({
        type: "SIGNUP",
        payload: {
          token: response.data.encodedToken,
          user: response.data.createdUser,
        },
      });
      componentsDispatch({
        type: "MODAL",
        payload: {
          active: false,
          child: "",
          title: "",
        },
      });
      alert("Signup Successful");
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

export { signupHandler };
