import { useEffect, useState } from "react";
import { scrollToTop } from "../utilities";
import { UserProfile, UserSettings } from "../components";
import styles from "./Settings.module.css";

const Settings = () => {
  const [tab, setTab] = useState("settings");

  const tabHandler = (tabName) => {
    setTab(tabName);
  };

  useEffect(scrollToTop, []);

  return (
    <section className={styles.settings}>
      <nav className={styles.nav}>
        <button
          className={`${styles.navBtn} ${
            tab === "settings" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("settings")}
        >
          Settings
        </button>
        <button
          className={`${styles.navBtn} ${
            tab === "profile" ? styles.activeNavBtn : ""
          }`}
          onClick={() => tabHandler("profile")}
        >
          Profile
        </button>
      </nav>

      {(() => {
        switch (tab) {
          case "profile":
            return <UserProfile />;
          case "settings":
            return <UserSettings />;
          default:
            return <></>;
        }
      })()}
    </section>
  );
};

export { Settings };
