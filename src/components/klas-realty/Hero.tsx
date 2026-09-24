'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="imageWrapper">
          <Image
            src="/assets/klas-realty/hero1.png"
            alt="KLAS Realty Landmark Projects Banner"
            fill
            priority
            sizes="100vw"
            className="heroImage"
          />
        </div>
        <div className="textGrid">
          <div className="titleColumn">
            <h1 className="title">
              <div className="lineMask line1">
                <span className="lineText">Transforming Land Into</span>
              </div>
              <div className="lineMask line2">
                <span className="lineText">Landmark Projects</span>
              </div>
            </h1>
          </div>
          <div className="descColumn">
            <p className="description">
              Established in 2000, KLAS holds a robust portfolio of high-value assets across
              India which are currently under Joint Venture Development of Residential &amp;
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
          width: 97%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.2;
          min-height: 560px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 0;
          box-shadow: none;
        }

        :global(.heroImage) {
          object-fit: cover !important;
          object-position: center center !important;
          transform-origin: center center;
          animation: heroZoomOut 5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform;
        }

        @keyframes heroZoomOut {
          0% {
            transform: scale(1.14);
          }
          100% {
            transform: scale(1.0);
          }
        }

        .textGrid {
          width: 100%;
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
          color: #4F4742;
          letter-spacing: 0.06em; /* 6% letter spacing */
          display: flex;
          flex-direction: column;
        }

        .lineMask {
          display: block;
          overflow: hidden;
          padding-bottom: 4px;
        }

        .lineText {
          display: inline-block;
          white-space: nowrap;
          opacity: 0;
          clip-path: inset(0 100% 0 0);
          animation: sweepLineFromLeft 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: clip-path, opacity;
        }

        .line1 .lineText {
          animation-delay: 0.15s;
        }

        .line2 .lineText {
          animation-delay: 1.80s;
        }

        @keyframes sweepLineFromLeft {
          0% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0% 0 0);
          }
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
          .imageWrapper {
            width: 100%;
            min-height: 420px;
          }

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
            min-height: 280px;
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
          .title {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
