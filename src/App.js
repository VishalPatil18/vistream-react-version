import { Routes, Route } from "react-router-dom";
import { Drawer, GreetingCard, Footer } from "./components";
import {
  Home,
  Liked,
  Playlist,
  Watchlater,
  History,
  Settings,
} from "./screens";
import styles from "./App.module.css";
import { Explore } from "./screens";

function App() {
  return (
    <div className={styles.app}>
      <Drawer />
      <section className={styles.mainBody}>
        <GreetingCard />
        <Routes>
          <Route path="/" element={<Home cname={styles.mainContent} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
