import { useState } from "react";
import { Icon } from "@iconify/react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useAuth, useLikes, useComponents } from "../../context";
import { icons, isLiked, likesHandler } from "../../utilities";
import { PlaylistMenu, LoginModal } from "../../components";
import { Link } from "react-router-dom";
import styles from "./MainVideoCard.module.css";

const MainVideoCard = ({ video }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { componentsDispatch } = useComponents();
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoLiked, setIsLiked] = useState(isLiked(video, likesState.likes));

  const ref = useOnclickOutside(() => {
    setIsOpen(false);
  });

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
              className={`${styles.button} ${
                isVideoLiked ? styles.liked : null
              }`}
              onClick={() =>
                likesHandler(
                  authState.token,
                  componentsDispatch,
                  likesDispatch,
                  isVideoLiked,
                  setIsLiked,
                  video
                )
              }
            >
              <Icon icon={isVideoLiked ? icons.liked : icons.like} />
            </button>
            <button className={styles.button}>
              <Icon icon={icons.bookmark} />
            </button>
            <button
              className={styles.button}
              onClick={() =>
                authState.token
                  ? setIsOpen((prevState) => !prevState)
                  : componentsDispatch({
                      type: "MODAL",
                      payload: {
                        active: true,
                        child: <LoginModal />,
                        title: "Login",
                      },
                    })
              }
            >
              <Icon icon={icons.addToPlaylist} />
            </button>
            <div
              ref={ref}
              className={`${styles.playlistMenu} ${
                isOpen ? styles.menuOpen : styles.menuClose
              }`}
            >
              <PlaylistMenu video={video} />
            </div>
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
