'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './HomeResultsSection.module.css';

interface StatItem {
  id: number;
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    id: 1,
    target: 25,
    suffix: ' +',
    label: 'Years of Experience',
    description: 'Building trusted developments for over two decades.'
  },
  {
    id: 2,
    target: 330,
    suffix: 'K +',
    label: 'Sq. Ft. Delivered',
    description: 'Successfully delivering premium spaces for lasting value.'
  },
  {
    id: 3,
    target: 1,
    decimals: 1,
    suffix: 'M +',
    label: 'Sq. Ft. in Pipeline',
    description: 'A strong pipeline of upcoming developments.'
  },
  {
    id: 4,
    target: 2000,
    suffix: '',
    label: 'Established',
    description: 'Founded in 2000, creating trusted developments.'
  }
];

function CountUpNumber({
  target,
  decimals = 0,
  suffix,
  isVisible
}: {
  target: number;
  decimals?: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let animationFrameId: number;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const currentProgress = 1 - Math.pow(1 - progress, 4);
      setCount(currentProgress * target);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, isVisible]);

  let formattedCount: string;
  if (count <= 0) {
    formattedCount = '0';
  } else if (count >= target) {
    formattedCount = target.toString();
  } else if (decimals > 0) {
    formattedCount = count.toFixed(decimals);
  } else {
    formattedCount = Math.floor(count).toString();
  }

  return (
    <span>
      {formattedCount}{suffix}
    </span>
  );
}

export default function HomeResultsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Left Title Column with fadeInUp animation */}
          <div className={`${styles.titleColumn} ${isVisible ? styles.animatedTitle : ''}`}>
            <h2 className={styles.title}>Results</h2>
            <p className={styles.subtitle}>Milestones We’re Proud Of</p>
          </div>

          {/* Right Stats 2x2 Grid */}
          <div className={styles.statsGrid}>
            {statsData.map((stat) => (
              <div key={stat.id} className={styles.statCard}>
                <div className={styles.number}>
                  <CountUpNumber
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <h3 className={styles.label}>{stat.label}</h3>
                <p className={styles.description}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
