import { useEffect, useState } from "react";
import { PlaylistCard, CreatePlaylistModal } from "../components";
import { Icon } from "@iconify/react";
import { icons, scrollToTop } from "../utilities";
import { useComponents, usePlaylists } from "../context";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const { playlistsState } = usePlaylists();
  const { componentsDispatch } = useComponents();

  useEffect(scrollToTop, []);

  useEffect(() => {
    setPlaylists(Object.values(playlistsState.playlists));
  }, [playlistsState.playlists]);

  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Playlists</h2>
      </div>
      <div className={styles.playlistWrapper}>
        <button
          className={styles.addNewPlaylist}
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
          <Icon icon={icons.plus} />
          <p className={styles.createPlaylist}>Create Playlist</p>
        </button>

        {playlists.length > 0 &&
          playlists.map((playlist) => (
            <PlaylistCard
              key={playlist._id}
              playlistId={playlist._id}
              title={playlist.title}
              videos={playlist.videos}
              description={playlist.description}
              page="playlist"
            />
          ))}
      </div>
    </section>
  );
};

export { Playlist };
