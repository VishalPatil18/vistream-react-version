import { useAuth } from "../../context";
import styles from "./InfoSidebar.module.css";

const InfoSidebar = ({ page, noOfVideos }) => {
  const { authState } = useAuth();

  return (
    <div className={styles.sidebar}>
      <img
        className={styles.watchlaterThumbnail}
        src="http://i3.ytimg.com/vi/ASzOzrB-a9E/hqdefault.jpg"
        alt="watchlater-thumbnail"
      />
      <div className={styles.sidebarHeaderWrapper}>
        <p className={styles.sidebarTitle}>{page}</p>
        <div className={styles.sidebarHeader}>
          <p>{noOfVideos} videos</p>
          <span className={styles.dot}></span>
          <p>Updated 4 days ago</p>
        </div>
      </div>
      <div className={styles.profileWrapper}>
        <img
          className={styles.profileImg}
          src="https://pbs.twimg.com/profile_images/1402665223685914630/qOzR7n_M_400x400.jpg"
          alt="profile"
        />
        <p title="Bablue Tailor" className={styles.userName}>
          {authState.user.username}
        </p>
      </div>
    </div>
  );
};

export { InfoSidebar };
