/// <reference types="styled-jsx" />
'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function AnimationVisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="vision-mission" className="section">
      <div className="container">
        {/* Vision Block (Top Left) */}
        <div className={`block visionBlock ${isVisible ? 'animatedIn' : ''}`}>
          <span className="blockLabel">VISION</span>
          <div className="contentWrapper visionWrapper">
            <div className="verticalLine leftLine"></div>
            <h2 className="statementText">
              To Animate India’s Mythological Universe.
            </h2>
          </div>
        </div>

        {/* Mission Block (Bottom Right) */}
        <div className={`block missionBlock ${isVisible ? 'animatedInDelay' : ''}`}>
          <div className="labelRow">
            <span className="blockLabel rightLabel">MISSION</span>
          </div>
          <div className="contentWrapper missionWrapper">
            <h2 className="statementText rightText">
              To Educate The Future Generation Of Our Rich Culture.
            </h2>
            <div className="verticalLine rightLine"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 100px;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .block {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .visionBlock {
          align-self: flex-start;
          max-width: 680px;
        }

        .missionBlock {
          align-self: flex-end;
          max-width: 680px;
        }

        .animatedIn {
          opacity: 1;
          transform: translateY(0);
        }

        .animatedInDelay {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .blockLabel {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 15px;
          font-weight: 700;
          color: #4F4742;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: inline-block;
        }

        .labelRow {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .rightLabel {
          text-align: right;
        }

        .contentWrapper {
          display: flex;
          align-items: stretch;
          gap: 28px;
        }

        .visionWrapper {
          flex-direction: row;
        }

        .missionWrapper {
          flex-direction: row;
          justify-content: flex-end;
        }

        .verticalLine {
          width: 2px;
          background-color: #756A62;
          flex-shrink: 0;
          border-radius: 1px;
        }

        .statementText {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 40px;
          font-weight: 400;
          color: #756A62;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .rightText {
          text-align: right;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 32px;
            gap: 80px;
          }

          .statementText {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 60px;
          }

          .container {
            padding: 0 24px;
            gap: 60px;
          }

          .visionBlock,
          .missionBlock {
            max-width: 100%;
          }

          .statementText {
            font-size: 24px;
          }

          .contentWrapper {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
