import axios from "axios";

const addVideoToPlaylistService = (playlistId, video, token) => {
  return axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addVideoToPlaylistService };
