import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/services";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Header />
        <Hero />
      </div>
      <Services />
    </div>
  );
}

export default Home;
