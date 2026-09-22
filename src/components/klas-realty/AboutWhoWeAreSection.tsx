'use client';

import React, { useEffect, useRef, useState } from 'react';

const TEXT_1 = "technology companies, becoming one of the pioneers of the Indian I.T. industry.";
const TEXT_2 = "From 2000 onwards, KLAS expanded into Real Estate and Animation, laying the foundation for the group's next phase of growth. The film Hanuman ignited the wave of Indian animation and paved the way for future IPs to be born in the country.";
const TEXT_3 = "Today, KLAS operates across Technology, Capital Markets, Real Estate and Animation — a diversified group built on decades of pioneering ventures and still expanding into new industries.";

interface ScrollWordsProps {
  text: string;
  sectionProgress: number;
  startIndex: number;
  totalWords: number;
}

function ScrollWords({ text, sectionProgress, startIndex, totalWords }: ScrollWordsProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, idx) => {
        const globalWordIdx = startIndex + idx;
        const fraction = globalWordIdx / Math.max(totalWords - 1, 1);

        // Window size determines how gradually each word transitions
        const windowSize = 0.22;
        const wordStart = fraction * (1 - windowSize);

        const rawProgress = (sectionProgress - wordStart) / windowSize;
        const p = Math.min(Math.max(rawProgress, 0), 1);

        // Cubic easing for silky smooth visual feel
        const easedP = p * p * (3 - 2 * p);

        // RGB interpolation from #A69B95 (166, 155, 149) to #4F4742 (79, 71, 66)
        const r = Math.round(166 - easedP * (166 - 79));
        const g = Math.round(155 - easedP * (155 - 71));
        const b = Math.round(149 - easedP * (149 - 66));

        const fontWeight = Math.round(400 + easedP * 300); // 400 -> 700 Bold
        const opacity = 0.75 + easedP * 0.25;

        return (
          <span
            key={idx}
            style={{
              color: `rgb(${r}, ${g}, ${b})`,
              fontWeight: fontWeight,
              opacity: opacity,
              transition: 'color 0.1s ease-out, opacity 0.1s ease-out, font-weight 0.1s ease-out',
            }}
          >
            {word}{idx < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </>
  );
}

export default function AboutWhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when top of right section enters at 85% of viewport
      // Complete highlight when bottom of right section reaches 30% of viewport
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * 0.30;
      const totalDist = startPoint - endPoint + rect.height;
      const currentDist = startPoint - rect.top;

      const p = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const count1 = TEXT_1.split(' ').length;
  const count2 = TEXT_2.split(' ').length;
  const count3 = TEXT_3.split(' ').length;
  const totalWords = count1 + count2 + count3;

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
          <div className="rightCol" ref={sectionRef}>
            <p className="paragraph">
              <span className="darkText">
                KLAS&apos;s journey began in 1985 with Silverline Electronics, Data
                Consultancy Services &amp; Data Punch Services. Over the decades,
                Silverline grew into one of India&apos;s largest{' '}
              </span>
              <ScrollWords
                text={TEXT_1}
                sectionProgress={scrollProgress}
                startIndex={0}
                totalWords={totalWords}
              />
            </p>

            <p className="paragraph">
              <ScrollWords
                text={TEXT_2}
                sectionProgress={scrollProgress}
                startIndex={count1}
                totalWords={totalWords}
              />
            </p>

            <p className="paragraph">
              <ScrollWords
                text={TEXT_3}
                sectionProgress={scrollProgress}
                startIndex={count1 + count2}
                totalWords={totalWords}
              />
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
          font-weight: 700;
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

