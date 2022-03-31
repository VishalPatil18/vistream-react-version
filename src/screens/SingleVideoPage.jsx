import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { HorizontalCardWrapper, PlaylistMenu } from "../components";
import { videos } from "../backend/db/videos";
import {
  addToHistoryHandler,
  icons,
  isLiked,
  likesHandler,
  getSingleVideoHandler,
  isInWatchlater,
  watchlaterHandler,
  scrollToTop,
} from "../utilities";
import {
  useAuth,
  useComponents,
  useHistory,
  useLikes,
  useWatchlater,
} from "../context";
import styles from "./SingleVideoPage.module.css";

const SingleVideoPage = () => {
  const { videoID } = useParams();
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const { historyDispatch } = useHistory();
  const { likesState, likesDispatch } = useLikes();
  const { watchlaterState, watchlaterDispatch } = useWatchlater();
  const [isPlaylistMenuOpen, setIsPlaylistMenuOpen] = useState(false);
  const [video, setVideo] = useState({});
  const videoList = videos.slice(8, 22);
  const [isVideoLiked, setIsLiked] = useState(false);
  const [inWatchlater, setInWatchlater] = useState(false);

  const ref = useOnclickOutside(() => {
    setIsPlaylistMenuOpen(false);
  });

  useEffect(() => {
    scrollToTop();
    getSingleVideoHandler(videoID).then((videoResponse) => {
      setVideo(videoResponse);
      setIsLiked(isLiked(videoResponse, likesState.likes));
      setInWatchlater(
        isInWatchlater(videoResponse, watchlaterState.watchlater)
      );
      if (authState.token) {
        addToHistoryHandler(videoResponse, historyDispatch, authState.token);
      }
    });
  }, [videoID]);

  return (
    <section className={styles.singleVideoPage}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoEmbed}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoID}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <h4 className={`h-4 ${styles.title}`}>{video.title}</h4>
            <div className={styles.videoInfoWrapper}>
              <div className={styles.videoInfo}>
                <p>{video.views} Views</p>
                <span className={styles.dot}></span>
                <p>{video.likes} Likes</p>
              </div>
              <div className={styles.iconsWrapper}>
                <button
                  className={`${styles.valueWrapper} ${
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
                  <p className={styles.value}>{video.likes}</p>
                </button>
                <button
                  className={`${styles.valueWrapper} ${styles.bookmarkIcon} ${
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
                  <Icon
                    icon={inWatchlater ? icons.bookmarked : icons.bookmark}
                  />
                  <p className={styles.value}>Watchlater</p>
                </button>
                <button
                  className={`${styles.valueWrapper} ${styles.playlistIcon}`}
                  onClick={() =>
                    setIsPlaylistMenuOpen((prevState) => !prevState)
                  }
                >
                  <Icon icon={icons.addToPlaylist} />
                  <p className={styles.value}>Save</p>
                </button>
                <div
                  ref={ref}
                  className={`${styles.playlistMenu} ${
                    isPlaylistMenuOpen ? styles.menuOpen : styles.menuClose
                  }`}
                >
                  <PlaylistMenu video={video} />
                </div>
                <span className={`${styles.valueWrapper}`}>
                  <Icon icon={icons.share2} />
                  <p className={styles.value}>Share</p>
                </span>
              </div>
            </div>
            <div className={styles.channelWrapper}>
              <img
                src={video.channelThumbnail}
                className={styles.channelThumbnail}
              />
              <div className={styles.channelDetails}>
                <a className={styles.channelName} href={video.channelLink}>
                  {video.channelName}
                </a>
                <p className={styles.channelSubs}>
                  {video.subscribers} Subscribers
                </p>
                <p className={styles.descriptionText}>{video.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.trendingVideos}>
            <HorizontalCardWrapper videoList={videoList} page="watchlater" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SingleVideoPage };
