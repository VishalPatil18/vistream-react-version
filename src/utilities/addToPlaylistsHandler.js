import { addToPlaylistsService } from "../services";

const addToPlaylistsHandler = async (
  playlist,
  playlistsDispatch,
  componentsDispatch,
  token,
  event
) => {
  event.preventDefault();
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
        type: "MODAL",
        payload: {
          active: false,
          child: "",
          title: "",
        },
      });
      alert("Playlist Created Successfully");
    } else {
      throw new Error("Something went wrong. Please try again later!");
    }
  } catch (error) {
    alert(error);
  }
};

export { addToPlaylistsHandler };
