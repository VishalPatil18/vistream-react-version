import { useState } from "react";
import { Icon } from "@iconify/react";
import { useAuth, useLikes, useComponents } from "../../context";
import { icons, isLiked, likesHandler } from "../../utilities";
import styles from "./MainVideoCard.module.css";
import { Link } from "react-router-dom";

const MainVideoCard = ({ video }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { componentsDispatch } = useComponents();
  const [liked, setLiked] = useState(isLiked(video, likesState.likes));

  return (
    <article className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <Link to={`/${video.youtubeID}`}>
          <img className={styles.thumbnail} src={video.videoThumbnail} />
        </Link>
        <div className={styles.header}>
          <small className={styles.videoLength}>{video.videoLength}</small>
          <div className={styles.btnWrapper}>
            <button
              className={`${styles.button} ${liked ? styles.liked : null}`}
              onClick={() =>
                likesHandler(
                  authState.token,
                  componentsDispatch,
                  liked,
                  likesDispatch,
                  setLiked,
                  video
                )
              }
            >
              <Icon icon={liked ? icons.liked : icons.like} />
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
          <Link to={`/${video.youtubeID}`}>
            <h4 className={styles.title} title={video.title}>
              {video.title}
            </h4>
          </Link>
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
