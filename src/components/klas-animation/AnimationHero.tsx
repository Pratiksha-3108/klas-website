'use client';

import React from 'react';

export default function AnimationHero() {
  return (
    <section className="hero">
      <div className="videoWrapper">
        <video
          className="bgVideo"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/klas-animation/bgvidanimation.mp4" type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>

      <div className="container">
        <div className="content">
          <h1 className="title">
            <span className="line">INDIA'S BELOVED CLASSIC IS</span>
            <span className="line delayLine">RETURNING SOON</span>
          </h1>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Joan&display=swap');

        .hero {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 80px);
          height: 680px;
          margin-top: 80px;
          background-color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .videoWrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .bgVideo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 380px;
        }

        .title {
          font-family: 'Joan', Georgia, serif;
          font-weight: 400;
          font-style: normal;
          font-size: 42px;
          line-height: 120%;
          letter-spacing: 0.06em; /* 6% */
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: center;
        }

        .line {
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delayLine {
          animation-delay: 0.25s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .hero {
            height: 560px;
            margin-top: 70px;
          }

          .content {
            padding-top: 280px;
          }

          .title {
            font-size: 44px;
            gap: 12px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 460px;
          }

          .content {
            padding-top: 220px;
          }

          .title {
            font-size: 28px;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
