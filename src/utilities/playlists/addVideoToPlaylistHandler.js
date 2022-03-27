import { Alert } from "../../components";
import { addVideoToPlaylistService } from "../../services";

const addVideoToPlaylistsHandler = async (
  playlistId,
  video,
  playlistsDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Adding Video to Playlist",
    },
  });
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
      componentsDispatch({
        type: "LOADER",
        payload: {
          active: false,
          title: "",
        },
      });
    } else {
      throw new Error("Something went wrong. Please try again later!");
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
        child: (
          <Alert action="warning" message="Video Already Present in playlist" />
        ),
      },
    });
  }
};

export { addVideoToPlaylistsHandler };
