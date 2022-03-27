import { Alert } from "../../components";
import { addToPlaylistsService } from "../../services";

const addToPlaylistsHandler = async (
  playlist,
  playlistsDispatch,
  componentsDispatch,
  token,
  event
) => {
  event.preventDefault();
  componentsDispatch({
    type: "MODAL",
    payload: {
      active: false,
      child: "",
      title: "",
    },
  });
  componentsDispatch({
    type: "LOADER",
    payload: {
      active: true,
      title: "Creating Playlist",
    },
  });
  try {
    const response = await addToPlaylistsService(playlist, token);
    if (response.status === 201) {
      playlistsDispatch({
        type: "CREATE_NEW_PLAYLIST",
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
            <Alert action="success" message="Playlist Created Successfully!" />
          ),
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
        child: <Alert action="danger" message={error} />,
      },
    });
  }
};

export { addToPlaylistsHandler };
