import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  useAuth,
  useComponents,
  useHistory,
  useLikes,
  usePlaylists,
} from "../context";
import { icons, logoutHandler } from "../utilities";
import styles from "./Settings.module.css";
import { Icon } from "@iconify/react";

const Settings = () => {
  const { authState, authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const { playlistsDispatch } = usePlaylists();
  const { componentsDispatch } = useComponents();
  const navigate = useNavigate();

  return (
    <section className={styles.settings}>
      {authState.user && (
        <>
          <p className={styles.greet}>Hello, {authState.user.username}👋</p>
          <div className={styles.btnsWrapper}>
            <button
              className="button btn-solid-primary"
              onClick={() =>
                logoutHandler(
                  authDispatch,
                  likesDispatch,
                  historyDispatch,
                  playlistsDispatch,
                  componentsDispatch,
                  navigate
                )
              }
            >
              Logout
            </button>
            <button className="button btn-solid-primary">
              <Link to="/playlist" className={styles.btn}>
                <Icon icon={icons.playlist} />
                Playlists
              </Link>
            </button>
            <button className="button btn-solid-primary">
              <Link to="/liked" className={styles.btn}>
                <Icon icon={icons.liked} />
                Liked
              </Link>
            </button>
            <button className="button btn-solid-primary">
              <Link to="/watchlater" className={styles.btn}>
                <Icon icon={icons.bookmarked} />
                Watch Later
              </Link>
            </button>
            <button className="button btn-solid-primary">
              <Link to="/history" className={styles.btn}>
                <Icon icon={icons.history} />
                History
              </Link>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export { Settings };
