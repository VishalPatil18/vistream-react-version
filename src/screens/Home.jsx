import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  CategoryCarousel,
  PlaylistCarousel,
  TrendingVideoTable,
  WatchlaterVideos,
  FeaturedVideos,
} from "../components";
import { scrollToTop } from "../utilities";
import { usePlaylists, useWatchlater } from "../context";
import styles from "./Home.module.css";

const Home = ({ cname }) => {
  const { playlistsState } = usePlaylists();
  const { watchlaterState } = useWatchlater();

  useEffect(scrollToTop, []);

  return (
    <main className={cname}>
      <CategoryCarousel />
      {playlistsState.playlists.length > 0 ? (
        <PlaylistCarousel playlists={playlistsState.playlists} />
      ) : null}
      <TrendingVideoTable />
      {watchlaterState.watchlater.length > 0 ? <WatchlaterVideos /> : null}
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
