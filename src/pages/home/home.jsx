import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/services";
import styles from "./home.module.css";
import About from "../../components/about/about";
import Testimonials from "../../components/testimonials/testimonials";
import Footer from "../../components/footer/footer";
import FAQSection from "../../components/FAQSection/FAQSection";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background} id="inicio">
        <Header />
        <Hero />
      </div>
      <div id="sobre">
        <About />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <div id="depoimentos">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
