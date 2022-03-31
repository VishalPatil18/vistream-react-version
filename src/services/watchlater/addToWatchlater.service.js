import axios from "axios";

const addToWatchlaterService = (video, token) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addToWatchlaterService };
