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
    image: '/assets/klas-animation/prop2.png',
    description:
      'Hanuman (2005) is India’s first animated feature film, portraying the life of Lord Hanuman—from his divine birth to his pivotal role in the Ramayana.\n\nBlessed by the Gods with unmatched strength, intelligence, and immortality, Hanuman embodies courage and devotion. The film traces his playful childhood, the discovery of his extraordinary powers, and his pivotal role in aiding Lord Ram—culminating in the epic triumph over Ravana and the rescue of Sita.',
  },
  {
    id: 'hanu-the-hero',
    title: 'Hanu The Hero',
    age: 'AGE: 9+',
    genre: 'ADVENTURE, ACTION, COMEDY',
    image: '/assets/klas-animation/prop3.png',
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
  const [activeCardId, setActiveCardId] = useState<string>('kinderheroes');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCardHover = (id: string) => {
    setActiveCardId(id);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -332, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 332, behavior: 'smooth' });
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

        {/* IP Cards Carousel */}
        <div className="carouselWrapper" ref={scrollContainerRef}>
          <div className="cardsGrid">
            {ipData.map((card) => {
              const isExpanded = activeCardId === card.id;
              return (
                <div
                  key={card.id}
                  className={`ipCard ${isExpanded ? 'expanded' : ''}`}
                  onMouseEnter={() => handleCardHover(card.id)}
                  onClick={() => handleCardHover(card.id)}
                >
                  <div className="imageWrapper">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="cardImage"
                      style={{
                        objectFit: card.id === 'hanu-the-hero' ? 'contain' : 'cover',
                        padding: card.id === 'hanu-the-hero' ? '12px' : '0',
                      }}
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

                      <div className="iconCircle">
                        <Image
                          src="/assets/klas-animation/icon1.png"
                          alt="IP Icon"
                          width={18}
                          height={18}
                          className="iconImg"
                        />
                      </div>
                    </div>

                    <div className="cardDescription">
                      <p>{card.description}</p>
                    </div>

                    <div className="toggleChevronWrapper">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`chevronIcon ${isExpanded ? 'rotated' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
          gap: 32px;
          align-items: flex-start;
          min-width: max-content;
        }

        .ipCard {
          width: 300px;
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
          height: 240px;
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

        .iconCircle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #EAE5E0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
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
          padding: 12px 0 0;
          color: #8C827A;
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

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 0;
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

          .ipCard {
            width: 290px;
          }
        }
      `}</style>
    </section>
  );
}
