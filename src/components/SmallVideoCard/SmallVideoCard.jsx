import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { PlaylistMenu, LoginModal } from "../../components";
import {
  useAuth,
  useLikes,
  useComponents,
  useHistory,
  usePlaylists,
  useWatchlater,
} from "../../context";
import {
  icons,
  isLiked,
  isInWatchlater,
  likesHandler,
  removeFromHistoryHandler,
  removeVideoFromPlaylistsHandler,
  watchlaterHandler,
} from "../../utilities";
import styles from "./SmallVideoCard.module.css";

const SmallVideoCard = ({ video, page = "", playlistID = "" }) => {
  const { authState } = useAuth();
  const { likesState, likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const { componentsDispatch } = useComponents();
  const { playlistsDispatch } = usePlaylists();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoLiked, setIsLiked] = useState(isLiked(video, likesState.likes));
  const [inWatchlater, setInWatchlater] = useState(
    isInWatchlater(video, watchlaterState.watchlater)
  );

  const ref = useOnclickOutside(() => {
    setIsPlaylistMenuOpen(false);
    setIsMenuOpen(false);
  });

  return (
    <article className={styles.card}>
      <Link to={`/video/${video.youtubeID}`} className={styles.imageWrapper}>
        <img src={video.videoThumbnail} className={styles.image} />
        <small className={styles.videoLength}>{video.videoLength}</small>
      </Link>
      <div className={styles.menuWrapper}>
        <Icon
          icon={icons.menu}
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
        {isMenuOpen ? (
          <div className={styles.menu} ref={ref}>
            <button
              className={styles.menuActionBtn}
              onClick={() => {
                switch (page) {
                  case "liked":
                    return likesHandler(
                      authState.token,
                      componentsDispatch,
                      likesDispatch,
                      isVideoLiked,
                      setIsLiked,
                      video,
                      page
                    );
                  case "history":
                    return removeFromHistoryHandler(
                      video._id,
                      historyDispatch,
                      componentsDispatch,
                      authState.token
                    );
                  case "playlist":
                    return removeVideoFromPlaylistsHandler(
                      playlistID,
                      video._id,
                      playlistsDispatch,
                      componentsDispatch,
                      authState.token
                    );
                  case "watchlater":
                    return watchlaterHandler(
                      authState.token,
                      componentsDispatch,
                      watchlaterDispatch,
                      inWatchlater,
                      setInWatchlater,
                      video,
                      page
                    );
                }
              }}
            >
              <Icon
                icon={(() => {
                  if (
                    (page === "liked" && isVideoLiked) ||
                    (page === "watchlater" && inWatchlater)
                  )
                    return icons.delete;
                  else {
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
                  }
                })()}
                className={styles.menuActionBtnIcon}
              />
              {(page === "liked" && isVideoLiked) ||
              (page === "watchlater" && inWatchlater) ||
              page === "history"
                ? `Remove from ${page}`
                : `Add to ${page}`}
            </button>
            <button
              className={styles.menuActionBtn}
              onClick={() =>
                authState.token
                  ? setIsPlaylistMenuOpen((prevState) => !prevState)
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
            </button>
            <div
              ref={ref}
              className={`${styles.playlistMenu} ${
                isPlaylistMenuOpen ? styles.menuOpen : styles.menuClose
              }`}
            >
              <PlaylistMenu video={video} />
            </div>
          </div>
        ) : null}
      </div>
      <Link to={`/video/${video.youtubeID}`} className={styles.body}>
        <h3 className={`h-6 ${styles.title}`} title={video.title}>
          {video.title}
        </h3>
        <p className={styles.channelName}>{video.channelName}</p>
      </Link>
    </article>
  );
};

export { SmallVideoCard };
