import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/hero.png"
            alt="KLAS Realty Landmark Projects Banner"
            width={1760}
            height={1033}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.textGrid}>
          <div className={styles.titleColumn}>
            <h1 className={styles.title}>
              <span className={styles.animatedLine}>Transforming Land Into</span>
              <span className={`${styles.animatedLine} ${styles.delayLine}`}>Landmark Projects</span>
            </h1>
          </div>
          <div className={styles.descColumn}>
            <p className={styles.description}>
              Established in 2000, KLAS holds a robust portfolio of high-value assets across 
              India which are currently under Joint Venture Development of Residential & 
              Commercial projects – totalling 1+ million sq. ft. of planned built-up area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
