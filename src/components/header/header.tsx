import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo do site" className={styles.logo} />
      {!open && (
        <button className={styles.menuButton} onClick={() => setOpen(true)}>
          &#9776;
        </button>
      )}
      <nav className={open ? styles.sidebarOpen : styles.sidebar}>
        {open && (
          <button className={styles.closeButton} onClick={() => setOpen(false)}>
            &times;
          </button>
        )}
        <a href="/" className={styles.menuItem}>
          Início
        </a>
        <a href="/projetos" className={styles.menuItem}>
          Projetos
        </a>
        <a href="/servicos" className={styles.menuItem}>
          Serviços
        </a>
        <a href="/sobre" className={styles.menuItem}>
          Sobre
        </a>
        <a href="/contato" className={styles.menuItem}>
          Contato
        </a>
        <a
          href="https://wa.me/SEUNUMEROAQUI"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          WhatsApp
        </a>
      </nav>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
    </div>
  );
}

export default Header;
