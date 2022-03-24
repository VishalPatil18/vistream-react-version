import { removeFromPlaylistsService } from "../services";

const removeFromPlaylistsHandler = async (
  playlistId,
  playlistsDispatch,
  token
) => {
  try {
    const response = await removeFromPlaylistsService(playlistId, token);
    if (response.status === 200) {
      playlistsDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: {
          playlists: response.data.playlists,
        },
      });
      alert("Playlist Deleted Successfully!");
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromPlaylistsHandler };
