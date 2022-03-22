import { SmallVideoCard } from "../../components";
import styles from "./HorizontalCardWrapper.module.css";

const HorizontalCardWrapper = ({ videoList }) => {
  return (
    <div className={styles.videolistWrapper}>
      {videoList.map((video, i) => (
        <SmallVideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export { HorizontalCardWrapper };
