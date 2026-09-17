'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function FamilyVisionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="grid">
          {/* Left Column - Line Divider touching left screen edge */}
          <div className={`leftCol ${isVisible ? 'animatedInDelay' : ''}`}>
            <div className="dividerLine">
              <span className="line"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Right Column - Title & Description */}
          <div className={`rightCol ${isVisible ? 'animatedIn' : ''}`}>
            <h2 className="title">Our Vision</h2>
            <p className="description">
              To empower the future generations to pursue entrepreneurial innovation and
              impactful philanthropy, ensuring our family's values leave a permanent,
              positive imprint on global communities.
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
          grid-template-columns: 1fr 520px;
          gap: 60px;
          align-items: flex-start;
        }

        .leftCol {
          display: flex;
          align-items: center;
          padding-top: 115px;
          width: 100%;
        }

        .dividerLine {
          display: flex;
          align-items: center;
          width: calc(510px + 50vw);
          margin-left: -50vw;
          margin-right: auto;
          opacity: 0;
          transform: translateX(-120px);
          transition: opacity 3.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 4.0s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .line {
          flex-grow: 1;
          height: 1.5px;
          background-color: #4A423D;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4A423D;
          flex-shrink: 0;
        }

        .rightCol {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 24px 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .description {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 22px;
          font-weight: 400;
          color: #8C827A;
          line-height: 1.65;
          margin: 0;
        }

        /* Animations when scrolled into view */
        .rightCol.animatedIn {
          opacity: 1;
          transform: translateX(0);
        }

        .leftCol.animatedInDelay .dividerLine {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 1024px) {
          .section {
            padding: 80px 0 0;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .title {
            font-size: 32px;
          }

          .description {
            font-size: 20px;
          }

          .leftCol {
            padding-top: 0;
            order: 2;
          }

          .rightCol {
            order: 1;
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
            font-size: 26px;
            margin-bottom: 16px;
          }

          .description {
            font-size: 17px;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
