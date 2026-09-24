'use client';

import React from 'react';
import Image from 'next/image';

function AnimatedValue({
  target,
  duration = 2000,
  suffix = '',
  hasSup = false,
  sup = '',
  isDecimal = false,
  isVisible = false,
}: {
  target: number;
  duration?: number;
  suffix?: string;
  hasSup?: boolean;
  sup?: string;
  isDecimal?: boolean;
  isVisible: boolean;
}) {
  const initialValue = target <= 1 ? target : 1;
  const [count, setCount] = React.useState<number>(initialValue);

  React.useEffect(() => {
    if (!isVisible || target <= 1) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth ease-out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      if (isDecimal) {
        const val = parseFloat((1 + easeOutProgress * (target - 1)).toFixed(1));
        setCount(val);
      } else {
        const currentCount = Math.floor(1 + easeOutProgress * (target - 1));
        setCount(currentCount);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration, isDecimal]);

  const displayVal = target <= 1 ? target : count;

  return (
    <>
      {displayVal}
      {hasSup ? <sup className="supText">{sup}</sup> : suffix}
    </>
  );
}

export default function AboutStatsSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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

  const stats = [
    {
      target: 1984,
      suffix: '',
      label: <span style={{ whiteSpace: 'nowrap' }}>JOURNEY DATES BACK TO</span>,
    },
    {
      target: 232,
      suffix: 'K+ Sq.Ft.',
      label: 'REAL ESTATE DELIVERED',
    },
    {
      target: 1,
      suffix: 'M+ Sq.Ft.',
      isDecimal: true,
      label: 'REAL ESTATE DELIVERED',
    },
    {
      target: 10,
      suffix: '+',
      label: (
        <>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>AWARDS WON NATIONALLY &amp;</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>GLOBALLY FOR ANIMATION</span>
        </>
      ),
    },
    {
      target: 1,
      hasSup: true,
      sup: 'st',
      label: (
        <>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>LISTED INDIA&apos;S FIRST TECH</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>COMPANY IN THE NYSE</span>
        </>
      ),
    },
    {
      target: 4,
      suffix: '',
      label: (
        <>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>EXPERIENCE ACROSS GLOBAL</span>
          <span style={{ display: 'block' }}>SE&apos;S (NYSE, LuxSE, NSE, BSE)</span>
        </>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="statsSection">
      {/* Background Image */}
      <div className="bgWrapper">
        <Image
          src="/assets/about/klas-who.png"
          alt="KLAS Building Banner"
          fill
          priority
          sizes="100vw"
          className="bgImage"
        />
        <div className="overlay" />
      </div>

      {/* Stats Overlay Container */}
      <div className="container">
        <div className="statsGrid">
          {stats.map((stat, idx) => (
            <div key={idx} className="statItem">
              <div className="value">
                <AnimatedValue
                  target={stat.target}
                  duration={2000}
                  suffix={stat.suffix}
                  hasSup={stat.hasSup}
                  sup={stat.sup}
                  isDecimal={stat.isDecimal}
                  isVisible={isVisible}
                />
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .statsSection {
          position: relative;
          width: 100%;
          min-height: 520px;
          height: 540px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .bgWrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bgImage {
          object-fit: cover;
          object-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(18, 16, 14, 0.88) 0%,
            rgba(25, 22, 19, 0.45) 50%,
            rgba(0, 0, 0, 0.05) 100%
          );
          z-index: 2;
        }

        .container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px 48px;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          align-items: flex-start;
          gap: 0;
        }

        .statItem {
          padding: 0 16px;
          border-right: 1px solid rgba(255, 255, 255, 0.28);
          display: flex;
          flex-direction: column;
          min-height: 90px;
          box-sizing: border-box;
        }

        .statItem:first-child {
          padding-left: 20px;
        }

        .statItem:last-child {
          border-right: none;
          padding-right: 0;
        }

        .value {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 10px;
          white-space: nowrap;
          letter-spacing: -0.02em;
        }

        .supText {
          font-size: 20px;
          vertical-align: super;
          font-weight: 600;
          margin-left: 1px;
        }

        .label {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          word-break: normal;
          overflow-wrap: break-word;
        }

        @media (max-width: 1366px) {
          .value {
            font-size: 32px;
          }

          .label {
            font-size: 10.5px;
          }

          .statItem {
            padding: 0 12px;
          }
        }

        @media (max-width: 1200px) {
          .value {
            font-size: 28px;
          }

          .supText {
            font-size: 16px;
          }

          .label {
            font-size: 10px;
          }

          .statItem {
            padding: 0 10px;
          }
        }

        @media (max-width: 900px) {
          .statsSection {
            height: auto;
            min-height: auto;
            padding: 60px 0 40px;
          }

          .statsGrid {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 32px;
          }

          .statItem {
            border-right: none;
            padding: 0 16px;
          }

          .statItem:first-child {
            padding-left: 16px;
          }
        }

        @media (max-width: 600px) {
          .statsSection {
            min-height: 480px;
            padding: 80px 0 40px;
          }

          .statsGrid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 24px;
            column-gap: 12px;
          }

          .container {
            padding: 0 16px 32px;
          }

          .statItem {
            padding: 0 8px;
            min-height: 80px;
          }

          .statItem:first-child {
            padding-left: 8px;
          }

          .value {
            font-size: 24px;
            margin-bottom: 6px;
          }

          .label {
            font-size: 10.5px;
            line-height: 1.35;
          }

          :global(.label span) {
            white-space: normal !important;
            display: inline !important;
          }
        }
      `}</style>
    </section>
  );
}
