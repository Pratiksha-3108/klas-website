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
          margin-top: 80px;
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
          object-position: top center;
        }

        @media (max-width: 1024px) {
          .hero {
            height: 560px;
            min-height: 60vh;
            margin-top: 80px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 380px;
            min-height: 340px;
            margin-top: 80px;
          }

          :global(.heroImage) {
            object-position: top center !important;
          }
        }
      `}</style>
    </section>
  );
}
