import {
  FaAppleAlt,
  FaBuilding,
  FaDumbbell,
  FaHeartbeat,
  FaMobileAlt,
} from "react-icons/fa";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Serviços</h2>
      </div>
      <div className={styles.servicesList}>
        <div className={styles.card}>
          <FaDumbbell className={styles.cardIcon} size={40} color="#001f3f" />
          <h4 className={styles.cardTitle}>Treino Personalizado</h4>
          <p className={styles.cardDesc}>
            Planos de treino adaptados ao seu nível — do iniciante ao atleta de
            alto rendimento. Evolua com segurança e eficiência, com
            acompanhamento contínuo e ajustes semanais.
          </p>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <FaAppleAlt className={styles.cardIcon} size={40} color="#001f3f" />
          <h4 className={styles.cardTitle}>Nutrição Esportiva</h4>
          <p className={styles.cardDesc}>
            Dietas personalizados para melhorar desempenho, composição corporal
            e recuperação. Tudo alinhado ao seu treino e rotina, com suporte
            direto do nutricionista.
          </p>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <FaHeartbeat className={styles.cardIcon} size={40} color="#001f3f" />
          <h4 className={styles.cardTitle}>Fisioterapia Preventiva</h4>
          <p className={styles.cardDesc}>
            Protocolos específicos para prevenir lesões e acelerar a
            recuperação. Ideal para quem quer treinar com segurança ou já
            enfrenta dores e limitações.
          </p>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <FaMobileAlt className={styles.cardIcon} size={40} color="#001f3f" />
          <h4 className={styles.cardTitle}>Atendimento Online</h4>
          <p className={styles.cardDesc}>
            Suporte direto com especialistas via WhatsApp, vídeo e e-mail. Tire
            dúvidas, receba ajustes e mantenha o foco com orientação
            profissional em tempo real.
          </p>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
        <div className={styles.card}>
          <FaBuilding className={styles.cardIcon} size={40} color="#001f3f" />
          <h4 className={styles.cardTitle}>Para Empresas</h4>
          <p className={styles.cardDesc}>
            Ofereça aos seus colaboradores um benefício exclusivo: plano
            integrado de saúde e performance com treino, nutrição e
            fisioterapia. Mais qualidade de vida, menos afastamentos.
          </p>
          <button className={styles.cardBtn}>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
