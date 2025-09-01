import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import {
  HEADER_LOGO_ALT,
  HEADER_MENU,
  HEADER_WHATSAPP,
} from "../../constants/texts";

function Header() {
  const [open, setOpen] = useState(false);

  // Função para scroll suave
  const handleMenuClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt={HEADER_LOGO_ALT} className={styles.logo} />
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
        {HEADER_MENU.map((item) =>
          item.href.startsWith("#") ? (
            <a
              key={item.href}
              href={item.href}
              className={styles.menuItem}
              onClick={(e) => handleMenuClick(e, item.href)}
            >
              {item.label}
            </a>
          ) : (
            <a key={item.href} href={item.href} className={styles.menuItem}>
              {item.label}
            </a>
          )
        )}
        <a
          href={HEADER_WHATSAPP.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          {HEADER_WHATSAPP.label}
        </a>
        <img src={logo} alt={HEADER_LOGO_ALT} className={styles.logoMenu} />
      </nav>
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      )}
    </div>
  );
}

export default Header;
