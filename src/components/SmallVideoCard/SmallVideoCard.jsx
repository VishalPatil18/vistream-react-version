import { useState } from "react";
import { Icon } from "@iconify/react";
import { useAuth, useLikes, useComponents } from "../../context";
import { icons, isLiked, likesHandler } from "../../utilities";
import styles from "./SmallVideoCard.module.css";
import { Link } from "react-router-dom";

const SmallVideoCard = ({ video, page = "" }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { componentsDispatch } = useComponents();
  const [isPresent, setIsPresent] = useState(() => {
    switch (page) {
      case "liked":
        return isLiked(video, likesState.likes);
      default:
        return false;
    }
  });

  return (
    <article className={styles.card}>
      <Link to={`/${video.youtubeID}`} className={styles.imageWrapper}>
        <img src={video.videoThumbnail} className={styles.image} />
        <small className={styles.videoLength}>{video.videoLength}</small>
      </Link>
      <div className={styles.menuWrapper}>
        <Icon icon={icons.menu} className={styles.menuBtn} />
        <div className={styles.menu}>
          <button
            className={styles.menuActionBtn}
            onClick={() => {
              switch (page) {
                case "liked":
                  return likesHandler(
                    authState.token,
                    componentsDispatch,
                    isPresent,
                    likesDispatch,
                    setIsPresent,
                    video
                  );
              }
            }}
          >
            <Icon
              icon={
                isPresent
                  ? icons.delete
                  : (() => {
                      switch (page) {
                        case "liked":
                          return icons.like;
                        case "history":
                          return icons.history;
                        case "watchlater":
                          return icons.bookmark;
                        default:
                          return icons.plus;
                      }
                    })()
              }
              className={styles.menuActionBtnIcon}
            />
            {isPresent ? `Remove from ${page}` : `Add to ${page}`}
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
      <Link to={`/${video.youtubeID}`} className={styles.body}>
        <h3 className={`h-6 ${styles.title}`} title={video.title}>
          {video.title}
        </h3>
        <p className={styles.channelName}>{video.channelName}</p>
      </Link>
    </article>
  );
};

export { SmallVideoCard };
