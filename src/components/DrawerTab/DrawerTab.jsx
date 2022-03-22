import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styles from "./DrawerTab.module.css";

const DrawerTab = ({ title, icon, active, to, onClicking }) => {
  return (
    <Link
      onClick={onClicking}
      to={to}
      className={`button btn-plain drawer__item ${styles.tab} ${
        active && styles.active
      }`}
    >
      <Icon icon={icon} className="icon-md drawer__item--icon" />
      {title}
    </Link>
  );
};

export { DrawerTab };
