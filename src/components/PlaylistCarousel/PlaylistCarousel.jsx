import { Link } from "react-router-dom";
import { PlaylistCard } from "../../components";
import styles from "./PlaylistCarousel.module.css";

const PlaylistCarousel = ({ playlists }) => {
  return (
    <section>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Playlists handcrafted by you!</h2>
        <Link to="/playlist">
          <button
            className={`button btn-plain btn-primary ${styles.seeAllBtn}`}
          >
            See all
          </button>
        </Link>
      </div>
      <div className={styles.carousel}>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            playlistId={playlist._id}
            title={playlist.title}
            videos={playlist.videos}
            description={playlist.description}
            page={"playlist"}
          />
        ))}
      </div>
    </section>
  );
};

export { PlaylistCarousel };
