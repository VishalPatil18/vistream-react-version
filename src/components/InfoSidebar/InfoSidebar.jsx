import { Icon } from "@iconify/react";
import { icons, clearHistoryHandler } from "../../utilities";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useAuth, useComponents, useHistory } from "../../context";
import styles from "./InfoSidebar.module.css";

const InfoSidebar = ({ page, noOfVideos }) => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const { historyState, historyDispatch } = useHistory();
  const [isClearMenuOpen, setIsClearMenuOpen] = useState(false);

  const ref = useOnclickOutside(() => {
    setIsClearMenuOpen(false);
  });

  return (
    <div className={styles.sidebar}>
      <img
        className={styles.watchlaterThumbnail}
        src="http://i3.ytimg.com/vi/ASzOzrB-a9E/hqdefault.jpg"
        alt="watchlater-thumbnail"
      />
      <div className={styles.sidebarHeaderWrapper}>
        <div>
          <p className={styles.sidebarTitle}>{page}</p>
          <div className={styles.sidebarHeader}>
            <p>{noOfVideos} videos</p>
            <span className={styles.dot}></span>
            <p>Updated 4 days ago</p>
          </div>
        </div>
        <button
          className={styles.menuBtn}
          onClick={() => setIsClearMenuOpen((prevState) => !prevState)}
        >
          <Icon icon={icons.menu} />
        </button>

        {isClearMenuOpen ? (
          <div className={styles.menu}>
            <button
              ref={ref}
              className={`button btn-solid-danger ${styles.clearBtn} ${
                historyState.history.length <= 0 ? styles.disabledBtn : null
              }`}
              onClick={() =>
                clearHistoryHandler(
                  historyDispatch,
                  componentsDispatch,
                  authState.token
                )
              }
            >
              <Icon icon={icons.delete} />
              Clear {page}
            </button>
          </div>
        ) : null}
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
