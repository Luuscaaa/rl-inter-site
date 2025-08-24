import styles from "./services.module.css";
import treinoPersonalizado from "../../assets/treino-personalizado.jpg";
import nutricaoEsportiva from "../../assets/nutricao-esportiva.jpg";
import fisioterapiaPreventiva from "../../assets/fisioterapia-preventiva.jpg";
import atendimentoOnline from "../../assets/atendimento-online.jpg";
import paraEmpresa from "../../assets/para-empresas.jpg";

function Services() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>NOSSOS SERVIÇOS</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis
          suscipit corporis, porro minima eius mollitia nostrum libero, at
          facere eaque sed! Architecto dolorem deleniti minima repellat culpa ea
          quidem?
        </p>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.card}>
          <img
            src={treinoPersonalizado}
            alt="Treino Personalizado"
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>Treino Personalizado</h4>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <img
            src={nutricaoEsportiva}
            alt="Nutrição Esportiva"
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>Nutrição Esportiva</h4>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <img
            src={fisioterapiaPreventiva}
            alt="Fisioterapia Preventiva"
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>Fisioterapia Preventiva</h4>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <img
            src={atendimentoOnline}
            alt="Atendimento Online"
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>Atendimento Online</h4>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <img src={paraEmpresa} alt="Para Empresas" className={styles.img} />
          <h4 className={styles.cardTitle}>Para Empresas</h4>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
