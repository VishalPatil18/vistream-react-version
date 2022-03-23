import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./MainVideoCard.module.css";

const MainVideoCard = ({ video }) => {
  return (
    <article className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <img className={styles.thumbnail} src={video.videoThumbnail} />
        <div className={styles.header}>
          <small className={styles.videoLength}>{video.videoLength}</small>
          <div className={styles.btnWrapper}>
            <button className={styles.button}>
              <Icon icon={icons.like} />
            </button>
            <button className={styles.button}>
              <Icon icon={icons.bookmark} />
            </button>
            <button className={styles.button}>
              <Icon icon={icons.addToPlaylist} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <img src={video.channelThumbnail} className={styles.channelThumbnail} />
        <div className={styles.bodyContent}>
          <h4 className={styles.title} title={video.title}>
            {video.title}
          </h4>
          <p className={styles.channelName}>{video.channelName}</p>
          <div className={styles.channelDetails}>
            <p>{video.views} Views</p>
            <span className={styles.dot}></span>
            <p>{video.likes} Likes</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { MainVideoCard };
