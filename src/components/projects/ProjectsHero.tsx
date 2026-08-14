import React from 'react';
import styles from './ProjectsHero.module.css';

export default function ProjectsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>Landmark Developments Across India</h1>
        <p className={styles.subtitle}>
          Explore our strategic developments encompassing residential enclaves, IT towers, commercial office spaces, and industrial warehousing parks.
        </p>
      </div>
    </section>
  );
}
