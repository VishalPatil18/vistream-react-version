import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { icons, removeFromPlaylistsHandler } from "../../utilities";
import styles from "./PlaylistCard.module.css";
import { useAuth, usePlaylists } from "../../context";

const PlaylistCard = ({
  playlistId,
  title,
  videos,
  description,
  page = "",
}) => {
  const { playlistsDispatch } = usePlaylists();
  const { authState } = useAuth();

  return (
    <article
      className={`${styles.card} ${
        page === "playlist" ? styles.playlistPageStyling : null
      }`}
    >
      {page === "playlist" ? (
        <div className={styles.actionBtnsWrapper}>
          <button className={styles.playBtn}>
            <Link to={`/playlists/${playlistId}`}>
              <Icon icon={icons.play} className={styles.actionBtns} />
            </Link>
          </button>
          <Icon
            icon={icons.delete}
            className={styles.actionBtns}
            onClick={() =>
              removeFromPlaylistsHandler(
                playlistId,
                playlistsDispatch,
                authState.token
              )
            }
          />
        </div>
      ) : null}

      <div className={styles.body}>
        <h1 className={`h-5 ${styles.title}`}>{title}</h1>
        <div className={styles.videosWrapper}>
          <Icon icon={icons.playlistIcon} className={styles.playlistBtn} />
          <small className={styles.videosCaption}>{videos.length} videos</small>
        </div>
      </div>
    </article>
  );
};

export { PlaylistCard };
