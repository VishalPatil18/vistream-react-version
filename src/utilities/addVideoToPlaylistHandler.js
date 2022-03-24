import { addVideoToPlaylistService } from "../services";

const addVideoToPlaylistsHandler = async (
  playlistId,
  video,
  playlistsDispatch,
  token
) => {
  try {
    const response = await addVideoToPlaylistService(playlistId, video, token);
    if (response.status === 201) {
      playlistsDispatch({
        type: "ADD_VIDEO_TO_PLAYLIST",
        payload: {
          playlistVideoAdded: response.data.playlist,
          playlistId: response.data.playlist._id,
        },
      });
      alert("Video Added to Playlist");
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert("Video Already Present in playlist");
  }
};

export { addVideoToPlaylistsHandler };
