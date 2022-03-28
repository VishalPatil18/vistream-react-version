import { Alert } from "../../components";
import { removeFromPlaylistsService } from "../../services";

const removeFromPlaylistsHandler = async (
  playlistId,
  playlistsDispatch,
  componentsDispatch,
  token
) => {
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Deleting Playlist",
    },
  });
  try {
    const response = await removeFromPlaylistsService(playlistId, token);
    if (response.status === 200) {
      playlistsDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: {
          playlists: response.data.playlists,
        },
      });
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
            <Alert action="success" message="Playlist Deleted Successfully!" />
          ),
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
        child: <Alert action="danger" message={error.response.data.errors[0]} />,
      },
    });
  }
};

export { removeFromPlaylistsHandler };
