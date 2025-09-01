import styles from "./about.module.css";
import { Facebook, Instagram, Youtube } from "lucide-react";

function About() {
  return (
    <div className={styles.container} id="sobre">
      <h1 className={styles.title}>SOBRE NÓS</h1>
      <p className={styles.text}>
        Na <span className={styles.highlight}>RL Inter</span>, entendemos que
        saúde e performance caminham juntas. Surgimos para ajudar pessoas que,
        mesmo dedicadas aos treinos e à dieta, não viam os resultados que
        esperavam. Por isso, reunimos em um só lugar personal trainer,
        nutricionista e fisioterapeuta, criando um acompanhamento integrado que
        garante evolução real, de forma segura e planejada.
      </p>
      <p className={styles.text}>
        Nossa missão é levar você a alcançar o melhor do seu corpo e da sua
        mente, com estratégias personalizadas, prevenção de lesões e foco no seu
        bem-estar. Aqui, cada detalhe é pensado para que você tenha suporte de
        alto nível, transformando seu esforço em resultados que você pode ver e
        sentir.
      </p>
      <div className={styles.socialIcons}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram color="#001F3F" className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default About;
