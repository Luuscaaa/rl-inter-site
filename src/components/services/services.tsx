import styles from "./services.module.css";
import treinoPersonalizado from "../../assets/treino-personalizado.jpg";
import nutricaoEsportiva from "../../assets/nutricao-esportiva.jpg";
import fisioterapiaPreventiva from "../../assets/fisioterapia-preventiva.jpg";
import atendimentoOnline from "../../assets/atendimento-online.jpg";
import paraEmpresa from "../../assets/para-empresas.jpg";
import {
  SERVICES_TITLE,
  SERVICES_DESCRIPTION,
  SERVICES_CARDS,
} from "../../constants/texts";

const WHATSAPP_URL = "https://wa.me/+5511933441275";

function handleWhatsappRedirect() {
  window.open(WHATSAPP_URL, "_blank");
}

function Services() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>{SERVICES_TITLE}</h2>
        <p className={styles.description}>{SERVICES_DESCRIPTION}</p>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.card}>
          <img
            src={treinoPersonalizado}
            alt={SERVICES_CARDS[0].alt}
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>{SERVICES_CARDS[0].title}</h4>
          <button className={styles.cardBtn} onClick={handleWhatsappRedirect}>
            {SERVICES_CARDS[0].btn}
          </button>
        </div>
        <div className={styles.card}>
          <img
            src={nutricaoEsportiva}
            alt={SERVICES_CARDS[1].alt}
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>{SERVICES_CARDS[1].title}</h4>
          <button className={styles.cardBtn} onClick={handleWhatsappRedirect}>
            {SERVICES_CARDS[1].btn}
          </button>
        </div>
        <div className={styles.card}>
          <img
            src={fisioterapiaPreventiva}
            alt={SERVICES_CARDS[2].alt}
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>{SERVICES_CARDS[2].title}</h4>
          <button className={styles.cardBtn} onClick={handleWhatsappRedirect}>
            {SERVICES_CARDS[2].btn}
          </button>
        </div>
        <div className={styles.card}>
          <img
            src={atendimentoOnline}
            alt={SERVICES_CARDS[3].alt}
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>{SERVICES_CARDS[3].title}</h4>
          <button className={styles.cardBtn} onClick={handleWhatsappRedirect}>
            {SERVICES_CARDS[3].btn}
          </button>
        </div>
        <div className={styles.card}>
          <img
            src={paraEmpresa}
            alt={SERVICES_CARDS[4].alt}
            className={styles.img}
          />
          <h4 className={styles.cardTitle}>{SERVICES_CARDS[4].title}</h4>
          <button className={styles.cardBtn} onClick={handleWhatsappRedirect}>
            {SERVICES_CARDS[4].btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
