import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./SmallVideoCard.module.css";

const SmallVideoCard = ({ video }) => {
  return (
    <article className={styles.card}>
      <img src={video.videoThumbnail} className={styles.image} />
      <div className={styles.body}>
        <h3 className={`h-6 ${styles.title}`} title={video.title}>
          {video.title}
        </h3>
        <div className={styles.content}>
          <div className={styles.detailsWrapper}>
            <Icon icon={icons.clock} />
            <p className={styles.detail}>{video.videoLength}</p>
          </div>
          <div className={styles.detailsWrapper}>
            <Icon icon={icons.views} />
            <p className={styles.detail}>{video.views}</p>
          </div>
          <div className={styles.detailsWrapper}>
            <Icon icon={icons.liked} />
            <p className={styles.detail}>{video.likes}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { SmallVideoCard };
