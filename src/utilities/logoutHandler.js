const logoutHandler = (authDispatch, navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  authDispatch({
    type: "LOGOUT",
  });
  alert("Logout Successful")
  navigate("/");
};

export { logoutHandler };
