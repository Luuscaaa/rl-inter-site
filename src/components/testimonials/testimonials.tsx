import { useState, useEffect } from "react";
import React, { useRef, useCallback } from "react";
import styles from "./testimonials.module.css";
import {
  TESTIMONIALS_LIST,
  TESTIMONIALS_ARIA,
  TESTIMONIALS_TITLE,
} from "../../constants/texts";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPaused = useRef(false);

  const goTo = useCallback((i) => setIndex(i), []);
  const prev = useCallback(
    () =>
      setIndex(
        (i) => (i - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length
      ),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS_LIST.length),
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
    <div className={styles.container}>
      <h1 className={styles.title}>{TESTIMONIALS_TITLE}</h1>
      <section
        className={styles.carousel}
        role="region"
        aria-label={TESTIMONIALS_ARIA.section}
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={styles.arrow}
          onClick={prev}
          aria-label={TESTIMONIALS_ARIA.prev}
        >
          &#8592;
        </button>
        <div className={styles.slide} aria-live="polite">
          <blockquote>
            <p className={styles.text}>{TESTIMONIALS_LIST[index].text}</p>
            <footer className={styles.author}>
              - {TESTIMONIALS_LIST[index].author}
            </footer>
          </blockquote>
        </div>
        <button
          className={styles.arrow}
          onClick={next}
          aria-label={TESTIMONIALS_ARIA.next}
        >
          &#8594;
        </button>
        <div
          className={styles.dots}
          role="tablist"
          aria-label={TESTIMONIALS_ARIA.dots}
        >
          {TESTIMONIALS_LIST.map((_, i) => (
            <button
              key={i}
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => goTo(i)}
              aria-label={TESTIMONIALS_ARIA.dot(i)}
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              role="tab"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
