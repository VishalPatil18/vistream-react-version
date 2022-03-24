import { removeVideoFromPlaylistsService } from "../services";

const removeVideoFromPlaylistsHandler = async (
  playlistId,
  videoId,
  playlistsDispatch,
  token
) => {
  try {
    const response = await removeVideoFromPlaylistsService(
      playlistId,
      videoId,
      token
    );
    if (response.status === 200) {
      playlistsDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: {
          playlistVideoRemoved: response.data.playlist,
          playlistId: response.data.playlist._id,
        },
      });
      alert("Video Removed from Playlist successfully");
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeVideoFromPlaylistsHandler };
