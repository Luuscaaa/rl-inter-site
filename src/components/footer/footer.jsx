import logo from "../../assets/logo.png";
import styles from "./footer.module.css";
import { FOOTER_ARIA, HEADER_MENU } from "../../constants/texts";
import { Instagram } from "lucide-react";

export default function Footer() {
  // Scroll suave para âncoras
  const handleMenuClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer className={styles.footer} aria-label={FOOTER_ARIA.footer}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="RunnerZ Logo" className={styles.logo} />
        </div>
        <div className={styles.contact}>
          <div className={styles.phone}>+55 (11) 93344-1275</div>
          <div className={styles.email}>
            rlassessoriainterdisciplinar@gmail.com
          </div>
        </div>
        <nav className={styles.menu} aria-label={FOOTER_ARIA.menu}>
          <div className={styles.linksColumn}>
            {HEADER_MENU.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={(e) => handleMenuClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className={styles.socialIcons}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram color="#fff" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
