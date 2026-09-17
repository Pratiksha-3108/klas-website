'use client';

import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="badge">OUR PORTFOLIO</div>
        <h1 className="title">Landmark Developments Across India</h1>
        <p className="subtitle">
          Explore our strategic developments encompassing residential enclaves, IT towers, commercial office spaces, and industrial warehousing parks.
        </p>
      </div>

      <style jsx>{`
        .hero {
          padding-top: 140px;
          padding-bottom: 80px;
          background-color: #FFFFFF;
          border-bottom: 1px solid rgba(197, 168, 128, 0.15);
          text-align: center;
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .badge {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .title {
          font-size: 48px;
          font-family: var(--font-serif);
          color: var(--primary);
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: #55504c;
          font-family: var(--font-sans);
          max-width: 760px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 110px;
            padding-bottom: 60px;
          }

          .title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
