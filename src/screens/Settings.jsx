import { useNavigate } from "react-router";
import { useAuth, useHistory, useLikes } from "../context";
import { logoutHandler } from "../utilities";
import styles from "./Settings.module.css";

const Settings = () => {
  const { authState, authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
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
