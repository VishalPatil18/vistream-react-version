import { Link } from "react-router-dom";
import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { useLikes } from "../context";
import styles from "./Liked.module.css";

const Liked = () => {
  const { likesState } = useLikes();

  return (
    <section className={styles.body}>
      <div className={styles.likedWrapper}>
        <InfoSidebar page="Liked Videos" noOfVideos={likesState.likes.length} />
        {likesState.likes.length > 0 ? (
          <HorizontalCardWrapper videoList={likesState.likes} page="liked" />
        ) : (
          <div className={styles.emptyLikesMsgWrapper}>
            <p className={styles.emptyLikesMsg}>
              Don't you love the videos you see?
              <br />
              Then go and like them <br />
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

export { Liked };
