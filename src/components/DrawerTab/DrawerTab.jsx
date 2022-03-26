import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import styles from "./DrawerTab.module.css";

const DrawerTab = ({ title, icon, active, to, isPrivate }) => {
  const { authState } = useAuth();
  return (
    <Link
      onClick={() => {
        if (!authState.token && isPrivate) alert("You're not Logged-in");
      }}
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
