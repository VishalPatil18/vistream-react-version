import { useNavigate } from "react-router";
import {
  useAuth,
  useComponents,
  useHistory,
  useLikes,
  usePlaylists,
} from "../context";
import { logoutHandler } from "../utilities";
import styles from "./Settings.module.css";

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
        </>
      )}
    </section>
  );
};

export { Settings };
