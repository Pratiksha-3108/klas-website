'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Premium architectural easing curve
const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// 1. Horizontal Masked Reveal Variant (clip-path inset left to right)
const imageMaskRevealVariants: Variants = {
  hidden: {
    clipPath: 'inset(0% 100% 0% 0%)',
  },
  visible: (index: number = 0) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 1.1, // 1100ms
      delay: index * 0.12, // 120ms stagger between cards
      ease: EASE_PREMIUM,
    },
  }),
};

// 2. Subtle Text Fade + TranslateY Variant
const textFadeSlideVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.25 + customDelay * 0.12, // 120ms stagger starting 250ms after section reveal begins
      ease: EASE_PREMIUM,
    },
  }),
};

export default function AboutValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      subtitle: 'Real Estate Development & Asset Management',
      image: '/assets/about/realty-about.jpg',
      href: '/realty',
    },
    {
      number: '02',
      tag: 'FAMILY OFFICE',
      title: 'FAMILY OFFICE',
      subtitle: 'Capital Markets, Wealth Stewardship & Investments',
      image: '/assets/about/office-about.png',
      href: '/klas-family',
    },
    {
      number: '03',
      tag: 'ANIMATION',
      title: 'ANIMATION',
      subtitle: 'Creative Media Studio & Digital Content',
      image: '/assets/about/animation-about.png',
      href: '/klas-animation',
    },
    {
      number: '04',
      tag: 'TECHNOLOGY',
      title: 'TECHNOLOGY',
      subtitle: 'Digital Solutions, AI Ventures & Innovation',
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
            <motion.h2
              className="divisionsTitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={textFadeSlideVariants}
              custom={0}
              style={{
                fontFamily: "var(--font-inter), 'Inter', -apple-system, sans-serif",
                fontSize: '38px',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#4F4742',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: '0 0 20px 0',
              }}
            >
              READY TO KNOW MORE?
            </motion.h2>
            <motion.p
              className="divisionsSubtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={textFadeSlideVariants}
              custom={1}
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: '17.5px',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#756A62',
                margin: 0,
              }}
            >
              Explore Our Divisions
            </motion.p>
          </div>

          <div
            className="cardsAccordion"
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: '440px',
              gap: 0,
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {divisions.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const flexVal = hoveredIndex === null ? 1 : isHovered ? 1.15 : 0.95;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`card ${isHovered ? 'active' : 'inactive'}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    height: '100%',
                    flex: flexVal,
                    transition: 'flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    minWidth: 0,
                  }}
                >
                  <div
                    className="cardInner"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      borderRadius: 0,
                      backgroundColor: '#16181d',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '32px 28px',
                      boxSizing: 'border-box',
                      borderRight: index < divisions.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                    }}
                  >
                    {/* Horizontal Masked Image Reveal */}
                    <motion.div
                      className="imageWrapper"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      variants={imageMaskRevealVariants}
                      custom={index}
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
                          filter: isHovered
                            ? 'grayscale(0%) brightness(1.05) contrast(1.05)'
                            : 'grayscale(75%) brightness(0.7) contrast(1.05)',
                          transform: 'scale(1)',
                          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease',
                        }}
                      />
                      <div
                        className="overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: '100%',
                          height: '100%',
                          background: isHovered
                            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.1) 45%, rgba(0, 0, 0, 0.88) 100%)'
                            : 'linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.85) 100%)',
                          transition: 'background 0.5s ease',
                        }}
                      />
                    </motion.div>

                    {/* Top Bar inside card */}
                    <div
                      className="cardTop"
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <motion.span
                        className="cardBadge"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textFadeSlideVariants}
                        custom={2 + index}
                      >
                        {item.number} — {item.tag}
                      </motion.span>
                      <motion.div
                        className="arrowCircle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textFadeSlideVariants}
                        custom={2.5 + index}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrowIcon"
                        >
                          <path
                            d={
                              isHovered
                                ? "M2.66666 8H13.3333M13.3333 8L8.66666 3.33334M13.3333 8L8.66666 12.6667"
                                : "M3.33334 12.6667L12.6667 3.33334M12.6667 3.33334H4.66667M12.6667 3.33334V11.3333"
                            }
                            stroke="currentColor"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Bottom content inside card */}
                    <div
                      className="cardBottom"
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '100%',
                      }}
                    >
                      <motion.h3
                        className="cardTitle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textFadeSlideVariants}
                        custom={3 + index}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.div
                        className="titleUnderline"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textFadeSlideVariants}
                        custom={3.5 + index}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
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
          position: relative;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif !important;
          font-size: 38px !important;
          font-weight: 700 !important;
          line-height: 1.15 !important;
          color: #4F4742 !important;
          letter-spacing: 0.02em !important;
          text-transform: uppercase !important;
          margin: 0 0 20px 0 !important;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', sans-serif !important;
          font-size: 17.5px !important;
          font-weight: 400 !important;
          line-height: 1.5 !important;
          color: #756A62 !important;
          margin: 0 !important;
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
          padding: 22px 24px;
          margin: 0 -24px;
          border-bottom: 1px solid #E7E1D6;
          align-items: start;
          border-radius: 0;
          cursor: pointer;
          background-color: transparent;
          transition: background-color 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .valueItem:first-child {
          margin-top: -4px;
        }

        .valueItem:hover {
          background-color: #F5F0EC;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .valueItem:last-child {
          border-bottom: none;
        }

        .itemTitle {
          font-family: var(--font-inter), 'Inter', sans-serif !important;
          font-size: 19.5px !important;
          font-weight: 700 !important;
          color: #4F4742 !important;
          line-height: 1.4 !important;
          margin: 0 !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }

        .valueItem:hover .itemTitle {
          transform: scale(1.07);
          transform-origin: left center;
          color: #221E1B !important;
        }

        .itemContent {
          font-family: var(--font-inter), 'Inter', sans-serif !important;
          font-size: 16.5px !important;
          font-weight: 400 !important;
          color: #5c5852 !important;
          line-height: 1.6 !important;
          margin: 0 !important;
          transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .valueItem:hover .itemContent {
          color: #332D29 !important;
          transform: scale(1.04);
          transform-origin: left center;
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

        :global(.divisionsTitle) {
          font-family: var(--font-inter), 'Inter', -apple-system, sans-serif !important;
          font-size: 38px !important;
          font-weight: 700 !important;
          line-height: 1.15 !important;
          color: #4F4742 !important;
          letter-spacing: 0.02em !important;
          text-transform: uppercase !important;
          margin: 0 0 20px 0 !important;
        }

        :global(.divisionsSubtitle) {
          font-family: var(--font-inter), 'Inter', sans-serif !important;
          font-size: 17.5px !important;
          font-weight: 400 !important;
          line-height: 1.5 !important;
          color: #756A62 !important;
          margin: 0 !important;
        }

        /* Accordion Layout */
        .cardsAccordion {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 480px;
          gap: 16px;
          box-sizing: border-box;
        }

        :global(.divisionsSection .cardBadge) {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #FFF0D7;
          text-transform: uppercase;
          white-space: nowrap;
        }

        :global(.divisionsSection .arrowCircle) {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        :global(.divisionsSection .card.active .arrowCircle) {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #111111;
          transform: translateX(4px);
        }

        :global(.divisionsSection .arrowIcon) {
          transition: transform 0.3s ease;
        }

        :global(.divisionsSection .divisionTag) {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        :global(.divisionsSection .cardTitle) {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 26px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #ffffff;
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
        }

        :global(.divisionsSection .cardSubtitle) {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          max-height: 0;
          opacity: 0;
          transform: translateY(8px);
          overflow: hidden;
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s, max-height 0.4s ease, margin 0.4s ease;
        }

        :global(.divisionsSection .card.active .cardSubtitle),
        :global(.divisionsSection .cardSubtitle.visible) {
          max-height: 60px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 8px;
        }

        :global(.divisionsSection .titleUnderline) {
          width: 28px;
          height: 2px;
          background-color: #C2B49D;
          margin-top: 14px;
          transition: width 0.4s ease, background-color 0.4s ease;
        }

        :global(.divisionsSection .card.active .titleUnderline) {
          width: 54px;
          background-color: #E6D7C3;
        }

        /* Responsive Breakpoints */
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

          .cardsAccordion {
            height: 440px;
            gap: 12px;
          }

          :global(.divisionsSection .cardTitle) {
            font-size: 22px;
          }
        }

        @media (max-width: 860px) {
          .cardsAccordion {
            flex-direction: column;
            height: auto;
            gap: 16px;
          }

          :global(.divisionsSection .card) {
            height: 220px !important;
            flex: none !important;
            width: 100%;
          }

          :global(.divisionsSection .card.active) {
            height: 260px !important;
          }

          :global(.divisionsSection .cardSubtitle) {
            max-height: 60px;
            opacity: 1;
            transform: translateY(0);
            margin-top: 6px;
          }

          :global(.divisionsSection .titleUnderline) {
            width: 44px;
          }
        }

        @media (max-width: 640px) {
          .subLine {
            display: inline;
            white-space: normal;
          }

          .valuesSection {
            padding: 48px 0;
          }

          .divisionsSection {
            padding-top: 40px;
            padding-bottom: 48px;
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
            gap: 6px;
            padding: 18px 0;
          }

          .title,
          :global(.divisionsTitle) {
            font-size: 28px !important;
          }

          .subtitle,
          :global(.divisionsSubtitle) {
            font-size: 16px !important;
            line-height: 1.45 !important;
          }

          .itemTitle {
            font-size: 16.5px;
          }

          .itemContent {
            font-size: 14px;
            line-height: 1.55;
          }
        }
      `}</style>
    </>
  );
}

