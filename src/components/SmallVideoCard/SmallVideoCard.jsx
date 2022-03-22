import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./SmallVideoCard.module.css";

const SmallVideoCard = ({ video }) => {
  return (
    <article className={styles.card}>
      <img src={video.videoThumbnail} className={styles.image} />
      <div className={styles.menuWrapper}>
        <Icon icon={icons.menu} className={styles.menuBtn} />
        <div className={styles.menu}>
          <button className={styles.menuActionBtn}>
            <Icon icon={icons.delete} className={styles.menuActionBtnIcon} />
            Remove From Watchlater
          </button>
          <button className={styles.menuActionBtn}>
            <Icon
              icon={icons.playlist}
              className={`${styles.menuActionBtnIcon} ${styles.addToPlaylistIcon}`}
            />
            Save to playlist
          </button>
        </div>
      </div>
      <small className={styles.videoLength}>{video.videoLength}</small>
      <div className={styles.body}>
        <h3 className={`h-6 ${styles.title}`} title={video.title}>
          {video.title}
        </h3>
        <p className={styles.channelName}>{video.channelName}</p>
      </div>
    </article>
  );
};

export { SmallVideoCard };
