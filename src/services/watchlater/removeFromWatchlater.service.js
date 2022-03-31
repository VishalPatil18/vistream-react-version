import axios from "axios";

const removeFromWatchlaterService = (videoId, token) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromWatchlaterService };
