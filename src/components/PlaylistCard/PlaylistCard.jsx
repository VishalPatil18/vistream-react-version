import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./PlaylistCard.module.css";

const PlaylistCard = ({ imageSrc, title, videos }) => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} className={styles.image} />
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
