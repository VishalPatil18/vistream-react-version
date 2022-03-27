import { addVideoToPlaylistsHandler } from "../../utilities";
import { CreatePlaylistModal } from "../../components";
import { useAuth, useComponents, usePlaylists } from "../../context";
import styles from "./PlaylistMenu.module.css";

const PlaylistMenu = ({ video }) => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const { playlistsState, playlistsDispatch } = usePlaylists();

  return (
    <div className={styles.buttonsWrapper}>
      {playlistsState.playlists.length > 0
        ? playlistsState.playlists.map((playlist) => (
            <button
              key={playlist._id}
              className={styles.playlistBtns}
              onClick={() =>
                addVideoToPlaylistsHandler(
                  playlist._id,
                  video,
                  playlistsDispatch,
                  componentsDispatch,
                  authState.token
                )
              }
            >
              {playlist.title}
            </button>
          ))
        : null}
      <button
        className={styles.playlistBtns}
        onClick={() =>
          componentsDispatch({
            type: "MODAL",
            payload: {
              active: true,
              child: <CreatePlaylistModal />,
              title: "Create Playlist",
            },
          })
        }
      >
        + Create New Playlist
      </button>
    </div>
  );
};

export { PlaylistMenu };
