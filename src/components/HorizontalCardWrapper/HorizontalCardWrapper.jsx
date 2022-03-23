import { SmallVideoCard } from "../../components";
import styles from "./HorizontalCardWrapper.module.css";

const HorizontalCardWrapper = ({ videoList, page = "" }) => {
  return (
    <div className={styles.videolistWrapper}>
      {videoList.map((video) => (
        <SmallVideoCard key={video._id} video={video} page={page} />
      ))}
    </div>
  );
};

export { HorizontalCardWrapper };
