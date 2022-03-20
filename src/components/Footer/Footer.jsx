import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { icons } from "../../utilities";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={`txt-center ${styles.footerContent}`}>
        <article className={styles.footerLeft}>
          <a
            href="https://github.com/VishalPatil18/VIStream"
            className={`h-5 ${styles.contribute}`}
          >
            Contribute to VIStream
          </a>
          <p className="bd-5">
            We are an Open Source Project. Join us to create this beautiful
            Video Streaming Platform and serve the community of Gamers.
          </p>
          <div className={styles.footerLeftSociallinks}>
            <a
              className={`button btn-socialmedia btn-solid-primary ${styles.socialBtn}`}
            >
              <Icon icon={icons.twitter} />
            </a>
            <a
              className={`button btn-socialmedia btn-solid-secondary ${styles.socialBtn}`}
            >
              <Icon icon={icons.linkedin} />
            </a>
            <a
              className={`button btn-socialmedia btn-solid-danger ${styles.socialBtn}`}
            >
              <Icon icon={icons.instagram} />
            </a>
            <a className={`button btn-socialmedia ${styles.mediumBtn}`}>
              <Icon icon={icons.medium} />
            </a>
          </div>
        </article>
        <article className={styles.footerCenter}>
          <Link to="/" className={styles.footerLink}>
            Home
          </Link>
          <Link to="/" className={styles.footerLink}>
            Explore
          </Link>
          <Link to="/" className={styles.footerLink}>
            Trending
          </Link>
          <Link to="/" className={styles.footerLink}>
            Categories
          </Link>
          <Link to="/" className={styles.footerLink}>
            Create Playlist
          </Link>
        </article>
        <article className={styles.footerRight}>
          <Link to="/" className={styles.footerLink}>
            Playlists
          </Link>
          <Link to="/" className={styles.footerLink}>
            Watchlater
          </Link>
          <Link to="/" className={styles.footerLink}>
            Liked
          </Link>
          <Link to="/" className={styles.footerLink}>
            History
          </Link>
          <Link to="/" className={styles.footerLink}>
            Settings
          </Link>
        </article>
      </section>
      <p className={`bd-5 ${styles.footerCopyright}`}>
        Copyright &copy; 2022
        <a href="https://vishalpatil.me/"> Vishal Patil </a>. All Rights
        Reserved
      </p>
    </footer>
  );
};

export { Footer };
