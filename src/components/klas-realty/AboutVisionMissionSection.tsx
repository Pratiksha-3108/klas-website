'use client';

import React from 'react';

export default function AboutVisionMissionSection() {
  const missionCards = [
    {
      num: '01',
      title: 'Innovation & Excellence',
      description:
        'Pursuing better ways of working and building across every division.',
    },
    {
      num: '02',
      title: 'Exceptional Customer Relationships',
      description:
        'Earning trust through consistent, high-quality delivery.',
    },
    {
      num: '03',
      title: 'Business Growth',
      description:
        'Expanding responsibly, sector by sector, decade by decade.',
    },
  ];

  const visionCards = [
    {
      num: '01',
      title: 'Global Leadership',
      description:
        'Extending our reach and reputation beyond India.',
    },
    {
      num: '02',
      title: 'Transformative Impact',
      description:
        'Building ventures that shape the industries we enter.',
    },
    {
      num: '03',
      title: 'Sustainable Success',
      description:
        'Growing in ways that last, not just ways that scale fast.',
    },
  ];

  return (
    <section className="visionMissionSection">
      <div className="container">
        {/* MISSION ROW */}
        <div className="blockGroup">
          <div className="labelCol">
            <div className="sectionLabel">
              <span className="dash">—</span> MISSION
            </div>
          </div>
          <div className="contentCol">
            <h2 className="heading">
              Delivering sustainable growth through excellence, partnerships, and integrity.
            </h2>
            <div className="cardsGrid">
              {missionCards.map((card, idx) => (
                <div key={idx} className="card">
                  <span className="cardNum">{card.num}</span>
                  <h3 className="cardTitle">{card.title}</h3>
                  <p className="cardDesc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISION ROW */}
        <div className="blockGroup">
          <div className="labelCol">
            <div className="sectionLabel">
              <span className="dash">—</span> VISION
            </div>
          </div>
          <div className="contentCol">
            <h2 className="heading">
              To be a diversified global business group creating value through innovation and collaboration.
            </h2>
            <div className="cardsGrid">
              {visionCards.map((card, idx) => (
                <div key={idx} className="card">
                  <span className="cardNum">{card.num}</span>
                  <h3 className="cardTitle">{card.title}</h3>
                  <p className="cardDesc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .visionMissionSection {
          width: 100%;
          background-color: #ffffff;
          padding: 110px 0 120px;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          flex-direction: column;
          gap: 90px;
        }

        .blockGroup {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        .labelCol {
          width: 180px;
          flex-shrink: 0;
          padding-top: 6px;
        }

        .sectionLabel {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #7A756D;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dash {
          color: #7A756D;
          font-weight: 400;
        }

        .contentCol {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .heading {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 500;
          line-height: 1.25;
          color: #4F4742;
          margin: 0 0 48px 0;
          max-width: 980px;
          letter-spacing: -0.01em;
        }

        .cardsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background-color: #f7f3ee;
          padding: 26px 24px 28px;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
        }

        .cardNum {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-style: italic;
          font-size: 16px;
          color: #8C6D48;
          margin-bottom: 10px;
          display: block;
        }

        .cardTitle {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #68574D;
          line-height: 1.35;
          margin: 0 0 8px 0;
        }

        .cardDesc {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #5C5852;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .blockGroup {
            flex-direction: column;
            gap: 20px;
          }

          .labelCol {
            width: 100%;
            padding-top: 0;
          }

          .heading {
            font-size: 32px;
            margin-bottom: 36px;
          }

          .cardsGrid {
            gap: 20px;
          }
        }

        @media (max-width: 850px) {
          .cardsGrid {
            grid-template-columns: 1fr;
          }

          .container {
            padding: 0 28px;
            gap: 60px;
          }

          .visionMissionSection {
            padding: 70px 0;
          }

          .heading {
            font-size: 26px;
            line-height: 1.3;
          }
        }

        @media (max-width: 480px) {
          .visionMissionSection {
            padding: 48px 0;
          }

          .container {
            padding: 0 20px;
            gap: 44px;
          }

          .heading {
            font-size: 22px;
            line-height: 1.35;
            margin-bottom: 24px;
          }

          .cardsGrid {
            gap: 16px;
          }

          .card {
            padding: 22px 18px;
          }

          .cardNum {
            font-size: 15px;
            margin-bottom: 6px;
          }

          .cardTitle {
            font-size: 16px;
            margin-bottom: 6px;
          }

          .cardDesc {
            font-size: 13.5px;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}
