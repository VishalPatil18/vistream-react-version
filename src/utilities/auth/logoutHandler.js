import { Alert } from "../../components";

const logoutHandler = (
  authDispatch,
  likesDispatch,
  historyDispatch,
  playlistDispatch,
  componentsDispatch,
  navigate
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Logging Out...",
    },
  });
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authDispatch({
    type: "LOGOUT",
  });
  likesDispatch({
    type: "RESET_LIKES",
  });
  historyDispatch({
    type: "CLEAR_HISTORY",
  });
  playlistDispatch({
    type: "CLEAR_PLAYLIST",
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
      child: <Alert action="success" message="Logout Successful" />,
    },
  });
  navigate("/");
};

export { logoutHandler };
