import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { useLikes } from "../context";
import styles from "./Liked.module.css";

const Liked = () => {
  const { likesState } = useLikes();

  return (
    <section className={styles.body}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Liked Videos</h2>
      </div>
      <div className={styles.likedWrapper}>
        <InfoSidebar page="Liked Videos" />
        {likesState.likes.length > 0 ? (
          <HorizontalCardWrapper videoList={likesState.likes} page="liked" />
        ) : (
          <p>Don't you love the videos you see? Then go and like them!</p>
        )}
      </div>
    </section>
  );
};

export { Liked };
