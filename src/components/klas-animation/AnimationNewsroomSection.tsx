/// <reference types="styled-jsx" />
'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface NewsCard {
  id: string;
  image: string;
  alt: string;
  link?: string;
}

const newsItems: NewsCard[] = [
  {
    id: 'news-1',
    image: '/assets/klas-animation/Newsroom1.png',
    alt: 'Animated Movies That Impart Knowledge',
    link: 'https://www.animationxpress.com/animation/10-enjoyable-animated-movies-that-impart-knowledge-about-the-indian-culture-and-mythology/?amp=1',
  },
  {
    id: 'news-2',
    image: '/assets/klas-animation/Newsroom2.png',
    alt: 'Hanuman sets the Cash Registers Ringing',
    link: 'https://www.animationxpress.com/animation/hanuman-sets-the-cash-registers-ringing/?amp=1',
  },
  {
    id: 'news-3',
    image: '/assets/klas-animation/Newsroom3.png',
    alt: 'The Hanuman Effect',
    link: 'https://www.animationxpress.com/animation/animated-theatricals-in-india-and-the-hanuman-effect/',
  },
  {
    id: 'news-4',
    image: '/assets/klas-animation/Newsroom4.png',
    alt: 'Hanuman gets Major Theatrical Release',
    link: 'https://www.awn.com/news/animated-hanuman-gets-major-theatrical-release-india',
  },
  {
    id: 'news-5',
    image: '/assets/klas-animation/Newsroom5.png',
    alt: 'Sahara’s chance to push Animation with Hanuman',
    link: 'https://www.animationxpress.com/animation/saharas-chance-to-push-animation-with-hanuman/?amp=1',
  },
  {
    id: 'news-6',
    image: '/assets/klas-animation/Newsroom6.png',
    alt: 'Can Hanuman lift the Animation Industry?',
    link: 'https://m.economictimes.com/can-hanuman-lift-animation-industry/articleshow/1277719.cms',
  },
  {
    id: 'news-7',
    image: '/assets/klas-animation/Newsroom7.png',
    alt: 'Amo Communications and Godrej Aadhaar take ‘Hanuman’ to rural India',
    link: "https://www.exchange4media.com/marketing-news/amo-communications-and-godrej-aadhaar-take-'hanuman'-to-rural-india-19105.html",
  },
  {
    id: 'news-8',
    image: '/assets/klas-animation/Newsroom8.png',
    alt: 'Hanuman, a hit in metros, grosses Rs 70 million',
    link: 'https://indiantelevision.com/news-headline/hanuman-a-hit-in-metros-grosses-rs-70-million-051114/',
  },
  {
    id: 'news-9',
    image: '/assets/klas-animation/Newsroom9.png',
    alt: 'Hanuman Lands into Limca Book of Records',
    link: 'https://www.news18.com/news/india/hanuman-lands-into-limca-book-of-records-228027.html',
  },
  {
    id: 'news-10',
    image: '/assets/klas-animation/Newsroom10.png',
    alt: 'Indian Feature Animation Explodes',
    link: 'https://www.awn.com/animationworld/indian-feature-animation-explodes',
  },
  {
    id: 'news-11',
    image: '/assets/klas-animation/Newsroom11.png',
    alt: 'Mahavatar Narsimha overtakes Hanuman’s box-office record',
    link: 'https://www.hollywoodreporterindia.com/features/insight/mahavatar-narsimha-earns-17-crore-at-box-office-becomes-highest-grossing-indian-animated-film-ever',
  },
  {
    id: 'news-12',
    image: '/assets/klas-animation/Newsroom12.png',
    alt: 'Gulf News Names Hanuman as the ~20-year prior record-holder',
    link: 'https://gulfnews.com/entertainment/south-indian/mahavatar-narsimha-becomes-indias-first-1-billion-animated-film-1.500221700',
  },
];

const displayItems = [...newsItems, ...newsItems];

export default function AnimationNewsroomSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameId = useRef<number | null>(null);

  // Smooth Auto-Scrolling loop
  const autoScroll = useCallback(() => {
    if (scrollRef.current && !isHovered && !isMouseDown) {
      scrollRef.current.scrollLeft += 0.8;

      // Infinite seamless looping
      const halfWidth = scrollRef.current.scrollWidth / 2;
      if (scrollRef.current.scrollLeft >= halfWidth) {
        scrollRef.current.scrollLeft -= halfWidth;
      }
    }
    animFrameId.current = requestAnimationFrame(autoScroll);
  }, [isHovered, isMouseDown]);

  useEffect(() => {
    animFrameId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [autoScroll]);

  // Cursor Drag Scrolling Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="newsroom" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="headerRow">
          <h2 className="title">NEWSROOM</h2>
          <a href="#newsroom" className="seeAllLink">
            SEE ALL NEWS
          </a>
        </div>
      </div>

      {/* Full Bleed Scroller Track */}
      <div
        ref={scrollRef}
        className={`scrollerTrack ${isMouseDown ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
      >
        <div className="cardsWrapper">
          {displayItems.map((item, idx) => (
            <a
              key={`${item.id}-${idx}`}
              href={item.link || '#newsroom'}
              target={item.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="newsCard"
            >
              <div className="imageBox">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="cardImg"
                  draggable={false}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 100px 0 100px;
          background-color: #ffffff;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .headerRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 38px;
          font-weight: 700;
          color: #4A423D;
          margin: 0;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .seeAllLink {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 13px;
          font-weight: 600;
          color: #756A62;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }

        .seeAllLink:hover {
          color: #262220;
          text-decoration: underline;
        }

        .scrollerTrack {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          padding: 10px 0 20px;
        }

        .scrollerTrack::-webkit-scrollbar {
          display: none;
        }

        .scrollerTrack.dragging {
          cursor: grabbing;
        }

        .cardsWrapper {
          display: flex;
          gap: 22px;
          width: max-content;
          padding-left: max(48px, calc((100vw - 1400px) / 2 + 48px));
          padding-right: max(48px, calc((100vw - 1400px) / 2 + 48px));
        }

        .newsCard {
          display: block;
          text-decoration: none;
          width: 288px;
          height: 288px;
          background: #ffffff;
          border-radius: 4px;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .newsCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        }

        .imageBox {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .cardImg {
          object-fit: contain;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 32px;
          }

          .title {
            font-size: 32px;
          }

          .newsCard {
            width: 280px;
            height: 280px;
          }

          .cardsWrapper {
            gap: 18px;
            padding-left: max(32px, calc((100vw - 1400px) / 2 + 32px));
            padding-right: max(32px, calc((100vw - 1400px) / 2 + 32px));
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 60px 0 60px;
          }

          .container {
            padding: 0 20px;
          }

          .title {
            font-size: 26px;
          }

          .newsCard {
            width: 250px;
            height: 250px;
          }

          .headerRow {
            margin-bottom: 28px;
          }

          .cardsWrapper {
            padding-left: max(20px, calc((100vw - 1400px) / 2 + 20px));
            padding-right: max(20px, calc((100vw - 1400px) / 2 + 20px));
          }
        }
      `}</style>
    </section>
  );
}
