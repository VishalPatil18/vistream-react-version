import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useComponents } from "../../context";
import { DrawerTab, LoginModal } from "../../components";
import { tabsList, icons } from "../../utilities";
import { ASSETS_URL } from "../../constants";
import styles from "./Drawer.module.css";

const Drawer = () => {
  const { authState } = useAuth();
  const { componentsDispatch } = useComponents();
  const location = useLocation();
  const [currPage, setCurrPage] = useState("/");

  useEffect(() => {
    setCurrPage(location.pathname);
  }, [location]);

  return (
    <>
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
            to={!authState.token && item.isPrivate ? "/" : item.to}
            active={currPage === item.to ? true : false}
            isPrivate={item.isPrivate}
          />
        ))}
        {authState.user ? (
          <button className={`button btn-round ${styles.profileBadge}`}>
            <Link to="/settings">
              <Icon icon={icons.user} />
              {authState.user.username}
            </Link>
          </button>
        ) : (
          <button
            className={`button btn-round ${styles.profileBadge}`}
            onClick={() =>
              componentsDispatch({
                type: "MODAL",
                payload: {
                  active: true,
                  child: <LoginModal />,
                  title: "Login",
                },
              })
            }
          >
            <Icon icon={icons.login} />
            Login
          </button>
        )}
      </div>
      <div className={styles.mobileDrawer}>
        <button className={currPage === "/" ? styles.active : null}>
          <Link to="/">
            <Icon icon={icons.home} />
          </Link>
        </button>
        <button
          className={`${styles.largeBtn} ${
            currPage === "/explore" ? styles.active : null
          }`}
        >
          <Link to="/explore">
            <Icon icon={icons.explore} />
          </Link>
        </button>
        {authState.token ? (
          <button className={currPage === "/watchlater" ? styles.active : null}>
            <Link to="/watchlater">
              <Icon icon={icons.bookmarked} />
            </Link>
          </button>
        ) : (
          <button
            className={currPage === "/watchlater" ? styles.active : null}
            onClick={() =>
              componentsDispatch({
                type: "MODAL",
                payload: {
                  active: true,
                  child: <LoginModal />,
                  title: "Login",
                },
              })
            }
          >
            <Icon icon={icons.bookmarked} />
          </button>
        )}
        {authState.user ? (
          <button className={currPage === "/settings" ? styles.active : null}>
            <Link to="/settings">
              <Icon icon={icons.settings} />
            </Link>
          </button>
        ) : (
          <button
            onClick={() =>
              componentsDispatch({
                type: "MODAL",
                payload: {
                  active: true,
                  child: <LoginModal />,
                  title: "Login",
                },
              })
            }
          >
            <Icon icon={icons.login} />
          </button>
        )}
      </div>
    </>
  );
};

export { Drawer };
