import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Assessoria Esportiva Integrada: Treino, Nutrição e Fisioterapia em um
          só Lugar!
        </h1>
        <h4 className={styles.subtitle}>
          Planos 100% personalizados de Treino, Nutrição e Fisioterapia, com
          acompanhamento unificado que maximiza resultados e previne lesões —
          sem complicação.
        </h4>
        <ul className={styles.boxList}>
          <li className={styles.itemList}>
            Treinos exclusivos e adaptados à sua modalidade
          </li>
          <li className={styles.itemList}>
            Cardápio nutricional ajustado em tempo real
          </li>
          <li className={styles.itemList}>Suporte multidisciplinar online</li>
          <li className={styles.itemList}>
            Protocolos de prevenção e reabilitação de lesões
          </li>
        </ul>
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
