'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface KlasHeroProps {
  initialCategory?: 'Realty' | 'Family Office' | 'Animation' | 'Technology';
}

export default function KlasHero({ initialCategory = 'Realty' }: KlasHeroProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoryNavRef = React.useRef<HTMLDivElement>(null);

  const handleCategoryScrollLeft = () => {
    if (categoryNavRef.current) {
      categoryNavRef.current.scrollBy({ left: -140, behavior: 'smooth' });
    }
  };

  const handleCategoryScrollRight = () => {
    if (categoryNavRef.current) {
      categoryNavRef.current.scrollBy({ left: 140, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'realty', label: 'Realty', href: '/realty' },
    { id: 'family', label: 'Family Office', href: '/klas-family' },
    { id: 'animation', label: 'Animation', href: '/klas-animation' },
    { id: 'technology', label: 'Technology', href: '/klas-technology' },
  ];

  const contentMap: Record<string, { titleLines: string[]; mobileTitleLines?: string[]; descLines: string[] }> = {
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
      mobileTitleLines: ['TECHNOLOGY PURPOSE-', 'DRIVEN ALLIANCES'],
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
    'Technology': 'https://klasinfotech.com/',
  };

  const heroImageMap: Record<string, string> = {
    'Realty': '/assets/klas/klas_hero1.png',
    'Family Office': '/assets/klas-family/hero_family.png',
    'Animation': '/assets/klas-animation/animation_hero.png',
    'Technology': '/assets/klas-animation/tech_hero1.png',
  };

  const currentContent = contentMap[activeCategory as keyof typeof contentMap] || contentMap['Realty'];
  const exploreHref = exploreHrefMap[activeCategory] || '/animation';
  const heroImage = heroImageMap[activeCategory] || '/assets/klas/klas_hero1.png';

  return (
    <section className="klasHeroSection">
      {/* Top Header Navigation */}
      <header className="topNavHeader">
        <div className="navContainer">
          {/* Mobile Only Gold KLAS Logo */}
          <Link
            href="/"
            className="mobileHeaderLogo"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '38px',
              lineHeight: '100%',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              color: '#F3CD8A',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            KLAS
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobileBurgerBtn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="burgerLine"></span>
            <span className="burgerLine"></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="mobileNavDrawer">
            <nav className="mobileDrawerLinks">
              <Link href="/" className="mobileDrawerItem" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="mobileDrawerItem" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="mobileDrawerItem" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* KLAS Cormorant Garamond Text below navbar middle */}
      <div className="klasBannerContainer">
        <span className="klasBannerText">KLAS</span>
      </div>

      {/* 4 Category Words Sub-Navigation Line */}
      <div className="categoryNavWrapper">
        <button
          type="button"
          className="categoryArrowBtn left"
          onClick={handleCategoryScrollLeft}
          aria-label="Scroll left categories"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="categoryNavContainer" ref={categoryNavRef}>
          {categories.map((cat) => {
            const isActive = cat.label === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                className={`categoryTab ${isActive ? 'activeCategoryTab' : ''}`}
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

        <button
          type="button"
          className="categoryArrowBtn right"
          onClick={handleCategoryScrollRight}
          aria-label="Scroll right categories"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Main Hero Banner Container */}
      <div className="heroBannerContainer">
        {/* Background Image Spanning Full Width & Height on Desktop */}
        <div className={`bgImageWrapper category-${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}>
          <Image
            src={heroImage}
            alt="KLAS Hero Illustration"
            fill
            priority
            sizes="100vw"
            className="fullHeroImg"
          />
        </div>

        {/* Hero Content Area */}
        <div className="heroBody">
          <div className="container">
            <div className="contentCol">
              {/* Desktop Only Title */}
              <h1 className="title desktopTitle" key={`desktop-${activeCategory}`}>
                {currentContent.titleLines.map((line, lineIdx) => {
                  const wordsBeforeLine = currentContent.titleLines
                    .slice(0, lineIdx)
                    .reduce((acc, l) => acc + l.split(' ').length, 0);
                  return (
                    <span key={lineIdx} className="titleLineReveal">
                      {line.split(' ').map((word, wordIdx) => (
                        <span
                          key={wordIdx}
                          className="titleWord"
                          style={{
                            animationDelay: `${(wordsBeforeLine + wordIdx) * 0.18}s`,
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  );
                })}
              </h1>

              {/* Mobile Only Title */}
              <h1 className="title mobileTitle" key={`mobile-${activeCategory}`}>
                {(currentContent.mobileTitleLines || currentContent.titleLines).map((line, lineIdx) => {
                  const mobLinesArr = currentContent.mobileTitleLines || currentContent.titleLines;
                  const wordsBeforeLine = mobLinesArr
                    .slice(0, lineIdx)
                    .reduce((acc, l) => acc + l.split(' ').length, 0);
                  return (
                    <span key={lineIdx} className="titleLineReveal">
                      {line.split(' ').map((word, wordIdx) => (
                        <span
                          key={wordIdx}
                          className="titleWord"
                          style={{
                            animationDelay: `${(wordsBeforeLine + wordIdx) * 0.18}s`,
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  );
                })}
              </h1>

              {/* Mobile Only Hero Illustration Image */}
              <div className={`mobileHeroImgWrapper category-${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}>
                <Image
                  src={heroImage}
                  alt="KLAS Hero Illustration"
                  fill
                  priority
                  sizes="100vw"
                  className="fullHeroImg"
                />
              </div>

              <p
                className="description"
                key={`desc-${activeCategory}`}
                style={{ animationDelay: '0.8s' }}
              >
                {currentContent.descLines.map((line, idx) => (
                  <span key={idx} className="descLine">{line}</span>
                ))}
              </p>

              <div
                className="exploreBtnWrap"
                key={`explore-${activeCategory}`}
                style={{ animationDelay: '1.1s' }}
              >
                <Link
                  href={exploreHref}
                  className="exploreBtn"
                  target={exploreHref.startsWith('http') ? '_blank' : undefined}
                  rel={exploreHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="exploreBtnText">Explore</span>
                  <svg className="exploreBtnArrow" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L17 7M17 7L11 13M17 7H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
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

        :global(.mobileHeaderLogo) {
          display: none;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        :global(.navItem) {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          color: #978E89 !important;
          text-decoration: none !important;
          padding: 4px 0 !important;
          display: inline-block !important;
          transition: color 0.2s ease, font-weight 0.2s ease, opacity 0.2s ease !important;
        }

        :global(.navItem:hover) {
          color: #4F4742 !important;
          font-weight: 600 !important;
          opacity: 0.85 !important;
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
          border-bottom: 1px solid #F0EFEE;
          margin-top: 64px;
          margin-bottom: 0;
          padding-bottom: 5px;
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
          margin-bottom: 0;
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
          z-index: 2;
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
          width: 85%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .category-realty {
          width: 85%;
          right: 0;
          top: 0;
          height: 100%;
          padding-top: 8px;
        }

        .category-realty .fullHeroImg {
          object-fit: contain !important;
          object-position: right top !important;
        }

        .category-family-office {
          width: 74%;
          right: 0;
        }

        .category-animation {
          width: 66%;
          right: 6%;
          top: -4%;
          height: 100%;
        }

        .category-animation .fullHeroImg {
          object-fit: contain !important;
          object-position: right center !important;
          transform: scale(0.86) translate(-30px, -24px);
          transform-origin: right center;
        }

        .category-technology {
          width: 90%;
          right: 0;
          top: -20px;
          height: calc(100% + 20px);
        }

        .category-technology .fullHeroImg {
          object-fit: contain !important;
          object-position: right top !important;
        }

        .fullHeroImg {
          object-fit: contain !important;
          object-position: right center !important;
          mix-blend-mode: multiply;
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

        @keyframes blurReveal {
          0% {
            filter: blur(16px);
            opacity: 0;
            color: #B0AAA6;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
            color: #2B2523;
          }
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 39px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.04em;
          color: #2B2523;
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .desktopTitle {
          display: block;
        }

        .mobileTitle {
          display: none;
        }

        .titleLineReveal {
          display: block;
          white-space: nowrap;
        }

        .titleWord {
          display: inline-block;
          margin-right: 0.28em;
          filter: blur(16px);
          opacity: 0;
          color: #B0AAA6;
          animation: blurReveal 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-fill-mode: both;
        }

        .titleWord:last-child {
          margin-right: 0;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .description {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.65;
          color: #6E6763;
          margin: 0 0 36px 0;
          font-weight: 400;
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-fill-mode: both;
        }

        .descLine {
          display: block;
        }

        .exploreBtnWrap {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-fill-mode: both;
          margin-top: 8px;
          display: inline-block;
        }

        :global(.exploreBtn) {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: none;
          background: transparent;
          border: none;
          padding: 12px 24px 12px 18px;
          color: #4F4742;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: color 0.4s ease;
          cursor: pointer;
          overflow: hidden;
          margin-top: 0;
          z-index: 1;
        }

        :global(.exploreBtn::before) {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 0;
          background-color: #4F4742;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        :global(.exploreBtn:hover::before) {
          width: 100%;
        }

        :global(.exploreBtn::after) {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 0;
          width: 100%;
          background-color: #4F4742;
          transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.22s;
          z-index: -1;
        }

        :global(.exploreBtn:hover::after) {
          height: 100%;
        }

        :global(.exploreBtn:hover) {
          color: #ffffff;
          transition-delay: 0.22s;
        }

        :global(.exploreBtnArrow) {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.35s ease;
        }

        :global(.exploreBtn:hover .exploreBtnArrow) {
          transform: translateX(6px);
        }

        .mobileHeaderLogo,
        .mobileBurgerBtn,
        .mobileNavDrawer {
          display: none;
        }

        .categoryArrowBtn,
        .mobileHeroImgWrapper {
          display: none;
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

        @media (max-width: 768px) {
          .topNavHeader {
            padding: 12px 0 !important;
            border-bottom: none !important;
          }

          .navContainer {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0 20px !important;
            width: 100% !important;
          }

          .navLinks {
            display: none !important;
          }

          :global(.mobileHeaderLogo) {
            display: block !important;
            font-family: 'Times New Roman', Times, serif !important;
            font-weight: 400 !important;
            font-style: normal !important;
            font-size: 38px !important;
            line-height: 100% !important;
            letter-spacing: 0px !important;
            vertical-align: middle !important;
            color: #F3CD8A !important;
            background: transparent !important;
            text-transform: uppercase !important;
            text-decoration: none !important;
          }

          .mobileBurgerBtn {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 5px !important;
            width: 36px !important;
            height: 36px !important;
            background: transparent !important;
            border: none !important;
            cursor: pointer !important;
            padding: 0 !important;
          }

          .burgerLine {
            display: block !important;
            width: 20px !important;
            height: 2px !important;
            background-color: #4F4742 !important;
            transition: all 0.25s ease !important;
          }

          .mobileBurgerBtn.active .burgerLine:nth-child(1) {
            transform: translateY(3.5px) rotate(45deg) !important;
          }

          .mobileBurgerBtn.active .burgerLine:nth-child(2) {
            transform: translateY(-3.5px) rotate(-45deg) !important;
          }

          .mobileNavDrawer {
            display: block !important;
            background-color: #ffffff !important;
            border-bottom: 1px solid #F0EFEE !important;
            padding: 16px 20px !important;
          }

          .mobileDrawerLinks {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
          }

          .mobileDrawerItem {
            font-family: var(--font-inter), 'Inter', sans-serif !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            color: #4F4742 !important;
            text-decoration: none !important;
          }

          .klasBannerContainer {
            display: none !important;
          }

          .categoryNavWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 56px;
            padding: 0 10px 5px;
            position: relative;
          }

          .categoryNavContainer {
            padding: 0 8px;
            gap: 16px;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-snap-type: x mandatory;
            width: 100%;
            justify-content: flex-start;
          }

          .categoryNavContainer::-webkit-scrollbar {
            display: none;
          }

          .categoryTab {
            padding: 0 16px 8px 16px;
            font-size: 15px;
            scroll-snap-align: center;
            flex-shrink: 0;
          }

          .categoryArrowBtn {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: transparent;
            border: none;
            color: #756A62;
            cursor: pointer;
            flex-shrink: 0;
            z-index: 3;
            padding: 0;
          }

          .heroBannerContainer {
            min-height: auto !important;
            padding: 20px 0 36px !important;
          }

          .heroBody {
            min-height: auto !important;
            padding: 0 !important;
          }

          .contentCol {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }

          .bgImageWrapper {
            display: none !important;
          }

          .mobileHeroImgWrapper {
            order: 1 !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
            width: 100% !important;
            height: 290px !important;
            right: auto !important;
            left: 0 !important;
            top: auto !important;
            margin: 0 auto 20px auto !important;
            overflow: hidden !important;
          }

          .mobileHeroImgWrapper.category-realty,
          .mobileHeroImgWrapper.category-family-office,
          .mobileHeroImgWrapper.category-animation,
          .mobileHeroImgWrapper.category-technology {
            width: 100% !important;
            right: auto !important;
            left: 0 !important;
            top: auto !important;
            height: 290px !important;
            margin: 0 auto 20px auto !important;
          }

          .mobileHeroImgWrapper :global(img) {
            object-fit: contain !important;
            object-position: center center !important;
            margin: 0 auto !important;
          }

          .mobileHeroImgWrapper.category-realty :global(img) {
            object-fit: contain !important;
            object-position: center center !important;
            transform: scale(1.25) translateX(-68px) !important;
            transform-origin: center center !important;
          }

          .mobileHeroImgWrapper.category-family-office :global(img) {
            object-fit: contain !important;
            object-position: center center !important;
            transform: scale(1.3) translateX(-76px) !important;
            transform-origin: center center !important;
          }

          .mobileHeroImgWrapper.category-animation :global(img) {
            object-fit: contain !important;
            object-position: center center !important;
            transform: scale(1.2) translateX(-50px) !important;
            transform-origin: center center !important;
          }

          .mobileHeroImgWrapper.category-technology :global(img) {
            object-fit: contain !important;
            object-position: center center !important;
            transform: scale(1.25) translateX(-62px) !important;
            transform-origin: center center !important;
          }

          .desktopTitle {
            display: none !important;
          }

          .mobileTitle {
            display: block !important;
            order: 2 !important;
            font-size: 24px !important;
            line-height: 1.35 !important;
            margin: 0 0 16px 0 !important;
          }

          .mobileTitle .titleLineReveal {
            display: block !important;
            white-space: nowrap !important;
          }

          .description {
            order: 3 !important;
            font-size: 15px !important;
            line-height: 1.6 !important;
            margin: 0 0 24px 0 !important;
          }

          .descLine {
            display: inline !important;
          }

          .exploreBtnWrap {
            order: 4 !important;
            margin-top: 0 !important;
          }
        }

        @media (max-width: 640px) {
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
          .container {
            padding: 0 20px;
          }

          .klasBannerText {
            font-size: 46px;
          }
        }
      `}</style>
    </section>
  );
}
