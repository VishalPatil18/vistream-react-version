import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./PlaylistCard.module.css";

const PlaylistCard = ({ imageSrc, title, videos, page }) => {
  return (
    <article
      className={`${styles.card} ${
        page === "playlist" ? styles.playlistPageStyling : null
      }`}
    >
      <img src={imageSrc} className={styles.image} />

      {page === "playlist" ? (
        <div className={styles.actionBtnsWrapper}>
          <Icon icon={icons.play} className={styles.actionBtns} />
          <Icon
            icon={icons.editPlaylist}
            className={`${styles.actionBtns} ${styles.editPlaylistBtn}`}
          />
          <Icon icon={icons.delete} className={styles.actionBtns} />
        </div>
      ) : null}

      <div className={styles.body}>
        <h1 className={`h-5 ${styles.title}`}>{title}</h1>
        <div className={styles.videosWrapper}>
          <Icon icon={icons.playlistIcon} className={styles.playlistBtn} />
          <small className={styles.videosCaption}>{videos} videos</small>
        </div>
      </div>
    </article>
  );
};

export { PlaylistCard };
