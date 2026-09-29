'use client';

import React, { useState, useEffect, useRef } from 'react';

const LINES = [
  "Each investment is guided by",
  "disciplined research, informed market",
  "perspective, and a focus on",
  "sustainable long-term performance,",
  "which aligns with our goals of long-",
  "term growth and stability."
];

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

export default function FamilyInvestmentApproachSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when top of section enters at 85% of viewport
      // Complete highlight when bottom of section reaches 30% of viewport
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalWords = LINES.reduce((acc, line) => acc + line.split(' ').length, 0);

  return (
    <section
      id="investment-approach"
      ref={sectionRef}
      className="section"
    >
      <div className="container">
        <div className="grid">
          {/* Left Title Column */}
          <div className={`titleCol ${isVisible ? 'animatedIn' : ''}`}>
            <h2 className="title">
              INVESTMENT
              <br />
              APPROACH
            </h2>
          </div>

          {/* Center Vertical Divider Column */}
          <div className={`dividerCol ${isVisible ? 'animatedInDelay' : ''}`}>
            <div className="verticalLineWrapper">
              <span className="topDot"></span>
              <span className="verticalLine"></span>
              <span className="bottomDot"></span>
            </div>
          </div>

          {/* Right Description Column */}
          <div className="descCol">
            <p className="description">
              {LINES.map((line, lineIdx) => {
                const startIndex = LINES.slice(0, lineIdx).reduce((acc, l) => acc + l.split(' ').length, 0);
                return (
                  <React.Fragment key={lineIdx}>
                    <ScrollWords
                      text={line}
                      sectionProgress={scrollProgress}
                      startIndex={startIndex}
                      totalWords={totalWords}
                    />
                    {lineIdx < LINES.length - 1 && <br />}
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .grid {
          display: grid;
          grid-template-columns: 360px 80px 1fr;
          gap: 0;
          align-items: flex-start;
        }

        .titleCol {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding-top: 0;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          letter-spacing: 0.04em;
          line-height: 1.2;
          text-transform: uppercase;
          margin: 0;
        }

        .dividerCol {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 110px;
        }

        .verticalLineWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 280px;
          position: relative;
        }

        .topDot,
        .bottomDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #4A423D;
          flex-shrink: 0;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
        }

        .verticalLine {
          flex-grow: 1;
          width: 1.5px;
          background-color: #4A423D;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }

        .descCol {
          padding-top: 110px;
          padding-left: 56px;
        }

        .description {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 34px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 0.05em;
          word-spacing: 0.12em;
          text-align: left;
          margin: 0;
        }

        .brownBoldText {
          color: #756A62;
          font-weight: 700;
        }

        .scrollWord {
          display: inline;
        }

        /* Animations when scrolled into view */
        .animatedIn {
          opacity: 1;
          transform: translateY(0);
        }

        .animatedInDelay .topDot,
        .animatedInDelay .bottomDot {
          opacity: 1;
          transform: scale(1);
        }

        .animatedInDelay .verticalLine {
          transform: scaleY(1);
        }

        @media (max-width: 1024px) {
          .section {
            padding: 80px 0 0;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .dividerCol {
            display: none;
          }

          .descCol {
            padding-top: 0;
            padding-left: 0;
          }

          .title {
            font-size: 30px;
          }

          .description {
            font-size: 22px;
            line-height: 1.5;
          }

          .description br {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 0;
          }

          .container {
            padding: 0 24px;
          }

          .title {
            font-size: 24px;
          }

          .description {
            font-size: 18px;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}
