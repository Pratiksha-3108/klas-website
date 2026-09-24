'use client';

import React, { useState, useEffect, useRef } from 'react';

interface FocusAreaItem {
  id: string;
  title: string;
}

const focusAreasData: FocusAreaItem[] = [
  { id: '01', title: 'Government Securities' },
  { id: '02', title: 'Public & Private Equities' },
  { id: '03', title: 'Alternate Investment Funds' },
  { id: '04', title: 'REITs & INVITs' },
  { id: '05', title: 'Real Assets' },
  { id: '06', title: 'Liquid Funds' },
];

export default function FamilyFocusAreaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="focus-area" ref={sectionRef} className="section">
      <div className="container">
        {/* Header */}
        <div className={`header ${isVisible ? 'animatedIn' : ''}`}>
          <h2 className="title">Focus Areas</h2>
          <p className="subtitle">
            We maintain a diversified portfolio, allocating capital across
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid">
          {focusAreasData.map((item, index) => (
            <div
              key={item.id}
              className={`gridItem ${isVisible ? 'animatedInCard' : ''}`}
              style={{ transitionDelay: `${0.06 + index * 0.05}s` }}
            >
              <div className="numberWrapper">
                <span className="number">{item.id}</span>
              </div>
              <h3 className="itemTitle">{item.title}</h3>
            </div>
          ))}
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

        .header {
          text-align: center;
          margin-bottom: 72px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1), transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 16px 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 20px;
          font-weight: 400;
          color: #8C827A;
          margin: 0 auto;
          max-width: 600px;
          line-height: 1.5;
        }

        /* 3 Column Grid with subtle internal borders */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
        }

        .gridItem {
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-right: 1px solid rgba(74, 66, 61, 0.12);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1), transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease;
        }

        .gridItem:nth-child(-n+3) {
          border-bottom: 1px solid rgba(74, 66, 61, 0.12);
        }

        .gridItem:nth-child(3n) {
          border-right: none;
        }

        .gridItem:hover {
          background-color: #FAF7F4;
        }

        .numberWrapper {
          margin-bottom: 28px;
        }

        .number {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 24px;
          font-weight: 500;
          color: #9A8A80;
          padding-bottom: 6px;
          border-bottom: 1.5px solid #9A8A80;
          display: inline-block;
          letter-spacing: 0.05em;
        }

        .itemTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 21px;
          font-weight: 600;
          color: #4A423D;
          margin: 0;
          line-height: 1.35;
          max-width: 280px;
        }

        /* Reveal Animations */
        .animatedIn {
          opacity: 1;
          transform: translateY(0);
        }

        .animatedInCard {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .section {
            padding: 80px 0 0;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gridItem {
            border-right: 1px solid rgba(74, 66, 61, 0.12);
            padding: 40px 32px;
          }

          .gridItem:nth-child(3n) {
            border-right: 1px solid rgba(74, 66, 61, 0.12);
          }

          .gridItem:nth-child(2n) {
            border-right: none;
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
            font-size: 28px;
          }

          .subtitle {
            font-size: 16px;
          }

          .grid {
            grid-template-columns: 1fr;
            border-top: none;
          }

          .gridItem {
            border-right: none !important;
            padding: 32px 16px;
          }
        }
      `}</style>
    </section>
  );
}
