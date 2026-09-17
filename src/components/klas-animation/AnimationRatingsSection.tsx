/// <reference types="styled-jsx" />
'use client';

import React from 'react';
import Image from 'next/image';

export default function AnimationRatingsSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
    <section ref={sectionRef} id="ratings" className="section">
      <div className="container">
        {/* Section Header */}
        <h2 className="sectionTitle">HANUMAN (2005)</h2>

        {/* Ratings Cards Grid */}
        <div className="cardsGrid">
          {/* IMDb Rating Card */}
          <div className={`ratingCard leftCard ${isVisible ? 'animatedSlide' : ''}`}>
            <div className="cardTop">
              <div className="logoWrapper">
                <Image
                  src="/assets/klas-animation/yellowlogo.png"
                  alt="IMDb Logo"
                  width={80}
                  height={80}
                  className="logoImg"
                />
              </div>
              <div className="details">
                <span className="cardLabel">IMDB</span>
                <div className="scoreRow">
                  <span className="score">8.1</span>
                  <span className="scoreScale">/10</span>
                </div>
                <div className="starsRow">
                  <span className="star active">★</span>
                  <span className="star active">★</span>
                  <span className="star active">★</span>
                  <span className="star active">★</span>
                  <span className="star inactive">★</span>
                </div>
              </div>
            </div>
            <div className="cardBottom">
              <a
                href="https://www.imdb.com/title/tt0488836/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="linkIcon"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>https://www.imdb.com/title/tt0488836/</span>
              </a>
            </div>
          </div>

          {/* Rotten Tomatoes Rating Card */}
          <div className={`ratingCard rightCard ${isVisible ? 'animatedSlide' : ''}`}>
            <div className="cardTop">
              <div className="logoWrapper">
                <Image
                  src="/assets/klas-animation/redlogo.png"
                  alt="Rotten Tomatoes Logo"
                  width={80}
                  height={80}
                  className="logoImg"
                />
              </div>
              <div className="details">
                <span className="cardLabel">ROTTEN TOMATOES</span>
                <div className="scoreRow">
                  <span className="score">78</span>
                  <span className="scoreScale">%</span>
                </div>
                <div className="dotsRow">
                  <span className="dot active">●</span>
                  <span className="dot active">●</span>
                  <span className="dot active">●</span>
                  <span className="dot active">●</span>
                  <span className="dot inactive">●</span>
                </div>
              </div>
            </div>
            <div className="cardBottom">
              <a
                href="https://www.rottentomatoes.com/m/hanuman_2005"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="linkIcon"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>https://www.rottentomatoes.com/m/hanuman_2005</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .sectionTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 36px 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .cardsGrid {
          display: flex;
          justify-content: flex-start;
          max-width: 1200px;
          gap: 180px;
        }

        .ratingCard {
          width: 500px;
          max-width: 100%;
          background: #ffffff;
          border: 1px solid #BDA475;
          border-radius: 2px;
          padding: 24px 28px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .leftCard {
          opacity: 0;
          transform: translateX(-120px);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
          will-change: transform, opacity;
        }

        .rightCard {
          opacity: 0;
          transform: translateX(120px);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
          will-change: transform, opacity;
        }

        .animatedSlide {
          opacity: 1;
          transform: translateX(0);
        }

        .ratingCard:hover {
          border-color: #9E8558;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .cardTop {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .logoWrapper {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }

        .logoImg {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .details {
          display: flex;
          flex-direction: column;
        }

        .cardLabel {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 12px;
          font-weight: 700;
          color: #756A62;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .scoreRow {
          display: flex;
          align-items: baseline;
          margin-bottom: 4px;
        }

        .score {
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-size: 42px;
          font-weight: 700;
          color: #262220;
          line-height: 1;
        }

        .scoreScale {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 20px;
          font-weight: 400;
          color: #756A62;
          margin-left: 2px;
        }

        .starsRow {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .star {
          font-size: 16px;
          line-height: 1;
        }

        .star.active {
          color: #E2AD38;
        }

        .star.inactive {
          color: #D6CCC2;
        }

        .dotsRow {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .dot {
          font-size: 14px;
          line-height: 1;
        }

        .dot.active {
          color: #E63B19;
        }

        .dot.inactive {
          color: #D6CCC2;
        }

        .cardBottom {
          margin-top: 18px;
          padding-top: 0;
        }

        .link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 13px;
          color: #A3978C;
          text-decoration: none;
          transition: color 0.2s ease;
          word-break: break-all;
        }

        .link:hover {
          color: #4A423D;
          text-decoration: underline;
        }

        .linkIcon {
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 32px;
          }

          .sectionTitle {
            font-size: 32px;
          }

          .cardsGrid {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 0;
          }

          .container {
            padding: 0 20px;
          }

          .sectionTitle {
            font-size: 26px;
            margin-bottom: 32px;
          }

          .ratingCard {
            padding: 24px 20px 20px;
          }

          .logoWrapper {
            width: 64px;
            height: 64px;
          }

          .score {
            font-size: 38px;
          }
        }
      `}</style>
    </section>
  );
}
