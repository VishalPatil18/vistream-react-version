const logoutHandler = (authDispatch, likesDispatch, navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authDispatch({
    type: "LOGOUT",
  });
  likesDispatch({
    type: "RESET_LIKES",
  });
  alert("Logout Successful");
  navigate("/");
};

export { logoutHandler };
