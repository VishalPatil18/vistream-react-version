import { Routes, Route } from "react-router-dom";
import { Drawer, GreetingCard, Footer } from "./components";
import { Home } from "./screens";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Drawer />
      <section className={styles.mainBody}>
        <GreetingCard />
        <Routes>
          <Route path="/" element={<Home cname={styles.mainContent} />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
