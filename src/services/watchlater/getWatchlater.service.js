import axios from "axios";

const getWatchlaterService = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: {
      authorization: token,
    },
  });
};

export { getWatchlaterService };
