'use client';

import React from 'react';

export default function ContactHero() {
  return (
    <section className="contactHero">
      {/* Decorative background accents */}
      <div className="cornerSquare" />
      <div className="cornerCircle" />

      <div className="container">
        <h1 className="title">GET IN TOUCH</h1>
      </div>

      <style jsx>{`
        .contactHero {
          position: relative;
          padding-top: 140px;
          padding-bottom: 70px;
          background-color: #0B2B26;
          overflow: hidden;
          text-align: center;
        }

        /* Top-left rotated translucent square */
        .cornerSquare {
          position: absolute;
          top: 15px;
          left: 20px;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.04);
          transform: rotate(24deg);
          pointer-events: none;
          border-radius: 4px;
        }

        /* Top-right translucent ring */
        .cornerCircle {
          position: absolute;
          top: 15px;
          right: 30px;
          width: 90px;
          height: 90px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .title {
          font-family: var(--font-inter), 'Montserrat', sans-serif;
          font-size: 52px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .contactHero {
            padding-top: 110px;
            padding-bottom: 50px;
          }

          .title {
            font-size: 34px;
          }

          .cornerSquare {
            width: 50px;
            height: 50px;
            top: 10px;
            left: 10px;
          }

          .cornerCircle {
            width: 60px;
            height: 60px;
            top: 10px;
            right: 15px;
          }
        }
      `}</style>
    </section>
  );
}

