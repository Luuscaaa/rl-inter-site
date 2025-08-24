import styles from "./about.module.css";
import { Facebook, Instagram, Youtube } from "lucide-react";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SOBRE NÓS</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        repellat id sapiente, nesciunt quaerat odio doloremque odit repudiandae,
        quas possimus deleniti at blanditiis sit? Cum doloremque nihil placeat.
        Expedita, dolores.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        repellat id sapiente, nesciunt quaerat odio doloremque odit repudiandae,
        quas possimus deleniti at blanditiis sit? Cum doloremque nihil placeat.
        Expedita, dolores.
      </p>
      <div className={styles.socialIcons}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook color="#000" className={styles.icon} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram color="#000" className={styles.icon} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube color="#000" className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default About;
