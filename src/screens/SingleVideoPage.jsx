import { useState } from "react";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { HorizontalCardWrapper } from "../components";
import { videos } from "../backend/db/videos";
import {
  addToHistoryHandler,
  icons,
  isInHistory,
  isLiked,
  likesHandler,
} from "../utilities";
import {
  useAuth,
  useComponents,
  useData,
  useHistory,
  useLikes,
} from "../context";
import styles from "./SingleVideoPage.module.css";

const SingleVideoPage = () => {
  const { videosData } = useData();
  const { videoID } = useParams();
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const { likesState, likesDispatch } = useLikes();
  const { historyState, historyDispatch } = useHistory();

  const videoList = videos.slice(8, 22);
  const video = videosData.find((currVideo) => currVideo.youtubeID === videoID);
  const {
    youtubeID,
    title,
    views,
    likes,
    channelThumbnail,
    channelName,
    channelLink,
    subscribers,
    description,
  } = video;
  const [isVideoLiked, setIsVideoLiked] = useState(
    isLiked(video, likesState.likes)
  );
  const [inHistory, setInHistory] = useState(
    isInHistory(video, historyState.history)
  );

  if (!inHistory) {
    addToHistoryHandler(video, historyDispatch, authState.token);
    setInHistory(true);
  }

  return (
    <section className={styles.singleVideoPage}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoEmbed}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <h4 className={`h-4 ${styles.title}`}>{title}</h4>
            <div className={styles.videoInfoWrapper}>
              <div className={styles.videoInfo}>
                <p>{views} Views</p>
                <span className={styles.dot}></span>
                <p>{likes} Likes</p>
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
                      isVideoLiked,
                      likesDispatch,
                      setIsVideoLiked,
                      video
                    )
                  }
                >
                  <Icon icon={isVideoLiked ? icons.liked : icons.like} />
                  <p className={styles.value}>{likes}</p>
                </button>
                <span
                  className={`${styles.valueWrapper} ${styles.bookmarkIcon}`}
                >
                  <Icon icon={icons.bookmarked} />
                  <p className={styles.value}>Watchlater</p>
                </span>
                <span
                  className={`${styles.valueWrapper} ${styles.playlistIcon}`}
                >
                  <Icon icon={icons.addToPlaylist} />
                  <p className={styles.value}>Save</p>
                </span>
                <span className={`${styles.valueWrapper}`}>
                  <Icon icon={icons.share2} />
                  <p className={styles.value}>Share</p>
                </span>
              </div>
            </div>
            <div className={styles.channelWrapper}>
              <img src={channelThumbnail} className={styles.channelThumbnail} />
              <div className={styles.channelDetails}>
                <a className={styles.channelName} href={channelLink}>
                  {channelName}
                </a>
                <p className={styles.channelSubs}>{subscribers} Subscribers</p>
                <p className={styles.descriptionText}>{description}</p>
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
