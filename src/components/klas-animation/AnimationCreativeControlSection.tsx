/// <reference types="styled-jsx" />
'use client';

import React from 'react';
import Image from 'next/image';

export default function AnimationCreativeControlSection() {
  return (
    <section id="creative-control" className="section">
      {/* Right Image Container spanning 100% height from top to bottom of section */}
      <div className="imageWrapper">
        <Image
          src="/assets/klas-animation/hanuman.png"
          alt="Hanuman Creative Control"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="hanumanImg"
        />
      </div>

      <div className="container">
        {/* Top Text Content */}
        <div className="headerWrapper">
          <h2 className="title">FULL CREATIVE CONTROL</h2>
          <p className="subtitle">
            Translating ideas into emotional narratives, from the first concept to the final cut.
          </p>
        </div>

        {/* Main Content Area with Cards */}
        <div className="contentGrid">
          {/* Left Cards Block */}
          <div className="cardsContainer">
            {/* Card 1: Preproduction */}
            <div className="card">
              <div className="iconWrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="12" width="4" height="9" rx="1" />
                  <rect x="10" y="6" width="4" height="15" rx="1" />
                  <rect x="17" y="3" width="4" height="18" rx="1" />
                </svg>
              </div>
              <h3 className="cardTitle">Preproduction</h3>
              <div className="cardTextGroup">
                <p className="cardText">
                  Concept, Narrative Architecture, Storyboarding and Previsualisation.
                </p>
                <p className="cardText subText">
                  We architect the entire cinematic experience.
                </p>
              </div>
            </div>

            {/* Card 2: Production */}
            <div className="card">
              <div className="iconWrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11h16a2 2 0 0 1 2 2v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a2 2 0 0 1 2-2z" />
                  <path d="M4 11V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
                  <path d="M6 18v2M18 18v2" />
                </svg>
              </div>
              <h3 className="cardTitle">Production</h3>
              <div className="cardTextGroup">
                <p className="cardText">
                  Modelling, Lighting, Animation, Simulation and Rendering.
                </p>
                <p className="cardText subText">
                  Precision choreography to seamlessly merge with visualisation.
                </p>
              </div>
            </div>

            {/* Card 3: Post-Production */}
            <div className="card">
              <div className="iconWrapper">
                <Image
                  src="/assets/klas-animation/icon3.png"
                  alt="Post-Production Icon"
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="cardTitle">Post-Production</h3>
              <div className="cardTextGroup">
                <p className="cardText">
                  Editing and Compositing.
                </p>
                <p className="cardText subText">
                  Editing, Sound Design and Final Cinematic Polish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 90px 0 90px;
          background-color: #F5F0EC;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 2;
        }

        .headerWrapper {
          max-width: 720px;
          margin-top: -24px;
          margin-bottom: 36px;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          letter-spacing: -0.01em;
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 22px;
          font-weight: 400;
          color: #756A62 !important;
          line-height: 1.45;
          margin: 0;
        }

        .contentGrid {
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .cardsContainer {
          width: 68%;
          max-width: 900px;
          background: #ffffff;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.03);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          z-index: 2;
        }

        .card {
          padding: 36px 28px 40px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #EFEAE5;
        }

        .card:last-child {
          border-right: none;
        }

        .iconWrapper {
          color: #4A423D;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          height: 28px;
        }

        .cardTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 17px;
          font-weight: 700;
          color: #3F3834;
          margin: 0 0 20px 0;
        }

        .cardTextGroup {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cardText {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 12px;
          line-height: 1.6;
          color: #857C74;
          margin: 0;
          font-weight: 500;
        }

        .subText {
          color: #857C74;
        }

        .imageWrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 55%;
          max-width: 850px;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hanumanImg {
          object-fit: cover !important;
          object-position: right center !important;
        }

        @media (max-width: 1200px) {
          .cardsContainer {
            width: 75%;
          }
          .imageWrapper {
            width: 52%;
          }
        }

        @media (max-width: 1024px) {
          .section {
            padding: 40px 0 40px;
          }

          .container {
            padding: 0 32px;
          }

          .title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 18px;
          }

          .contentGrid {
            flex-direction: column-reverse;
            align-items: stretch;
          }

          .cardsContainer {
            width: 100%;
            max-width: 100%;
          }

          .imageWrapper {
            position: relative;
            top: auto;
            bottom: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            height: 350px;
            z-index: 1;
          }
        }

        @media (max-width: 768px) {
          .cardsContainer {
            grid-template-columns: 1fr;
          }

          .card {
            border-right: none;
            border-bottom: 1px solid #EFEAE5;
            padding: 28px 24px;
          }

          .card:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 30px 0 30px;
          }

          .container {
            padding: 0 20px;
          }

          .title {
            font-size: 26px;
          }

          .subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
