/// <reference types="styled-jsx" />
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

interface AwardItem {
  id: string;
  number: string;
  title: React.ReactNode;
  image?: string;
}

const awardsData: AwardItem[] = [
  {
    id: '01',
    number: '01 /',
    title: "IIFA Award - Special Award for 'Hanuman' (Aug 2006)",
    image: '/assets/klas-animation/IIFA.jpeg',
  },
  {
    id: '02',
    number: '02 /',
    title: "Apsara Awards - Best Visual Effects Award for 'Hanuman' (2006)",
    image: '/assets/klas-animation/apsara_award.jpeg',
  },
  {
    id: '03',
    number: '03 /',
    title: "Zee Cine Awards - Best Visual Effects for 'Hanuman' (2006)",
    image: '/assets/klas-animation/ZEE.jpeg',
  },
  {
    id: '04',
    number: '04 /',
    title: 'FICCI - BAF Awards - Special Contribution to Indian animation trophy',
    image: '/assets/klas-animation/FICCI.jpeg',
  },
  {
    id: '05',
    number: '05 /',
    title: (
      <>
        12th Annual Star Screen Awards - Special Recognition Award for
        <br />
        &apos;Hanuman&apos; (Mar 2006)
      </>
    ),
    image: '/assets/klas-animation/black-award.jpg',
  },
  {
    id: '06',
    number: '06 /',
    title: 'Limca Book of Records',
    image: '/assets/klas-animation/black-award.jpg',
  },
  {
    id: '07',
    number: '07 /',
    title: 'ToonBoom Award',
    image: '/assets/klas-animation/black-award.jpg',
  },
  {
    id: '08',
    number: '08 /',
    title: 'I.T. People Industry Creator Award to Mr. Kumar Subramanian',
    image: '/assets/klas-animation/IT.jpeg',
  },
];

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUpNumber({ end, suffix = '+', duration = 2500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Smooth ease-out cubic curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AnimationAwardsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>('02');

  return (
    <section id="awards" className="section">
      <div className="container">
        {/* Section Header */}
        <h2 className="sectionTitle">MAJOR AWARDS</h2>

        {/* Awards List */}
        <div className="awardsList">
          {awardsData.map((award) => {
            const isHovered = hoveredId === award.id;

            return (
              <div
                key={award.id}
                className={`awardRow ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredId(award.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="awardLeft">
                  <span className="awardNumber">{award.number}</span>
                  <span className="awardTitle">{award.title}</span>
                </div>

                <div className="awardRight">
                  {/* Default Icon */}
                  <div className="iconBox">
                    <Image
                      src="/assets/klas-animation/awardicon.png"
                      alt="Award Icon"
                      width={46}
                      height={46}
                      className="iconImg"
                    />
                  </div>

                  {/* Hover Trophy Image */}
                  <div className="trophyBox">
                    <Image
                      src={award.image || '/assets/klas-animation/award.png'}
                      alt="Award Trophy"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="trophyImg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statistics Cards */}
        <div className="statsGrid">
          <div className="statCard">
            <h3 className="statNumber">
              <CountUpNumber end={5} suffix="+" duration={2500} />
            </h3>
            <p className="statLabel">Countries Global Production Delivered</p>
          </div>

          <div className="statCard">
            <h3 className="statNumber">
              <CountUpNumber end={20} suffix="+" duration={2500} />
            </h3>
            <p className="statLabel">Years of Experience</p>
          </div>

          <div className="statCard">
            <h3 className="statNumber">
              <CountUpNumber end={10} suffix="+" duration={2500} />
            </h3>
            <p className="statLabel">Awards Nationally & Globally</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 50px;
          background-color: #ffffff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .sectionTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0 0 40px 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .awardsList {
          width: 100%;
          border-top: 1px solid #ECE6E0;
          margin-bottom: 72px;
        }

        .awardRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 28px;
          border-bottom: 1px solid #ECE6E0;
          background-color: #ffffff;
          transition: background-color 0.25s ease;
          cursor: pointer;
          position: relative;
        }

        .awardRow:hover,
        .awardRow.hovered {
          background-color: #F5F0EC;
        }

        .awardLeft {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-right: 24px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: left center;
        }

        .awardNumber {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 28px;
          font-weight: 700;
          color: #3A3430;
          flex-shrink: 0;
          transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .awardTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 21px;
          font-weight: 600;
          color: #3A3430;
          line-height: 1.4;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), font-size 0.3s ease, color 0.3s ease, font-weight 0.3s ease;
          transform-origin: left center;
        }

        .awardRow:hover .awardTitle,
        .awardRow.hovered .awardTitle {
          transform: scale(1.06) translateX(4px);
          font-size: 23px;
          font-weight: 700;
          color: #111111;
        }

        .awardRow:hover .awardNumber,
        .awardRow.hovered .awardNumber {
          transform: scale(1.05);
          color: #111111;
        }

        .awardRight {
          position: relative;
          width: 110px;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .iconBox {
          width: 52px;
          height: 52px;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.25s ease, transform 0.25s ease;
          position: absolute;
          right: 0;
        }

        .iconImg {
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .awardRow:hover .iconBox,
        .awardRow.hovered .iconBox {
          opacity: 0;
          transform: scale(0.9);
          pointer-events: none;
        }

        .trophyBox {
          width: 110px;
          height: 92px;
          position: absolute;
          right: 0;
          border-radius: 0;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.25s ease, transform 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .awardRow:hover .trophyBox,
        .awardRow.hovered .trophyBox {
          opacity: 1;
          transform: scale(1);
        }

        .trophyImg {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(3, 320px);
          gap: 110px;
          margin: 0;
        }

        .statCard {
          width: 320px;
          max-width: 100%;
          background-color: #FAF8F5;
          border: 1px solid #ECE7E1;
          border-radius: 4px;
          padding: 32px 28px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .statCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
        }

        .statNumber {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 52px;
          font-weight: 800;
          color: #38322E;
          margin: 0 0 12px 0;
          line-height: 1;
        }

        .statLabel {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 14px;
          font-weight: 500;
          color: #6B625B;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 32px;
          }

          .sectionTitle {
            font-size: 32px;
          }

          .awardTitle {
            font-size: 16px;
          }

          .awardNumber {
            font-size: 20px;
          }

          .statsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .statCard {
            width: 100%;
            padding: 28px 24px;
          }

          .statNumber {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .statsGrid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .awardRow {
            padding: 16px 16px;
          }

          .awardTitle {
            font-size: 15px;
          }

          .awardNumber {
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 50px;
          }

          .container {
            padding: 0 20px;
          }

          .sectionTitle {
            font-size: 26px;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
}
