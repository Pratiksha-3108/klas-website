'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function FamilyAboutSection() {
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
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        <div className="grid">
          {/* Left Title Column */}
          <div className={`titleCol ${isVisible ? 'animatedIn' : ''}`}>
            <h2 className="title">ABOUT US</h2>
          </div>

          {/* Right Description Column with exact line breaks & right alignment */}
          <div className={`descCol ${isVisible ? 'animatedInDelay' : ''}`}>
            <p className="description">
              <strong className="darkText">KLAS Family Office</strong>{' '}
              <span className="brownText">is the private investment arm of the</span>
              <br />
              <span className="brownText">family behind</span>{' '}
              <strong className="darkText">Silverline, one of India’s pioneering Tech</strong>
              <br />
              <strong className="darkText">companies.</strong>{' '}
              <span className="brownText">Our investments are anchored in stable and</span>
              <br />
              <span className="brownText">sustainable asset classes, guided by a</span>
              <br />
              <strong className="darkText">long-term commitment to growth.</strong>
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
          grid-template-columns: 240px 1fr;
          gap: 48px;
          align-items: flex-start;
        }

        .titleCol {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 32px;
          font-weight: 800;
          color: #2b2725;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.2;
        }

        .descCol {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
          display: flex;
          justify-content: flex-end;
        }

        .description {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 30px;
          line-height: 1.5;
          margin: 0;
          letter-spacing: -0.01em;
          text-align: right;
          max-width: 960px;
        }

        .darkText {
          color: #4A423D;
          font-weight: 600;
        }

        .brownText {
          color: #9A8A80;
          font-weight: 400;
        }

        /* Fade In Up Reveal Animations */
        .titleCol.animatedIn,
        .descCol.animatedInDelay {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1200px) {
          .description {
            font-size: 24px;
            line-height: 1.5;
          }
        }

        @media (max-width: 992px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .descCol {
            justify-content: flex-start;
          }

          .description {
            text-align: left;
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
