'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface JourneyItem {
  id: string;
  title: string;
  description: string;
}

const journeyData: JourneyItem[] = [
  {
    id: '01',
    title: "INDIA'S FIRST\n2D ANIMATED FILM",
    description:
      'Hanuman (2005) is India’s first animated feature film, portraying the life of Lord Hanuman—from his divine birth to his pivotal role in the Ramayana.\n\nBlessed by the Gods with unmatched strength, intelligence, and immortality, Hanuman embodies courage and devotion. The film traces his playful childhood, the discovery of his extraordinary powers, and his pivotal role in aiding Lord Ram—culminating in the epic triumph over Ravana and the rescue of Sita.',
  },
  {
    id: '02',
    title: 'GLOBALLY RECOGNIZED',
    description:
      'Silvertoons has won over 10+ awards nationally and globally for the film, including “ToonBoom Award” (the Animation Technology Award from Canada), Limca Book of Records Recognition, India’s Animation Industry Creator Award, to name a few.',
  },
  {
    id: '03',
    title: 'WORLD RENOWNED IP',
    description:
      'Creating timeless intellectual properties and characters that resonate across generations and continue to inspire millions of fans globally.',
  },
];

export default function AnimationJourneySection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const slideInRightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="grid">
          {/* Left Title Column - Fade In Up */}
          <motion.div
            className="titleCol"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <h2 className="sectionTitle">SILVERTOONS JOURNEY</h2>
          </motion.div>

          {/* Right Accordion Column - Smooth Slide In From Right */}
          <motion.div
            className="contentCol"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="accordionList">
              {journeyData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.id}
                    className={`accordionItem ${isOpen ? 'isOpen' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="itemHeader">
                      <span className="itemNumber">{item.id}</span>
                      <h3 className="itemTitle">{item.title}</h3>
                      <button className="toggleBtn" aria-label="Toggle section">
                        {isOpen ? '−' : '+'}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="itemContent">
                        <p className="description">{item.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Button with YouTube Image on Right */}
            <div className="actionRow">
              <a
                href="https://youtube.com/@silvertoonstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="ytExploreWrapper"
              >
                <span className="exploreBtn">
                  <span>Explore Silvertoons →</span>
                  <span>Explore Silvertoons →</span>
                </span>
                <Image
                  src="/assets/klas-animation/YT.png"
                  alt="Silvertoons YouTube"
                  width={270}
                  height={54}
                  className="ytImg"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 20px;
          align-items: flex-start;
        }

        :global(.titleCol) {
          will-change: transform, opacity;
        }

        .sectionTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 32px;
          font-weight: 700;
          color: #4A423D;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
          margin: 0;
          line-height: 1.2;
        }

        :global(.contentCol) {
          display: flex;
          flex-direction: column;
          padding-top: 110px;
          will-change: transform, opacity;
        }

        .accordionList {
          display: flex;
          flex-direction: column;
        }

        .accordionItem {
          border-bottom: 1px solid rgba(74, 66, 61, 0.15);
          padding: 32px 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .itemHeader {
          display: grid;
          grid-template-columns: 80px 1fr 40px;
          align-items: flex-start;
          gap: 20px;
        }

        .itemNumber {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 26px;
          font-weight: 600;
          color: #BEB3AB;
          letter-spacing: 0.02em;
        }

        .itemTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 24px;
          font-weight: 600;
          color: #4A423D;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.3;
          white-space: pre-line;
        }

        .toggleBtn {
          font-size: 24px;
          font-weight: 300;
          color: #8C827A;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0;
        }

        .itemContent {
          padding-left: 100px;
          padding-top: 20px;
          max-width: 720px;
        }

        .description {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 17px;
          font-weight: 400;
          color: #756A62;
          line-height: 1.65;
          margin: 0;
        }

        .actionRow {
          margin-top: 60px;
          display: flex;
          justify-content: flex-start;
          padding-left: 160px;
        }

        .ytExploreWrapper {
          display: inline-flex;
          align-items: center;
          gap: 68px;
          text-decoration: none;
        }

        .ytImg {
          object-fit: contain;
          height: 58px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .ytExploreWrapper:hover .ytImg {
          transform: scale(1.05);
        }

        .exploreBtn {
          position: relative;
          overflow: hidden;
          border: 1px solid #4A423D;
          color: #4A423D;
          display: inline-block;
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          padding: 16px 36px;
          text-decoration: none;
          cursor: pointer;
          background: #ffffff;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .exploreBtn span:first-child {
          position: relative;
          transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
          z-index: 10;
          display: inline-block;
        }

        .exploreBtn span:last-child {
          color: #ffffff;
          display: block;
          position: absolute;
          bottom: 0;
          transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
          z-index: 100;
          opacity: 0;
          top: 50%;
          left: 50%;
          transform: translateY(225%) translateX(-50%);
          white-space: nowrap;
        }

        .exploreBtn:after {
          content: "";
          position: absolute;
          bottom: -50%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #4A423D;
          transform-origin: bottom center;
          transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
          transform: skewY(9.3deg) scaleY(0);
          z-index: 50;
        }

        .exploreBtn:hover:after {
          transform-origin: bottom center;
          transform: skewY(9.3deg) scaleY(2);
        }

        .exploreBtn:hover span:first-child {
          color: transparent;
        }

        .exploreBtn:hover span:last-child {
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
          transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .itemContent {
            padding-left: 0;
          }

          .actionRow {
            padding-left: 0;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 0;
          }

          .container {
            padding: 0 24px;
          }

          .sectionTitle {
            font-size: 26px;
          }

          .itemHeader {
            grid-template-columns: 50px 1fr 30px;
            gap: 12px;
          }

          .itemNumber {
            font-size: 20px;
          }

          .itemTitle {
            font-size: 18px;
          }

          .description {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
