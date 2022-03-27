import axios from "axios";

const signupService = (signup) => {
  return axios.post("/api/auth/signup", signup);
};

export { signupService };
