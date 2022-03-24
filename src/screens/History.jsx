import { Icon } from "@iconify/react";
import { icons, clearHistoryHandler } from "../utilities";
import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { useAuth, useHistory } from "../context";
import { Link } from "react-router-dom";
import styles from "./History.module.css";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const { authState } = useAuth();

  return (
    <section className={styles.body}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Your Watch History</h2>
        <button
          className={`button btn-solid-danger ${styles.clearBtn} ${
            historyState.history.length <= 0 ? styles.disabledBtn : null
          }`}
          onClick={() => clearHistoryHandler(historyDispatch, authState.token)}
        >
          <Icon icon={icons.delete} />
          Clear History
        </button>
      </div>
      <div className={styles.historyWrapper}>
        <InfoSidebar
          page="Watch History"
          noOfVideos={historyState.history.length}
        />
        {historyState.history.length > 0 ? (
          <HorizontalCardWrapper
            videoList={historyState.history}
            page="history"
          />
        ) : (
          <div className={styles.emptyHistoryMsg}>
            <p>
              Why haven't you watched any Video yet? 😲
              <br />
              Go watch a few!
            </p>
            <br />
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

export { History };
