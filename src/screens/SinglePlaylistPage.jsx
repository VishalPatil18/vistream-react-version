import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { useParams } from "react-router-dom";
import styles from "./SinglePlaylistPage.module.css";
import { usePlaylists } from "../context";

const SinglePlaylistPage = () => {
  const { playlistID } = useParams();
  const { playlistsState } = usePlaylists();

  const playlist = playlistsState.playlists.find(
    (currPlaylist) => currPlaylist._id === playlistID
  );
  const { _id, title, description, videos } = playlist;

  return (
    <section className={styles.body}>
      <div className={styles.playlistWrapper}>
        <InfoSidebar page={title} noOfVideos={videos.length} />
        <HorizontalCardWrapper
          videoList={videos}
          page="playlist"
          playlistID={playlistID}
        />
      </div>
    </section>
  );
};

export { SinglePlaylistPage };
