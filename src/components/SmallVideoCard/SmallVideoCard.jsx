import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PlaylistMenu, LoginModal } from "../../components";
import {
  useAuth,
  useLikes,
  useComponents,
  useHistory,
  usePlaylists,
} from "../../context";
import {
  icons,
  isInHistory,
  isLiked,
  likesHandler,
  removeFromHistoryHandler,
  removeVideoFromPlaylistsHandler,
} from "../../utilities";
import styles from "./SmallVideoCard.module.css";

const SmallVideoCard = ({ video, page = "", playlistID = "" }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { historyState, historyDispatch } = useHistory();
  const { componentsDispatch } = useComponents();
  const { playlistsDispatch } = usePlaylists();
  const [isOpen, setIsOpen] = useState(false);
  const [isPresent, setIsPresent] = useState(() => {
    switch (page) {
      case "liked":
        return isLiked(video, likesState.likes);
      case "history":
        return isInHistory(video, historyState.history);
      case "playlist":
        return true;
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
                case "history":
                  return removeFromHistoryHandler(
                    video._id,
                    historyDispatch,
                    authState.token
                  );
                case "playlist":
                  return removeVideoFromPlaylistsHandler(
                    playlistID,
                    video._id,
                    playlistsDispatch,
                    authState.token
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
          <button
            className={styles.menuActionBtn}
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
            <Icon
              icon={icons.playlist}
              className={`${styles.menuActionBtnIcon} ${styles.addToPlaylistIcon}`}
            />
            Save to playlist
            <div
              className={`${styles.playlistMenu} ${
                isOpen ? styles.menuOpen : styles.menuClose
              }`}
            >
              <PlaylistMenu video={video} />
            </div>
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
