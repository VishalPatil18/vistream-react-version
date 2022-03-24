const logoutHandler = (authDispatch, likesDispatch, historyDispatch, navigate) => {
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
  alert("Logout Successful");
  navigate("/");
};

export { logoutHandler };
