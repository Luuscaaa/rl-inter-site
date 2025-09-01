import styles from "./hero.module.css";
import {
  HERO_TITLE,
  HERO_TITLE2,
  HERO_SUBTITLE,
  HERO_BTN_SAIBA_MAIS,
  HERO_BTN_WHATSAPP,
} from "../../constants/texts";

function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          {HERO_TITLE}
          <br />
          <span className={styles.title2}>{HERO_TITLE2}</span>
        </h1>
        <h4 className={styles.subtitle}>{HERO_SUBTITLE}</h4>
      </div>
      <div className={styles.boxBtn}>
        <a className={styles.btnPrimary} href="">
          {HERO_BTN_SAIBA_MAIS}
        </a>
        <a
          className={styles.btnWhatsapp}
          href="https://wa.me/+5511933441275"
          target="_blank"
          rel="noopener noreferrer"
        >
          {HERO_BTN_WHATSAPP}
        </a>
      </div>
    </div>
  );
}

export default Hero;
