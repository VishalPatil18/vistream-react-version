import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { DrawerTab } from "../../components";
import { tabsList, icons } from "../../utilities";
import { ASSETS_URL } from "../../constants";
import styles from "./Drawer.module.css";

const Drawer = () => {
  const { authState } = useAuth();
  const [currPage, setCurrPage] = useState("Home");

  return (
    <div className={styles.drawer}>
      <Link to="/" className={styles.drawerHeader}>
        <img src={`${ASSETS_URL}logo.svg`} className="icon-xl" />
        <p className={`h-4 ${styles.brandName}`}>
          <span className={styles.primaryFont}>VIS</span>TREAM
        </p>
      </Link>
      {tabsList.map((item) => (
        <DrawerTab
          key={item.id}
          title={item.title}
          icon={item.icon}
          active={currPage === item.title ? true : false}
          to={!authState.token && item.isPrivate ? "/" : item.to}
          isPrivate={item.isPrivate}
          onClicking={() => setCurrPage(item.title)}
        />
      ))}
      <button
        className={`button btn-outline-primary ${styles.createPlaylistBtn}`}
      >
        <Icon icon={icons.plus} />
        Create Playlist
      </button>
    </div>
  );
};

export { Drawer };
