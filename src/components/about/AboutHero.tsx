import React from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>ABOUT KLAS REALTY</div>
        <h1 className={styles.title}>25+ Years of Excellence in Joint Venture Real Estate</h1>
        <p className={styles.subtitle}>
          Established in 2000, KLAS Realty holds a robust portfolio of high-value assets across India, totaling 1+ million sq. ft. of planned built-up area under Joint Venture development.
        </p>
      </div>
    </section>
  );
}
