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
          <Alert action="warning" message={error.response.data.errors[0]} />
        ),
      },
    });
  }
};

export { addVideoToPlaylistsHandler };
