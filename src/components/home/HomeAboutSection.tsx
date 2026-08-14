import React from 'react';
import Link from 'next/link';
import styles from './HomeAboutSection.module.css';

export default function HomeAboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badge}>ABOUT US</div>
        <h2 className={styles.title}>
          Transforming Land Into High-Value Landmark Developments
        </h2>
        <p className={styles.description}>
          KLAS Realty is a premier developer of high-value assets across India. Driven by excellence and architectural sophistication, we focus on joint venture developments across residential, commercial, retail, IT, and warehousing properties.
        </p>
        <div className={styles.actionWrapper}>
          <Link href="/about" className={styles.learnMoreBtn}>
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
