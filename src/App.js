import { Routes, Route } from "react-router-dom";
import { useComponents } from "./context";
import { Drawer, GreetingCard, Footer, Modal, Loader } from "./components";
import {
  Home,
  Liked,
  Playlist,
  Watchlater,
  History,
  Settings,
  SingleVideoPage,
  Explore,
  SinglePlaylistPage,
} from "./screens";
import styles from "./App.module.css";

function App() {
  const { componentsState } = useComponents();

  return (
    <div className={styles.app}>
      {componentsState.modal.active ? (
        <Modal title={componentsState.modal.title}>
          {componentsState.modal.child}
        </Modal>
      ) : null}
      {componentsState.loader.active ? (
        <Loader title={componentsState.loader.title} />
      ) : null}
      {componentsState.alert.active ? <>{componentsState.alert.child}</> : null}

      <Drawer />
      <section className={styles.mainBody} id="mainBody">
        <GreetingCard />
        <Routes>
          <Route path="/" element={<Home cname={styles.mainContent} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/:videoID" element={<SingleVideoPage />} />
          <Route
            path="/playlists/:playlistID"
            element={<SinglePlaylistPage />}
          />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
