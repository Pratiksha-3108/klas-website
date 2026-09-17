'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AboutWhoWeAreSection() {
  const [activeParagraphs, setActiveParagraphs] = useState<number[]>([]);
  const p1Ref = useRef<HTMLSpanElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const checkHighlight = (ref: React.RefObject<HTMLElement | null>, idx: number) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75) {
          setActiveParagraphs((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
        }
      };

      checkHighlight(p1Ref, 0);
      checkHighlight(p2Ref, 1);
      checkHighlight(p3HighlightRef, 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isP1Active = activeParagraphs.includes(0);
  const isP2Active = activeParagraphs.includes(1);
  const isP3Active = activeParagraphs.includes(2);

  const p3HighlightRef = p3Ref;

  return (
    <section className="whoWeAreSection">
      <div className="container">
        <div className="grid">
          {/* Left Column */}
          <div className="leftCol">
            <h2 className="title">WHO WE ARE</h2>
            <p className="subtitle">
              Pioneers of the Indian Technology &amp; Animation Industry
            </p>
          </div>

          {/* Right Column */}
          <div className="rightCol">
            <p className="paragraph">
              <span className="darkText">
                KLAS&apos;s journey began in 1985 with Silverline Electronics, Data
                Consultancy Services &amp; Data Punch Services. Over the decades,
                Silverline grew into one of India&apos;s largest{' '}
              </span>
              <span
                ref={p1Ref}
                className={`scrollText ${isP1Active ? 'active' : ''}`}
              >
                technology companies, becoming one of the pioneers of the Indian I.T. industry.
              </span>
            </p>

            <p
              ref={p2Ref}
              className={`paragraph scrollText ${isP2Active ? 'active' : ''}`}
            >
              From 2000 onwards, KLAS expanded into Real Estate and Animation,
              laying the foundation for the group&apos;s next phase of growth. The film
              Hanuman ignited the wave of Indian animation and paved the way for
              future IPs to be born in the country.
            </p>

            <p
              ref={p3Ref}
              className={`paragraph scrollText ${isP3Active ? 'active' : ''}`}
            >
              Today, KLAS operates across Technology, Capital Markets, Real Estate
              and Animation — a diversified group built on decades of pioneering
              ventures and still expanding into new industries.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .whoWeAreSection {
          width: 100%;
          background-color: #FFFFFF;
          padding: 100px 0;
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 80px;
          align-items: start;
        }

        .leftCol {
          display: flex;
          flex-direction: column;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.15;
          color: #4F4742;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0 0 20px 0;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.45;
          color: #756A62;
          margin: 0;
          max-width: 360px;
        }

        .rightCol {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .paragraph {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 21px;
          line-height: 1.6;
          margin: 0;
        }

        .darkText {
          color: #4F4742;
          font-weight: 400;
        }

        .scrollText {
          color: #A69B95;
          font-weight: 400;
          transition: color 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .scrollText.active {
          color: #4F4742;
        }

        @media (max-width: 1024px) {
          .whoWeAreSection {
            padding: 70px 0;
          }

          .container {
            padding: 0 32px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .subtitle {
            max-width: 100%;
          }

          .paragraph {
            font-size: 19px;
          }
        }

        @media (max-width: 640px) {
          .whoWeAreSection {
            padding: 50px 0;
          }

          .container {
            padding: 0 20px;
          }

          .title {
            font-size: 30px;
          }

          .subtitle {
            font-size: 17px;
          }

          .paragraph {
            font-size: 17px;
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
}
