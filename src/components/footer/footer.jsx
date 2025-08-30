import React from "react";
import styles from "./footer.module.css";
import {
  FOOTER_BRAND,
  FOOTER_ARIA,
  FOOTER_LINKS,
  FOOTER_SOCIAL,
} from "../../constants/texts";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label={FOOTER_ARIA.footer}>
      <div className={styles.container}>
        <div
          className={styles.brand}
          tabIndex={0}
          aria-label={FOOTER_ARIA.brand}
        >
          {FOOTER_BRAND}
        </div>
        <nav className={styles.menu} aria-label={FOOTER_ARIA.menu}>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} tabIndex={0} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.social} aria-label={FOOTER_ARIA.social}>
          {FOOTER_SOCIAL.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              tabIndex={0}
              className={styles.socialLink}
            >
              {item.label === "Instagram" ? (
                <svg
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="6" fill="#fff" />
                  <path
                    d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2Zm0 6.2A2.4 2.4 0 1 1 12 9.6a2.4 2.4 0 0 1 0 4.8Zm4.5-6.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM18 7.1a3.1 3.1 0 0 0-.8-2.2A3.1 3.1 0 0 0 15 4.1C13.7 4 10.3 4 9 4.1a3.1 3.1 0 0 0-2.2.8A3.1 3.1 0 0 0 4.1 9c-.1 1.3-.1 4.7 0 6a3.1 3.1 0 0 0 .8 2.2A3.1 3.1 0 0 0 9 19.9c1.3.1 4.7.1 6 0a3.1 3.1 0 0 0 2.2-.8 3.1 3.1 0 0 0 .8-2.2c.1-1.3.1-4.7 0-6ZM12 17.3a5.3 5.3 0 1 1 0-10.6 5.3 5.3 0 0 1 0 10.6Zm5.4-1.2a1.7 1.7 0 0 1-1.2 1.2c-1 .4-3.3.3-4.2.3s-3.2.1-4.2-.3a1.7 1.7 0 0 1-1.2-1.2c-.4-1-.3-3.3-.3-4.2s-.1-3.2.3-4.2a1.7 1.7 0 0 1 1.2-1.2c1-.4 3.3-.3 4.2-.3s3.2-.1 4.2.3a1.7 1.7 0 0 1 1.2 1.2c.4 1 .3 3.3.3 4.2s.1 3.2-.3 4.2Z"
                    fill="#333"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="6" fill="#fff" />
                  <path
                    d="M7.5 8.5A1.5 1.5 0 1 1 7.5 5.5a1.5 1.5 0 0 1 0 3Zm-1.25 2.25h2.5v8.25h-2.5V10.75ZM12.25 10.75h2.4v1.13h.03c.33-.63 1.13-1.3 2.32-1.3 2.48 0 2.94 1.63 2.94 3.75v4.37h-2.5v-3.88c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.02-1.5 2.07v3.94h-2.5V10.75Z"
                    fill="#333"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
