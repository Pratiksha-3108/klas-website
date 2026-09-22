'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="hero">
      <div className="heroImageWrapper">
        <Image
          src="/assets/about/about-hero.png"
          alt="KLAS About Hero"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 80px);
          height: 680px;
          margin-top: 64px;
          overflow: hidden;
          background-color: #FFFFFF;
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

        @media (max-width: 1024px) {
          .hero {
            height: 560px;
            min-height: 60vh;
            margin-top: 64px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 480px;
            min-height: 50vh;
          }
        }
      `}</style>
    </section>
  );
}
