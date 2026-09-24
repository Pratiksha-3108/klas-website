'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface IPCard {
  id: string;
  title: string;
  age: string;
  genre: string;
  image: string;
  description: string;
}

const ipData: IPCard[] = [
  {
    id: 'kinderheroes',
    title: 'Kinderheroes',
    age: 'AGE: 6-9',
    genre: 'ADVENTURE, ACTION',
    image: '/assets/klas-animation/prop1.png',
    description:
      'KinderHeroes follows the adventures of a medley of mythological baby heroes from all over the world before their awareness of latent heroic powers. Through a simple and fun style, and stories filled with childhood discoveries and life lessons, we watch as their curiosities, plays, and collaborations, lead to many interesting predicaments and adventures. Virtues such as discovery, invention, courage, caring, teamwork, sharing, fun, and persistence are championed. Throughout the episodes we are introduced to such kinderHeroes as: Baby Apollo, Athena, Durga, Ganesha, Hanuman, Laxmi, Vesta, Saraswati, Selene, and Zeus.',
  },
  {
    id: 'hanuman-2005',
    title: 'Hanuman (2005)',
    age: 'AGE: 13+',
    genre: 'ADVENTURE, ACTION',
    image: '/assets/klas-animation/animation2nd.png',
    description:
      'Hanuman (2005) is India’s first animated feature film, portraying the life of Lord Hanuman—from his divine birth to his pivotal role in the Ramayana.\n\nBlessed by the Gods with unmatched strength, intelligence, and immortality, Hanuman embodies courage and devotion. The film traces his playful childhood, the discovery of his extraordinary powers, and his pivotal role in aiding Lord Ram—culminating in the epic triumph over Ravana and the rescue of Sita.',
  },
  {
    id: 'hanu-the-hero',
    title: 'Hanu The Hero',
    age: 'AGE: 9+',
    genre: 'ADVENTURE, ACTION, COMEDY',
    image: '/assets/klas-animation/animation3rd.png',
    description:
      'Set in the enchanting Anjan Kingdom, a lush river-valley realm where humans, animals, and Vanars coexist, Hanu the Hero follows the adventures of Hanu, a powerful young Vanar who watches over the kingdom from his sky-high treehouse. Alongside his brilliant best friend Jamy, the inventive son of the Bear Guard commander, Hanu protects Princess Aarya and the citizens of Anjan with a mix of strength, strategy, and cutting-edge gadgets.\n\nFrom daring rescues to playful escapades in the kingdom’s unique treehouse school, the series blends action, friendship, and humour—celebrating courage, creativity, and the harmony between nature and humanity.',
  },
  {
    id: 'deva',
    title: 'Deva: The New Beginning',
    age: 'AGE: 13+',
    genre: 'ACTION, FANTASY',
    image: '/assets/klas-animation/prop4.png',
    description:
      'The exponential increase in India’s technological advancement and material wealth, now test the rich and traditional cultures that have guided her through the ages. Traditionalism and technology can co-exist and guide each other, but that co-existence is a balance of opposites. In this story, the conflict between eastern traditions and western-induced technology serve as subtext for the evolution of romance between Aarti and Karan.',
  },
];

