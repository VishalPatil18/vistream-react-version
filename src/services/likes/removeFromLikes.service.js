import axios from "axios";

const removeFromLikesService = (videoId, token) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromLikesService };
