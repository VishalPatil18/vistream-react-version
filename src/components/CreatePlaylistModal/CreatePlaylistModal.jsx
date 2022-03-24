import { useState } from "react";
import { useAuth, useComponents, usePlaylists } from "../../context";
import { addToPlaylistsHandler, inputHandler } from "../../utilities";
import styles from "./CreatePlaylistModal.module.css";

const CreatePlaylistModal = () => {
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });

  const { authState } = useAuth();
  const { playlistsDispatch } = usePlaylists();
  const { componentsDispatch } = useComponents();

  return (
    <form
      className={`input input__icons input__premium ${styles.form}`}
      onSubmit={(event) =>
        addToPlaylistsHandler(
          playlist,
          playlistsDispatch,
          componentsDispatch,
          authState.token,
          event
        )
      }
    >
      <div className="input__email">
        <input
          className="input__field--text"
          type="text"
          placeholder="Gameplay Videos"
          onChange={(e) => inputHandler(e, setPlaylist, "title")}
        />
        <label className="input__label">Name</label>
      </div>
      <div className="input__email">
        <input
          className="input__field--text"
          type="text"
          placeholder="Description goes here"
          onChange={(e) => inputHandler(e, setPlaylist, "description")}
        />
        <label className="input__label">Description</label>
      </div>
      <input
        className={`button btn-solid-primary modal__footer--btn ${styles.createPlaylistBtn}`}
        value="Create Playlist"
        type="submit"
      />
    </form>
  );
};

export { CreatePlaylistModal };
