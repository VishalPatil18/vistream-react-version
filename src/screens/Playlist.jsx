import { PlaylistCard } from "../components";
import { categories } from "../backend/db/categories";
import { Icon } from "@iconify/react";
import { icons } from "../utilities";
import styles from "./Playlist.module.css";

const Playlist = () => {
  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Playlists</h2>
      </div>
      <div className={styles.playlistWrapper}>
        <button className={styles.addNewPlaylist}>
          <Icon icon={icons.plus} />
          <p className={styles.createPlaylist}>Create Playlist</p>
        </button>
        {categories.map((item) => (
          <PlaylistCard
            key={item._id}
            imageSrc={item.imageSrc}
            title={item.categoryName}
            videos={item.likes}
            page="playlist"
          />
        ))}
      </div>
    </section>
  );
};

export { Playlist };
