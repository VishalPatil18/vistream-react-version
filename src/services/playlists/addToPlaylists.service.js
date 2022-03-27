import axios from "axios";

const addToPlaylistsService = (playlist, token) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: playlist },
    {
      headers: { authorization: token },
    }
  );
};

export { addToPlaylistsService };
