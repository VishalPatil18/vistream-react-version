import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useAuth, useLikes, useComponents, useWatchlater } from "../../context";
import {
  icons,
  isLiked,
  likesHandler,
  isInWatchlater,
  watchlaterHandler,
  changeToAlphabet,
} from "../../utilities";
import { PlaylistMenu, LoginModal } from "../../components";
import styles from "./MainVideoCard.module.css";

const MainVideoCard = ({ video }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  const { componentsDispatch } = useComponents();
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoLiked, setIsLiked] = useState(isLiked(video, likesState.likes));
  const [inWatchlater, setInWatchlater] = useState(
    isInWatchlater(video, watchlaterState.watchlater)
  );

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
            <button
              className={`${styles.button} ${
                inWatchlater ? styles.liked : null
              }`}
              onClick={() =>
                watchlaterHandler(
                  authState.token,
                  componentsDispatch,
                  watchlaterDispatch,
                  inWatchlater,
                  setInWatchlater,
                  video,
                  ""
                )
              }
            >
              <Icon icon={inWatchlater ? icons.bookmarked : icons.bookmark} />
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
            <p>{(() => changeToAlphabet(video.views))()} Views</p>
            <span className={styles.dot}></span>
            <p>{(() => changeToAlphabet(video.likes))()} Likes</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export { MainVideoCard };
