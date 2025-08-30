import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/services";
import styles from "./home.module.css";
import About from "../../components/about/about";
import Testimonials from "../../components/testimonials/testimonials";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}

export default Home;
