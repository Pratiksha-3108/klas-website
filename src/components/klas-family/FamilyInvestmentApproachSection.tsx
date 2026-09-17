'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isHovered?: boolean;
}

function ScrollWord({ word, index, total, progress, isHovered }: ScrollWordProps) {
  const start = index / total;
  const end = Math.min((index + 0.8) / total, 1);

  const animatedColor = useTransform(progress, [start, end], ['#9A8A80', '#756A62']);
  const animatedFontWeight = useTransform(progress, [start, end], [400, 700]);

  return (
    <motion.span
      style={{
        color: isHovered ? '#756A62' : animatedColor,
        fontWeight: isHovered ? 700 : animatedFontWeight,
      }}
      className="scrollWord"
    >
      {word}{' '}
    </motion.span>
  );
}

export default function FamilyInvestmentApproachSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.35'],
  });

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

  const totalWords = 28;

  return (
    <section
      id="investment-approach"
      ref={sectionRef}
      className="section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              {['Each', 'investment', 'is', 'guided', 'by'].map((w, i) => (
                <ScrollWord key={`l1-${i}`} word={w} index={0 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
              <br />
              {['disciplined', 'research,', 'informed', 'market'].map((w, i) => (
                <ScrollWord key={`l2-${i}`} word={w} index={5 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
              <br />
              {['perspective,', 'and', 'a', 'focus', 'on'].map((w, i) => (
                <ScrollWord key={`l3-${i}`} word={w} index={9 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
              <br />
              {['sustainable', 'long-term', 'performance,'].map((w, i) => (
                <ScrollWord key={`l4-${i}`} word={w} index={14 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
              <br />
              {['which', 'aligns', 'with', 'our', 'goals', 'of', 'long-'].map((w, i) => (
                <ScrollWord key={`l5-${i}`} word={w} index={17 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
              <br />
              {['term', 'growth', 'and', 'stability.'].map((w, i) => (
                <ScrollWord key={`l6-${i}`} word={w} index={24 + i} total={totalWords} progress={scrollYProgress} isHovered={isHovered} />
              ))}
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
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
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
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
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
