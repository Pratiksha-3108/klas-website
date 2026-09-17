'use client';

import React, { useState, useEffect, useRef } from 'react';

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
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="mainGrid">
          {/* Left Title Column with fadeInUp animation */}
          <div className={`titleColumn ${isVisible ? 'animatedTitle' : ''}`}>
            <h2 className="title">Results</h2>
            <p className="subtitle">Milestones We’re Proud Of</p>
          </div>

          {/* Right Stats 2x2 Grid */}
          <div className="statsGrid">
            {statsData.map((stat) => (
              <div key={stat.id} className="statCard">
                <div className="number">
                  <CountUpNumber
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <h3 className="label">{stat.label}</h3>
                <p className="description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 80px 0 70px;
          background-color: #FFFFFF;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mainGrid {
          display: grid;
          grid-template-columns: 1fr 2.2fr;
          gap: 80px;
          align-items: start;
        }

        .titleColumn {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .animatedTitle {
          opacity: 1;
          transform: translateY(0);
        }

        .title {
          font-family: var(--font-sans);
          font-size: 44px;
          font-weight: 600;
          color: #3B3432;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        .subtitle {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 1.4;
          color: #6E6763;
          font-weight: 400;
        }

        /* Stats 2x2 Grid */
        .statsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 72px 56px;
        }

        .statCard {
          display: flex;
          flex-direction: column;
        }

        .number {
          font-family: var(--font-sans);
          font-size: 52px;
          font-weight: 700;
          color: #3B3432;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 8px;
        }

        .label {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 500;
          color: #3B3432;
          margin-bottom: 6px;
          line-height: 1.35;
        }

        .description {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.55;
          color: #6E6763;
          max-width: 290px;
        }

        @media (max-width: 1024px) {
          .mainGrid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .titleColumn {
            padding-left: 0;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 60px 0 80px;
          }

          .title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 16px;
          }

          .statsGrid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .number {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}
