import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import {
  useAuth,
  useComponents,
  useHistory,
  useLikes,
  usePlaylists,
  useWatchlater,
} from "../../context";
import { icons, logoutHandler } from "../../utilities";
import styles from "./UserSettings.module.css";

const UserSettings = () => {
  const { authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const { playlistsDispatch } = usePlaylists();
  const { componentsDispatch } = useComponents();
  const { watchlaterDispatch } = useWatchlater();
  const navigate = useNavigate();

  return (
    <div className={styles.btnsWrapper}>
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
      <button
        className="button btn-solid-primary"
        onClick={() =>
          logoutHandler(
            authDispatch,
            likesDispatch,
            historyDispatch,
            playlistsDispatch,
            componentsDispatch,
            watchlaterDispatch,
            navigate
          )
        }
      >
        Logout
      </button>
    </div>
  );
};

export { UserSettings };
