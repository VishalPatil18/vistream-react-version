const logoutHandler = (
  authDispatch,
  likesDispatch,
  historyDispatch,
  playlistDispatch,
  navigate
) => {
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
  alert("Logout Successful");
  navigate("/");
};

export { logoutHandler };
