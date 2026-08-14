import React from 'react';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>GET IN TOUCH</div>
        <h1 className={styles.title}>Connect With KLAS Realty</h1>
        <p className={styles.subtitle}>
          Interested in Joint Venture developments or learning more about our asset portfolio? Send us a message or contact our team directly.
        </p>
      </div>
    </section>
  );
}
