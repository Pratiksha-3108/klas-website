'use client';

import React from 'react';
import Image from 'next/image';

export default function FamilyHero() {
  return (
    <section className="hero">
      <div className="imageWrapper">
        <Image
          src="/assets/klas-family/familyhero.png"
          alt="KLAS Family Office Background"
          fill
          priority
          sizes="100vw"
          className="bgImage"
        />
        <div className="overlay" />
      </div>

      <div className="container">
        <div className="content">
          <h1 className="title">KLAS FAMILY OFFICE</h1>
          <p className="subtitle">Capital Stewarded for Generations</p>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 80px);
          height: 680px;
          margin-top: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .imageWrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bgImage {
          object-fit: cover;
          object-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(40, 32, 25, 0.18);
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
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .title {
          font-family: var(--font-montserrat), 'Montserrat', sans-serif !important;
          font-size: 56px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 16px 0;
          line-height: 1.15;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: 0.02em;
          margin: 0;
          line-height: 1.4;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeIn {
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
            min-height: 60vh;
            margin-top: 70px;
          }

          .title {
            font-size: 40px;
            letter-spacing: 0.06em;
          }

          .subtitle {
            font-size: 20px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 480px;
            min-height: 50vh;
          }

          .title {
            font-size: 28px;
            letter-spacing: 0.04em;
            margin-bottom: 12px;
          }

          .subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
