import axios from "axios";

const removeFromHistoryService = (videoId, token) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromHistoryService };
