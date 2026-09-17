'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface ValueCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const valuesData: ValueCard[] = [
  {
    id: 1,
    icon: '/assets/klas-family/val1.png',
    title: 'Stewardship',
    description:
      'Responsibly growing wealth and reputation, ensuring resources are preserved and enhanced for the generations that follow.',
  },
  {
    id: 2,
    icon: '/assets/klas-family/val2.png',
    title: 'Integrity',
    description:
      'Committing to absolute transparency, ethical decision-making, and honour in every dealing and partnership.',
  },
  {
    id: 3,
    icon: '/assets/klas-family/val3.png',
    title: 'Longevity',
    description:
      'Prioritizing long-term value creation and multi-generational thinking over short-term market gains or volatile speculation.',
  },
  {
    id: 4,
    icon: '/assets/klas-family/val4.png',
    title: 'Impact',
    description:
      'Directing capital, time, and strategic philanthropy toward purposeful innovations and sustainable community enrichment.',
  },
];

export default function FamilyValuesSection() {
  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="values" className="section">
      <div className="container">
        <div className="grid">
          {/* Left Header Column - Fade In Up */}
          <motion.div
            className="leftCol"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <h2 className="title">Our Values</h2>
            <p className="description">
              Guided by integrity, purpose, and a long-term perspective, our values
              shape how we protect what matters and create value for generations.
            </p>
          </motion.div>

          {/* Right 2x2 Value Cards Grid - Smooth Staggered Fade In Up */}
          <div className="cardsGrid">
            {valuesData.map((card, index) => (
              <motion.div
                key={card.id}
                className="card"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.15 + index * 0.15}
              >
                <div className="iconWrapper">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="icon"
                  />
                </div>
                <h3 className="cardTitle">{card.title}</h3>
                <p className="cardDescription">{card.description}</p>
              </motion.div>
            ))}
          </div>
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
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        .leftCol {
          will-change: transform, opacity;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 24px 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .description {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 20px;
          font-weight: 400;
          color: #8C827A;
          line-height: 1.6;
          margin: 0;
          max-width: 320px;
        }

        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 760px;
        }

        :global(.card) {
          background-color: #F5F0EC;
          padding: 26px 22px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, opacity;
        }

        :global(.card:hover) {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
        }

        .iconWrapper {
          margin-bottom: 24px;
        }

        .icon {
          object-fit: contain;
          width: 36px;
          height: 36px;
        }

        .cardTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 21px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .cardDescription {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 15px;
          font-weight: 400;
          color: #8C827A;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .section {
            padding: 80px 0 0;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .description {
            max-width: 100%;
          }

          .title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .cardsGrid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          :global(.card) {
            padding: 32px 24px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 0;
          }

          .container {
            padding: 0 24px;
          }

          .title {
            font-size: 26px;
            margin-bottom: 16px;
          }

          .description {
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}
