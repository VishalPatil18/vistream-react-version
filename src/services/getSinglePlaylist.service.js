import axios from "axios";

const getSinglePlaylistsService = (playlistId, token) => {
  return axios.get(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { getSinglePlaylistsService };
