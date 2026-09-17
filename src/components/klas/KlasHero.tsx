'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface KlasHeroProps {
  initialCategory?: 'Realty' | 'Family Office' | 'Animation' | 'Technology';
}

export default function KlasHero({ initialCategory = 'Realty' }: KlasHeroProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: 'realty', label: 'Realty', href: '/realty' },
    { id: 'family', label: 'Family Office', href: '/klas-family' },
    { id: 'animation', label: 'Animation', href: '/klas-animation' },
    { id: 'technology', label: 'Technology', href: '/klas-technology' },
  ];

  const contentMap = {
    'Realty': {
      titleLines: ['TRANSFORMING LAND INTO', 'LANDMARK PROJECTS'],
      descLines: [
        'KLAS holds a robust portfolio of high-value assets across India which',
        'are currently under Joint Venture Development of Residential &',
        'Commercial projects – totalling 1+ million sq. ft. of planned built-up area.'
      ]
    },
    'Family Office': {
      titleLines: ['CAPITAL STEWARDED FOR', 'GENERATIONS'],
      descLines: [
        'KLAS Family Office is the private investment arm of the family behind Silverline,',
        'one of India’s pioneering Tech companies. Our investments are anchored in',
        'stable and sustainable asset classes, guided by a long-term commitment to growth.'
      ]
    },
    'Animation': {
      titleLines: ['ANIMATION ILLUSTRATING', 'IMAGINATION TO LIFE'],
      descLines: [
        'KLAS own a strong Intellectual Property (IP) portfolio, inclusive of India’s First',
        'Animated Film IP — Bal Hanuman, along with other original properties such as',
        'KinderHeroes, Deva and more.',
        'The film “Hanuman” has won over 10+ awards nationally and globally for the film,',
        'including the “ToonBoom Award” (the Animation Technology Award from Canada),',
        'Limca Book of Records Recognition and India’s Animation Industry Creator Award, to name a few.'
      ]
    },
    'Technology': {
      titleLines: ['TECHNOLOGY', 'PURPOSE-DRIVEN ALLIANCES'],
      descLines: [
        'KLAS Infotech is a visionary partner for tech startups, empowering them to scale both locally and globally.',
        'Our focus lies in software and technology solutions that tackle impactful and real-world challenges.'
      ]
    }
  };

  const exploreHrefMap: Record<string, string> = {
    'Realty': '/realty',
    'Family Office': '/family',
    'Animation': '/animation',
    'Technology': '/klas-technology',
  };

  const heroImageMap: Record<string, string> = {
    'Realty': '/assets/klas/klas_hero1.png',
    'Family Office': '/assets/klas-family/hero_family.png',
    'Animation': '/assets/klas-animation/animation_hero.png',
    'Technology': '/assets/klas-animation/tech_hero.png',
  };

  const currentContent = contentMap[activeCategory as keyof typeof contentMap] || contentMap['Realty'];
  const exploreHref = exploreHrefMap[activeCategory] || '/animation';
  const heroImage = heroImageMap[activeCategory] || '/assets/klas/klas_hero1.png';

  return (
    <section className="klasHeroSection">
      {/* Top Header Navigation */}
      <header className="topNavHeader">
        <div className="navContainer">
          <nav className="navLinks">
            <Link href="/" className="navItem">
              Home
            </Link>
            <Link href="/about" className="navItem">
              About
            </Link>
            <Link href="/contact" className="navItem">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* KLAS Cormorant Garamond Text below navbar middle */}
      <div className="klasBannerContainer">
        <span className="klasBannerText">KLAS</span>
      </div>

      {/* 4 Category Words Sub-Navigation Line */}
      <div className="categoryNavWrapper">
        <div className="categoryNavContainer">
          {categories.map((cat) => {
            const isActive = cat.label === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                className="categoryTab"
                onClick={() => setActiveCategory(cat.label as any)}
                style={{
                  borderBottom: isActive ? '2.5px solid #4F4742' : '2.5px solid transparent',
                  color: isActive ? '#22201E' : '#5C5852',
                  fontWeight: isActive ? 700 : 500,
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Hero Banner Container: Image starts BELOW the 4 words */}
      <div className="heroBannerContainer">
        {/* Background Image Spanning Full Width & Height of this lower section */}
        <div className="bgImageWrapper">
          <Image
            src={heroImage}
            alt="KLAS Hero Illustration"
            fill
            priority
            sizes="100vw"
            className="fullHeroImg"
          />
        </div>

        {/* Hero Content Area Overlaying the Image */}
        <div className="heroBody">
          <div className="container">
            <div className="contentCol">
              <h1 className="title">
                {currentContent.titleLines.map((line, idx) => (
                  <span key={idx} className="titleLine">{line}</span>
                ))}
              </h1>
              <p className="description">
                {currentContent.descLines.map((line, idx) => (
                  <span key={idx} className="descLine">{line}</span>
                ))}
              </p>
              <Link href={exploreHref} className="exploreLink">
                <Image
                  src="/assets/klas-animation/explore_icon.png"
                  alt="Explore"
                  width={120}
                  height={24}
                  className="exploreIcon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');

        .klasHeroSection {
          width: 100%;
          background-color: #ffffff;
          padding-top: 0;
          overflow: hidden;
          position: relative;
        }

        .topNavHeader {
          width: 100%;
          background-color: #ffffff;
          padding: 24px 0 12px;
        }

        .navContainer {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 48px 0 48px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .navItem {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #978E89;
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s ease;
        }

        .navItem::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navItem:hover {
          color: var(--accent-dark);
        }

        .navItem:hover::after,
        .activeNavItem::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .activeNavItem {
          color: var(--accent-dark);
          font-weight: 600;
        }

        .klasBannerContainer {
          width: 100%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0 0 4px;
        }

        .klasBannerText {
          font-family: 'Times New Roman', Times, serif;
          font-weight: 500;
          font-size: 82px;
          line-height: 100%;
          letter-spacing: 0px;
          color: #F3CD8A;
          background: transparent;
          vertical-align: middle;
          text-transform: uppercase;
          display: inline-block;
        }

        .categoryNavWrapper {
          width: 100%;
          border-bottom: none;
          margin-top: 64px;
          margin-bottom: 0;
          padding-bottom: 16px;
          background-color: #ffffff;
        }

        .categoryNavContainer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 160px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .categoryTab {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 30px 10px 30px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #5C5852;
          text-decoration: none;
          white-space: nowrap;
          background: transparent;
          border: none;
          border-bottom: 2.5px solid transparent;
          transition: border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;
          opacity: 0.75;
          cursor: pointer;
        }

        .categoryTab:hover {
          opacity: 1;
          color: #22201E;
        }

        .activeCategoryTab {
          color: #22201E;
          font-weight: 700;
          opacity: 1;
          border-bottom: 2.5px solid #4F4742;
        }

        .heroBannerContainer {
          position: relative;
          width: 100%;
          min-height: 580px;
          overflow: hidden;
          background-color: #F9F9F9;
        }

        .bgImageWrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .fullHeroImg {
          object-fit: cover !important;
          object-position: right center !important;
        }

        .heroBody {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 580px;
          display: flex;
          align-items: center;
          padding: 60px 0 80px;
        }

        .container {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 48px;
          width: 100%;
        }

        .contentCol {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 680px;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 39px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: 0.04em;
          color: #2B2523;
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .titleLine {
          display: block;
          white-space: nowrap;
        }

        .description {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.65;
          color: #6E6763;
          margin: 0 0 36px 0;
          font-weight: 400;
        }

        .descLine {
          display: block;
        }

        .exploreLink {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .exploreLink:hover {
          opacity: 0.75;
        }

        .exploreIcon {
          display: block;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .exploreLink:hover .exploreIcon {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .heroBannerContainer,
          .heroBody {
            min-height: 500px;
          }

          .navContainer,
          .categoryNavContainer,
          .container {
            padding: 0 32px;
          }

          .categoryNavContainer {
            gap: 40px;
            overflow-x: auto;
          }

          .heroBody {
            padding: 40px 0 60px;
          }

          .contentCol {
            max-width: 100%;
          }

          .title {
            font-size: 34px;
          }

          .klasBannerText {
            font-size: 64px;
          }
        }

        @media (max-width: 640px) {
          .heroBannerContainer,
          .heroBody {
            min-height: 440px;
          }

          .topNavHeader {
            padding: 16px 0 12px;
          }

          .navLinks {
            gap: 28px;
          }

          .navItem {
            font-size: 15px;
          }

          .navContainer,
          .categoryNavContainer,
          .container {
            padding: 0 20px;
          }

          .categoryNavContainer {
            gap: 28px;
          }

          .klasBannerText {
            font-size: 46px;
          }

          .heroBody {
            padding: 20px 0 40px;
          }

          .title {
            font-size: 28px;
          }

          .description {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
