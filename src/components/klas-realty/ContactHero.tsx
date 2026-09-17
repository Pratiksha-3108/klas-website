'use client';

import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="hero">
      <div className="heroImageWrapper">
        <Image
          src="/assets/about/contact-hero.png"
          alt="KLAS Contact Us Hero"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="overlay" />
      </div>

      <div className="container">
        <h1 className="title">CONTACT US</h1>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 520px;
          margin-top: 64px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background-color: #0B2B26;
        }

        .heroImageWrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .heroImage {
          object-fit: cover;
          object-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0.15) 50%,
            rgba(0, 0, 0, 0.1) 100%
          );
          z-index: 2;
        }

        .container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 48px 48px 48px;
          text-align: left;
        }

        .title {
          font-family: var(--font-inter), 'Montserrat', sans-serif;
          font-size: 52px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0;
          line-height: 1;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
            height: 420px;
          }

          .container {
            padding: 0 32px 36px 32px;
          }

          .title {
            font-size: 42px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 320px;
          }

          .container {
            padding: 0 24px 28px 24px;
          }

          .title {
            font-size: 32px;
            letter-spacing: 0.03em;
          }
        }
      `}</style>
    </section>
  );
}
