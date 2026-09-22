'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const clientLogos = [
  { id: 1, src: '/assets/klas-realty/client1.png', alt: 'Client 1' },
  { id: 2, src: '/assets/klas-realty/client2.png', alt: 'Client 2' },
  { id: 3, src: '/assets/klas-realty/client3.png', alt: 'Client 3' },
  { id: 4, src: '/assets/klas-realty/client4.png', alt: 'Client 4' },
  { id: 5, src: '/assets/klas-realty/client5.png', alt: 'Client 5' },
  { id: 6, src: '/assets/klas-realty/client6.png', alt: 'Client 6' },
  { id: 7, src: '/assets/klas-realty/client7.png', alt: 'Client 7' },
];

export default function HomeClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate list twice for seamless infinite scrolling marquee
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="mainGrid">
          {/* Left Title Column with fadeInUp animation */}
          <div className={`titleColumn ${isVisible ? 'animatedTitle' : ''}`}>
            <h2 className="title">Our Clients</h2>
          </div>

          {/* Right Side Infinite Auto-Slider */}
          <div className="sliderWrapper">
            <div className="sliderTrack">
              {duplicatedLogos.map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="logoItem">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={240}
                    height={100}
                    className="clientImage"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 60px 0 70px;
          background-color: #FFFFFF;
          overflow: hidden;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mainGrid {
          width: 97%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 60px;
          align-items: center;
        }

        .titleColumn {
          display: flex;
          flex-direction: column;
          padding-left: 0;
        }

        .title {
          font-family: var(--font-sans);
          font-size: 42px;
          font-weight: 600;
          color: #3B3432;
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin: 0;
          opacity: 0;
          transform: translateY(30px);
          will-change: opacity, transform;
        }

        .animatedTitle .title {
          animation: fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sliderWrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 16px 0;
        }

        .sliderWrapper::before,
        .sliderWrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        .sliderWrapper::before {
          left: 0;
          background: linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }

        .sliderWrapper::after {
          right: 0;
          background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }

        .sliderTrack {
          display: flex;
          align-items: center;
          gap: 64px;
          width: max-content;
          animation: autoScroll 25s linear infinite;
          will-change: transform;
        }

        .sliderWrapper:hover .sliderTrack {
          animation-play-state: paused;
        }

        .logoItem {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          min-width: 140px;
          padding: 4px 12px;
          flex-shrink: 0;
          opacity: 0.95;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .logoItem:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .clientImage {
          max-height: 84px;
          max-width: 135px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }

        @keyframes autoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          .section {
            padding: 40px 0 50px;
          }

          .mainGrid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .titleColumn {
            padding-left: 0;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 30px 0 40px;
          }

          .title {
            font-size: 32px;
          }

          .sliderTrack {
            gap: 44px;
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
