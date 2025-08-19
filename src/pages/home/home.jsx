import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
