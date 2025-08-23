import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Assessoria Esportiva Integrada:
          <br />
          <span className={styles.title2}>
            Treino, Nutrição e Fisioterapia em um só Lugar!
          </span>
        </h1>
        <h4 className={styles.subtitle}>
          Planos 100% personalizados com acompanhamento unificado que maximiza
          resultados e previne lesões.
        </h4>
      </div>
      <div className={styles.boxBtn}>
        <a className={styles.btnPrimary} href="">
          Saiba Mais
        </a>
        <a
          className={styles.btnWhatsapp}
          href="https://wa.me/5511998297808"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Hero;
