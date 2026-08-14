'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HomeClientsSection.module.css';

const clientLogos = [
  { id: 1, src: '/assets/client1.png', alt: 'Client 1' },
  { id: 2, src: '/assets/client2.png', alt: 'Client 2' },
  { id: 3, src: '/assets/client3.png', alt: 'Client 3' },
  { id: 4, src: '/assets/client4.png', alt: 'Client 4' },
  { id: 5, src: '/assets/client5.png', alt: 'Client 5' },
  { id: 6, src: '/assets/client6.png', alt: 'Client 6' },
  { id: 7, src: '/assets/client7.png', alt: 'Client 7' },
];

export default function HomeClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate list twice for seamless infinite scrolling marquee
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Left Title Column with fadeInUp animation */}
          <div className={`${styles.titleColumn} ${isVisible ? styles.animatedTitle : ''}`}>
            <h2 className={styles.title}>Our Clients</h2>
          </div>

          {/* Right Side Infinite Auto-Slider */}
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}>
              {duplicatedLogos.map((logo, index) => (
                <div key={`${logo.id}-${index}`} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={76}
                    className={styles.clientImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
