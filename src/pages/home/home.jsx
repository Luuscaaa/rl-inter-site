import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/services";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Services />
    </div>
  );
}

export default Home;
