'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="imageWrapper">
          <Image
            src="/assets/klas-realty/hero.png"
            alt="KLAS Realty Landmark Projects Banner"
            width={1760}
            height={1033}
            className="heroImage"
            priority
          />
        </div>
        <div className="textGrid">
          <div className="titleColumn">
            <h1 className="title">
              <span className="animatedLine">Transforming Land Into</span>
              <span className="animatedLine delayLine">Landmark Projects</span>
            </h1>
          </div>
          <div className="descColumn">
            <p className="description">
              Established in 2000, KLAS holds a robust portfolio of high-value assets across
              India which are currently under Joint Venture Development of Residential &
              Commercial projects – totalling 1+ million sq. ft. of planned built-up area.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding-top: 80px; /* Flush directly under 80px fixed header */
          padding-bottom: 40px;
          background-color: var(--background);
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .imageWrapper {
          width: 97%;
          margin: 0 auto;
          aspect-ratio: 16 / 10;
          max-height: 650px;
          position: relative;
          overflow: hidden;
          border-radius: 0;
          box-shadow: none;
        }

        .heroImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 80% center;
          animation: zoomOut 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes zoomOut {
          from {
            transform: scale(1.15);
          }
          to {
            transform: scale(1);
          }
        }

        .textGrid {
          width: 97%;
          margin: 72px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .titleColumn {
          display: flex;
          flex-direction: column;
          padding-left: 0;
        }

        .title {
          font-family: var(--font-sans);
          font-size: 42px;
          font-weight: 600;
          line-height: 1.18;
          color: #3B3432;
          letter-spacing: 0.06em; /* 6% letter spacing */
          display: flex;
          flex-direction: column;
        }

        .animatedLine {
          display: block;
          opacity: 0;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          will-change: opacity, transform;
        }

        .delayLine {
          animation-delay: 0.45s;
        }

        .descColumn {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding-top: 130px;
        }

        .description {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.65;
          color: #6E6763;
          max-width: 550px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 24px;
          }

          .titleColumn {
            padding-left: 0;
          }

          .title {
            font-size: 38px;
          }
          
          .description {
            font-size: 15px;
          }

          .textGrid {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 64px;
            padding-bottom: 40px;
          }
          
          .imageWrapper {
            aspect-ratio: 16 / 9;
          }
          
          .textGrid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 32px;
          }
          
          .title {
            font-size: 36px;
          }
          
          .descColumn {
            padding-top: 0;
          }
          
          .description {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .imageWrapper {
            aspect-ratio: 4 / 3;
          }
          
          .title {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
