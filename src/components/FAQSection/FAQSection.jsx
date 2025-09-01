import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import faqData from "../../constants/faqData";

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className={styles.title}>
        Perguntas Frequentes
      </h2>
      <ul className={styles.list}>
        {faqData.map(({ id, question, answer }) => (
          <li key={id} className={styles.item}>
            <button
              className={styles.question}
              aria-expanded={openId === id}
              aria-controls={`faq-answer-${id}`}
              onClick={() => handleToggle(id)}
              id={`faq-question-${id}`}
              type="button"
            >
              <span>{question}</span>
              <span className={styles.icon} aria-hidden="true">
                {openId === id ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${id}`}
              className={styles.answer}
              role="region"
              aria-labelledby={`faq-question-${id}`}
              style={{
                maxHeight: openId === id ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div style={{ padding: openId === id ? "1rem 0" : "0 0" }}>
                {answer}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
