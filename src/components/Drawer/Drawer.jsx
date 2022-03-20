import { DrawerTab } from "../../components";
import { tabsList, icons } from "../../utilities";
import { ASSETS_URL } from "../../constants";
import { Icon } from "@iconify/react";
import styles from "./Drawer.module.css";

const Drawer = () => {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerHeader}>
        <img src={`${ASSETS_URL}logo.svg`} className="icon-xl" />
        <p className={`h-4 ${styles.brandName}`}>
          <span className={styles.primaryFont}>VIS</span>TREAM
        </p>
      </div>
      {tabsList.map((item) => (
        <DrawerTab
          key={item.id}
          title={item.title}
          icon={item.icon}
          active={item.active}
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
