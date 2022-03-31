import { useEffect } from "react";
import { Link } from "react-router-dom";
import { InfoSidebar, HorizontalCardWrapper } from "../components";
import { useWatchlater } from "../context";
import { scrollToTop } from "../utilities";
import styles from "./Watchlater.module.css";

const Watchlater = () => {
  const { watchlaterState } = useWatchlater();

  useEffect(scrollToTop, []);

  return (
    <section className={styles.body}>
      <div className={styles.watchlaterWrapper}>
        <InfoSidebar
          page="Watch Later"
          noOfVideos={watchlaterState.watchlater.length}
        />
        {watchlaterState.watchlater.length > 0 ? (
          <HorizontalCardWrapper
            videoList={watchlaterState.watchlater}
            page="watchlater"
          />
        ) : (
          <div className={styles.emptyWatchlaterMsgWrapper}>
            <p className={styles.emptyWatchlaterMsg}>
              Do you wish to see some video later?
              <br />
              Then go and add them to watchlater <br />
              🙃
            </p>
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

export { Watchlater };
