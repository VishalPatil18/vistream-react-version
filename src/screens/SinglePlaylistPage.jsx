import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { usePlaylists } from "../context";
import { scrollToTop } from "../utilities";
import styles from "./SinglePlaylistPage.module.css";

const SinglePlaylistPage = () => {
  const { playlistID } = useParams();
  const { playlistsState } = usePlaylists();

  const playlist = playlistsState.playlists.find(
    (currPlaylist) => currPlaylist._id === playlistID
  );
  const { title, videos } = playlist;

  useEffect(scrollToTop, []);

  return (
    <section className={styles.body}>
      <div className={styles.playlistWrapper}>
        <InfoSidebar page={title} noOfVideos={videos.length} />
        {videos.length > 0 ? (
          <HorizontalCardWrapper
            videoList={videos}
            page="playlist"
            playlistID={playlistID}
          />
        ) : (
          <div className={styles.emptyPlaylistMsgWrapper}>
            <p className={styles.emptyPlaylistMsg}>
              I'm useless😓
              <br />
              Add Videos in me to make me useful
              <br />
              🙃
            </p>
            <Link to="/explore">
              <button className="button btn-solid-primary">
                Explore Videos
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export { SinglePlaylistPage };
