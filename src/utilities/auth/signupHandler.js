import { Alert } from "../../components";
import { signupService } from "../../services";

const signupHandler = async (
  signup,
  authDispatch,
  componentsDispatch,
  event
) => {
  try {
    event.preventDefault();
    componentsDispatch({
      type: "MODAL",
      payload: {
        active: false,
        child: "",
        title: "",
      },
    });
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: true,
        title: "Signing Up",
      },
    });
    const response = await signupService(signup);
    if (response.status === 201) {
      if (signup.rememberMe) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      }
      authDispatch({
        type: "SIGNUP",
        payload: {
          token: response.data.encodedToken,
          user: response.data.createdUser,
        },
      });
      componentsDispatch({
        type: "LOADER",
        payload: {
          active: false,
          title: "",
        },
      });
      componentsDispatch({
        type: "ALERT",
        payload: {
          active: true,
          child: <Alert action="success" message="Signup Successful" />,
        },
      });
    }
  } catch (error) {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: false,
        title: "",
      },
    });
    componentsDispatch({
      type: "ALERT",
      payload: {
        active: true,
        child: (
          <Alert action="danger" message={error.response.data.errors[0]} />
        ),
      },
    });
  }
};

export { signupHandler };
