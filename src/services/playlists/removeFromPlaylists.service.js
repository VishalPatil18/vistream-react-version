import axios from "axios";

const removeFromPlaylistsService = (playlistId, token) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { removeFromPlaylistsService };