export default function AnimationIPsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCardHover = (id: string) => {
    setActiveCardId(id);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth <= 768 
        ? scrollContainerRef.current.clientWidth 
        : 388;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth <= 768 
        ? scrollContainerRef.current.clientWidth 
        : 388;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="ips" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="headerRow">
          <div className="headerText">
            <h2 className="title">Our Intellectual Properties</h2>
            <p className="subtitle">Explore our diverse IP portfolio:</p>
          </div>

          <div className="scrollControls">
            <button
              className="arrowBtn"
              onClick={handleScrollLeft}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="arrowBtn"
              onClick={handleScrollRight}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* IP Cards Carousel (Full Bleed Track) */}
      <div className="carouselWrapper" ref={scrollContainerRef}>
        <div className="cardsGrid">
          {ipData.map((card) => {
            const isExpanded = activeCardId === card.id;
            return (
              <div
                key={card.id}
                className={`ipCard ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={() => setActiveCardId(card.id)}
                onClick={() => {
                  setActiveCardId((prevId) => (prevId === card.id ? null : card.id));
                }}
              >
                <div className="cardInner">
                  <div className="imageWrapper">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="cardImage"
                    />
                  </div>

                  <div className="cardBody">
                    <div className="cardHeader">
                      <div className="titleMeta">
                        <h3 className="cardTitle">{card.title}</h3>
                        <p className="cardMeta">
                          {card.age} <span className="dot">•</span> {card.genre}
                        </p>
                      </div>

                      <button
                        type="button"
                        className={`iconCircleBtn ${isExpanded ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCardId((prevId) => (prevId === card.id ? null : card.id));
                        }}
                        aria-label={isExpanded ? 'Close card' : 'Open card'}
                      >
                        <Image
                          src="/assets/klas-animation/icon1.png"
                          alt="IP Icon"
                          width={34}
                          height={34}
                          className="iconImg"
                        />
                      </button>
                    </div>

                    <div className="cardDescription">
                      <p>{card.description}</p>
                    </div>

                    <button
                      type="button"
                      className="toggleChevronWrapper"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCardId((prevId) => (prevId === card.id ? null : card.id));
                      }}
                      aria-label={isExpanded ? 'Close card' : 'Open card'}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`chevronIcon ${isExpanded ? 'rotated' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .headerRow {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          position: relative;
        }

        .headerText {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4F4742;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .subtitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 18px;
          font-weight: 500;
          color: #756A62;
          margin: 0;
        }

        .scrollControls {
          display: flex;
          gap: 16px;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .arrowBtn {
          width: 44px;
          height: 44px;
          border: none;
          background: transparent;
          color: #776F68;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .arrowBtn:hover {
          color: #111111;
          transform: scale(1.1);
        }

        .carouselWrapper {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 24px;
        }

        .carouselWrapper::-webkit-scrollbar {
          display: none;
        }

        .cardsGrid {
          display: flex;
          gap: 28px;
          align-items: flex-start;
          min-width: max-content;
          padding-left: max(48px, calc((100vw - 1400px) / 2 + 48px));
          padding-right: max(48px, calc((100vw - 1400px) / 2 + 48px));
        }

        .cardInner {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .ipCard {
          width: 360px;
          background: #ffffff;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ipCard:hover,
        .ipCard.expanded {
          transform: translateY(-4px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 310px;
          background-color: #ffffff;
        }

        .cardImage {
          object-fit: cover;
        }

        .cardBody {
          padding: 24px 24px 16px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 8px;
        }

        .titleMeta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cardTitle {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #3A3430;
          margin: 0;
          line-height: 1.2;
        }

        .cardMeta {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 11px;
          font-weight: 600;
          color: #8C827A;
          letter-spacing: 0.05em;
          margin: 0;
          text-transform: uppercase;
        }

        .dot {
          margin: 0 4px;
        }

        .iconCircleBtn {
          width: 34px;
          height: 34px;
          border: none;
          background: transparent;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .iconCircleBtn:hover {
          transform: scale(1.08);
          opacity: 0.85;
        }

        .iconImg {
          object-fit: contain;
        }

        .cardDescription {
          border-top: 1px solid transparent;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          padding-top: 0;
          margin-top: 0;
          transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.35s ease,
                      padding-top 0.35s ease,
                      margin-top 0.35s ease,
                      border-color 0.35s ease;
        }

        .ipCard:hover .cardDescription,
        .ipCard.expanded .cardDescription {
          border-top-color: #F0EBE6;
          max-height: 1000px;
          opacity: 1;
          padding-top: 16px;
          margin-top: 8px;
        }

        .cardDescription p {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 13px;
          line-height: 1.6;
          color: #5E5E5E;
          margin: 0;
          white-space: pre-line;
        }

        .toggleChevronWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px 0 4px;
          color: #8C827A;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .ipCard:hover .toggleChevronWrapper,
        .ipCard.expanded .toggleChevronWrapper {
          color: #111111;
        }

        .chevronIcon {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chevronIcon.rotated {
          transform: rotate(180deg);
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 24px;
          }

          .title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .carouselWrapper {
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch;
            width: 100% !important;
          }

          .cardsGrid {
            display: flex !important;
            padding: 0 !important;
            gap: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
          }

          .ipCard {
            flex: 0 0 100% !important;
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 24px !important;
            box-sizing: border-box !important;
            background: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
            scroll-snap-align: start !important;
            scroll-snap-stop: always !important;
          }

          .cardInner {
            background: #ffffff !important;
            border-radius: 4px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04) !important;
            overflow: hidden !important;
            width: 100% !important;
          }

          .imageWrapper {
            height: 260px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 50px 0 0;
          }

          .headerRow {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .scrollControls {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
}
