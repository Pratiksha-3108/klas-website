'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutValuesSection() {
  const values = [
    {
      title: 'Diversified Excellence',
      content:
        'Bringing the same standard of quality to every sector we operate in, from technology to entertainment.',
    },
    {
      title: 'Pioneer Innovation',
      content:
        'Entering new industries early and building the playbook for others to follow.',
    },
    {
      title: 'Strategic Vision',
      content:
        "Making decisions today with tomorrow's landscape in mind.",
    },
    {
      title: 'Stewardship',
      content:
        'Responsibly growing wealth and reputation, ensuring resources are preserved and enhanced for the generations that follow.',
    },
    {
      title: 'Integrity',
      content:
        'Committing to absolute transparency, ethical decision-making, and honour in every dealing and partnership.',
    },
    {
      title: 'Longevity',
      content:
        'Prioritizing long-term value creation and multi-generational thinking over short-term market gains or volatile speculation.',
    },
    {
      title: 'Impact',
      content:
        'Directing capital, time, and strategic philanthropy toward purposeful innovations and sustainable community enrichment.',
    },
  ];

  const divisions = [
    {
      number: '01',
      tag: 'REALTY',
      title: 'REALTY',
      image: '/assets/about/realty-about.jpg',
      href: '/realty',
    },
    {
      number: '02',
      tag: 'FAMILY OFFICE',
      title: 'FAMILY OFFICE',
      image: '/assets/about/office-about.png',
      href: '/klas-family',
    },
    {
      number: '03',
      tag: 'ANIMATION',
      title: 'ANIMATION',
      image: '/assets/about/animation-about.png',
      href: '/klas-animation',
    },
    {
      number: '04',
      tag: 'TECHNOLOGY',
      title: 'TECHNOLOGY',
      image: encodeURI('/assets/about/Technology -about.png'),
      href: '/klas-technology',
    },
  ];

  return (
    <>
      {/* OUR VALUES Section */}
      <section className="valuesSection">
        <div className="container">
          <div className="grid">
            {/* Left Column */}
            <div className="leftCol">
              <h2 className="title">OUR VALUES</h2>
              <p className="subtitle">
                <span className="subLine">Our values are the foundation of everything we do —</span>
                <span className="subLine">guiding our decisions, shaping our culture, and</span>
                <span className="subLine">defining our relationships.</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="rightCol">
              <div className="valuesList">
                {values.map((item, idx) => (
                  <div key={idx} className="valueItem">
                    <h3 className="itemTitle">{item.title}</h3>
                    <p className="itemContent">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO KNOW MORE? Divisions Section */}
      <section className="divisionsSection">
        <div className="divisionsContainer">
          <div className="headerContainer">
            <h2 className="divisionsTitle">READY TO KNOW MORE?</h2>
            <p className="divisionsSubtitle">Explore Our Divisions</p>
          </div>

          <div className="cardsGrid">
            {divisions.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '28px 24px',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  className="imageWrapper"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cardImage"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(1.05) brightness(0.85)',
                      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease',
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.75) 100%)',
                      transition: 'background 0.4s ease',
                    }}
                  />
                </div>

                {/* Top Bar inside card */}
                <div className="cardTop">
                  <span className="cardBadge">
                    {item.number} — {item.tag}
                  </span>
                  <div className="arrowCircle">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrowIcon"
                    >
                      <path
                        d="M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H4.66667M12.6667 3.33334V11.3333"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom content inside card */}
                <div className="cardBottom">
                  <h3 className="cardTitle">{item.title}</h3>
                  <div className="titleUnderline" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .valuesSection {
          width: 100%;
          background-color: #ffffff;
          padding: 100px 0 120px;
          border-top: 1px solid rgba(197, 168, 128, 0.15);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 80px;
          align-items: start;
        }

        .leftCol {
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 120px;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.15;
          color: #4f4742;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0 0 20px 0;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17.5px;
          font-weight: 400;
          line-height: 1.5;
          color: #756a62;
          margin: 0;
          max-width: 480px;
        }

        .subLine {
          display: block;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .subLine {
            white-space: normal;
          }
        }

        .rightCol {
          display: flex;
          flex-direction: column;
        }

        .valuesList {
          display: flex;
          flex-direction: column;
        }

        .valueItem {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 32px;
          padding: 26px 0;
          border-bottom: 1px solid #E7E1D6;
          align-items: start;
        }

        .valueItem:first-child {
          padding-top: 4px;
        }

        .valueItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .itemTitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17.5px;
          font-weight: 700;
          color: #4f4742;
          line-height: 1.4;
          margin: 0;
        }

        .itemContent {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #5c5852;
          line-height: 1.6;
          margin: 0;
        }

        /* READY TO KNOW MORE? Divisions Section */
        .divisionsSection {
          width: 100%;
          background-color: #ffffff;
          padding-top: 80px;
          padding-bottom: 100px;
          overflow: hidden;
        }

        .divisionsContainer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .headerContainer {
          margin-bottom: 40px;
        }

        .divisionsTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.15;
          color: #4f4742;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        }

        .divisionsSubtitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4;
          color: #756a62;
          margin: 0;
        }

        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          gap: 0;
        }

        .card {
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .card:last-child {
          border-right: none;
        }

        .card:hover .cardImage {
          transform: scale(1.06) !important;
          filter: grayscale(60%) contrast(1.1) brightness(0.95) !important;
        }

        .cardTop {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .cardBadge {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #FFF0D7;
          text-transform: uppercase;
        }

        .arrowCircle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .card:hover .arrowCircle {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #111111;
          transform: translate(2px, -2px);
        }

        .arrowIcon {
          transition: transform 0.3s ease;
        }

        .cardBottom {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .cardTitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: -0.5px;
          vertical-align: middle;
          color: #ffffff;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        .titleUnderline {
          width: 32px;
          height: 2px;
          background-color: #C2B49D;
          transition: width 0.3s ease;
        }

        .card:hover .titleUnderline {
          width: 48px;
        }

        @media (max-width: 1200px) {
          .cardsGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
          }
        }

        @media (max-width: 1024px) {
          .valuesSection {
            padding: 70px 0;
          }

          .divisionsSection {
            padding-top: 60px;
            padding-bottom: 70px;
          }

          .container,
          .divisionsContainer {
            padding: 0 32px;
          }

          .headerContainer {
            margin-bottom: 30px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .leftCol {
            position: static;
          }

          .subtitle {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .valuesSection {
            padding: 50px 0;
          }

          .divisionsSection {
            padding-top: 40px;
            padding-bottom: 50px;
          }

          .container,
          .divisionsContainer {
            padding: 0 20px;
          }

          .headerContainer {
            margin-bottom: 24px;
          }

          .valueItem {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 20px 0;
          }

          .title,
          .divisionsTitle {
            font-size: 28px;
          }

          .subtitle,
          .divisionsSubtitle {
            font-size: 17px;
          }

          .itemTitle {
            font-size: 16.5px;
          }

          .itemContent {
            font-size: 14px;
          }

          .cardsGrid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .cardTitle {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
