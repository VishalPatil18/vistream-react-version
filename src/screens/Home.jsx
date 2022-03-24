import {
  CategoryCarousel,
  PlaylistCarousel,
  FilterTags,
  TrendingVideoTable,
  WatchlaterVideos,
  FeaturedVideos,
} from "../components";
import { Link } from "react-router-dom";
import { usePlaylists } from "../context";
import styles from "./Home.module.css";

const Home = ({ cname }) => {
  const { playlistsState } = usePlaylists();

  return (
    <main className={cname}>
      <FilterTags page={"homePage"} />
      <CategoryCarousel />
      {playlistsState.playlists.length > 0 ? (
        <PlaylistCarousel playlists={playlistsState.playlists} />
      ) : null}
      <TrendingVideoTable />
      <WatchlaterVideos />
      <FeaturedVideos page="homePage" />
      <footer className={styles.footer}>
        <Link
          to="/explore"
          className={`button btn-solid-primary ${styles.seeAllVideosBtn}`}
        >
          See all Videos
        </Link>
      </footer>
    </main>
  );
};

export { Home };
