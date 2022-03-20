import { Icon } from "@iconify/react";
import styles from "./DrawerTab.module.css";

const DrawerTab = ({ title, icon, active }) => {
  return (
    <button
      className={`button btn-plain drawer__item ${styles.tab} ${
        active && styles.active
      }`}
    >
      <Icon icon={icon} className="icon-md drawer__item--icon" />
      {title}
    </button>
  );
};

export { DrawerTab };
