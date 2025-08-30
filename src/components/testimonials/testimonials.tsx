import { useState, useEffect } from "react";
import React, { useRef, useCallback } from "react";
import styles from "./testimonials.module.css";

const testimonials = [
  { author: "João", text: "Ótimo serviço, recomendo muito!" },
  { author: "Maria", text: "Equipe atenciosa e resultados reais." },
  { author: "Carlos", text: "Transformou minha rotina esportiva!" },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPaused = useRef(false);

  const goTo = useCallback((i) => setIndex(i), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );

  // Auto-advance logic
  useEffect(() => {
    if (!isPaused.current) {
      timer.current = setTimeout(next, 5000);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
      return undefined;
    };
  }, [index, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Pause on hover
  const handleMouseEnter = () => {
    isPaused.current = true;
    if (timer.current) clearTimeout(timer.current);
  };
  const handleMouseLeave = () => {
    isPaused.current = false;
    next();
  };

  return (
    <section
      className={styles.carousel}
      role="region"
      aria-label="Depoimentos de clientes"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.arrow}
        onClick={prev}
        aria-label="Depoimento anterior"
      >
        &#8592;
      </button>
      <div className={styles.slide} aria-live="polite">
        <blockquote>
          <p>{testimonials[index].text}</p>
          <footer>- {testimonials[index].author}</footer>
        </blockquote>
      </div>
      <button
        className={styles.arrow}
        onClick={next}
        aria-label="Próximo depoimento"
      >
        &#8594;
      </button>
      <div
        className={styles.dots}
        role="tablist"
        aria-label="Navegação dos depoimentos"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => goTo(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
