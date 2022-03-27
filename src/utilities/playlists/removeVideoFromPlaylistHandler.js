import { Alert } from "../../components";
import { removeVideoFromPlaylistsService } from "../../services";

const removeVideoFromPlaylistsHandler = async (
  playlistId,
  videoId,
  playlistsDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Removing from Playlist",
    },
  });
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
      componentsDispatch({
        type: "LOADER",
        payload: {
          active: false,
          title: "",
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later");
    }
  } catch (error) {
    componentsDispatch({
      type: "LOADER",
      payload: {
        active: false,
        title: "",
      },
    });
    componentsDispatch({
      type: "ALERT",
      payload: {
        active: true,
        child: <Alert action="danger" message={error} />,
      },
    });
  }
};

export { removeVideoFromPlaylistsHandler };
