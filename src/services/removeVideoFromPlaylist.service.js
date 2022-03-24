import axios from "axios";

const removeVideoFromPlaylistsService = (playlistId, videoId, token) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeVideoFromPlaylistsService };
