import axios from "axios";

const loginService = (login) => {
  return axios.post("/api/auth/login", login);
};

export { loginService };
