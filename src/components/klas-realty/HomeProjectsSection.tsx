'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  area?: string;
  isUpcoming?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'KLAS Logistics Center',
    category: 'Warehousing',
    image: '/assets/klas-realty/our_project1.png',
    location: 'Ghodbunder Road, Thane (W)'
  },
  {
    id: 2,
    title: 'KLAS Abhinav Center',
    category: 'Retail, Commercial & IT',
    image: '/assets/klas-realty/our_project2.png',
    location: 'Adayar, Chennai'
  },
  {
    id: 3,
    title: 'Silverline Tower',
    category: 'Residential',
    image: '/assets/klas-realty/our_project3.png',
    location: 'Ghodbunder Road, Thane (W)',
    area: 'Sq. Ft 1,40,000'
  },
  {
    id: 4,
    title: 'Silverline Tech Park',
    category: 'Retail, Commercial & IT',
    image: '/assets/klas-realty/our_project4.png',
    location: 'Padi, Chennai',
    area: 'Sq. Ft 1,50,000'
  },
  {
    id: 5,
    title: 'KLAS Shiva Center',
    category: 'Retail, Commercial & IT',
    image: '/assets/klas-realty/our_project5.png',
    location: 'T Nagar, Chennai'
  },
  {
    id: 6,
    title: 'Upcoming Project',
    category: 'Retail, Commercial & IT',
    image: '/assets/klas-realty/our_project6.png',
    location: 'Ghodbunder Road, Thane (W)',
    area: 'Sq. Ft 300,000',
    isUpcoming: true
  },
  {
    id: 7,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/klas-realty/our_project3.png',
    location: 'Ghodbunder Road, Thane (W)',
    isUpcoming: true
  },
  {
    id: 8,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/klas-realty/our_project7.png',
    location: 'Chembur (E), Mumbai',
    isUpcoming: true
  },
  {
    id: 9,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/klas-realty/our_project6.png',
    location: 'Bandra (W), Mumbai',
    isUpcoming: true
  },
  {
    id: 10,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/klas-realty/our_project7.png',
    location: 'South Mumbai',
    isUpcoming: true
  }
];

export default function HomeProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Residential', 'Retail, Commercial & IT', 'Warehousing'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeCategory);

  const maxIndex = Math.max(0, filteredProjects.length - 3);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="container">
        {/* Header Row: Title & Subtitle on left with fadeInUp, Filter Pills on right */}
        <div className="headerRow">
          <div className={`titleGroup ${isVisible ? 'animatedTitle' : ''}`}>
            <h2 className="title">Our Projects</h2>
            <p className="subtitle">
              A selection of recent work. Workspaces and homes shaped entirely around the site and the people it was built for.
            </p>
          </div>

          <div className="filterGroup">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filterPill ${activeCategory === cat ? 'activePill' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel / Cards Grid Row */}
        <div className="carouselContainer">
          <button 
            className={`navArrow ${startIndex === 0 ? 'disabledArrow' : ''}`} 
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous Projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Smooth 1-card sliding viewport */}
          <div className="viewport">
            <div 
              className="sliderTrack" 
              style={{ transform: `translateX(calc(-${startIndex} * (100% + 24px) / 3))` }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="cardContainer">
                  <div className="card">
                    <div className="imageWrapper">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                        className={`cardImage ${project.isUpcoming ? 'blurredImage' : ''}`}
                      />
                      {project.isUpcoming && (
                        <div className="upcomingOverlay">
                          <span>Upcoming Project</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Meta Content Below Image */}
                  <div className="cardMeta">
                    <h3 className="projectTitle">{project.title}</h3>
                    <div className="metaRow">
                      <svg className="metaIcon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="metaText">{project.location}</span>
                    </div>

                    {project.area && (
                      <div className="metaRow">
                        <svg className="metaIcon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16v16H4z" />
                          <path d="M4 12h8v8" />
                          <path d="M12 4v8" />
                        </svg>
                        <span className="metaText">{project.area}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`navArrow ${startIndex >= maxIndex ? 'disabledArrow' : ''}`} 
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next Projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 80px 0 120px;
          background-color: #FFFFFF;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .headerRow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 56px;
        }

        .titleGroup {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          text-align: left;
          padding-left: 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .animatedTitle {
          opacity: 1;
          transform: translateY(0);
        }

        .title {
          font-family: var(--font-sans);
          font-size: 44px;
          font-weight: 600;
          color: #3B3432;
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin: 0;
          text-align: left;
        }

        .subtitle {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.5;
          color: #6E6763;
          max-width: 520px;
          margin: 0;
          padding: 0;
          border: none;
          text-align: left;
        }

        .filterGroup {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .filterPill {
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 500;
          font-family: var(--font-sans);
          color: #3B3432;
          background-color: transparent;
          border: 1px solid rgba(59, 52, 50, 0.3);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filterPill:hover {
          border-color: #3B3432;
          background-color: rgba(59, 52, 50, 0.04);
        }

        .activePill {
          background-color: #403835;
          color: #FFFFFF;
          border-color: #403835;
        }

        .activePill:hover {
          background-color: #2E2826;
          border-color: #2E2826;
        }

        /* Carousel Layout */
        .carouselContainer {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .navArrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          color: #3B3432;
          background: transparent;
          border: none;
          cursor: pointer;
          margin-top: 140px; /* Aligns with center of images */
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }

        .navArrow:hover {
          color: var(--accent-dark);
          transform: scale(1.15);
        }

        .disabledArrow {
          opacity: 0.3;
          cursor: not-allowed;
          transform: none !important;
        }

        .viewport {
          overflow: hidden;
          width: 100%;
          flex: 1;
        }

        .sliderTrack {
          display: flex;
          gap: 24px;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .cardContainer {
          flex: 0 0 calc((100% - 48px) / 3);
          display: flex;
          flex-direction: column;
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          aspect-ratio: 4 / 3;
          background-color: #E2DDD8;
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .cardImage {
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .blurredImage {
          filter: blur(3px) brightness(0.65);
          transform: scale(1.04);
        }

        .card:hover .cardImage {
          transform: scale(1.04);
        }

        .upcomingOverlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          pointer-events: none;
        }

        .upcomingOverlay span {
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: -0.2px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
        }

        /* Card Meta Content Below Image */
        .cardMeta {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
        }

        .projectTitle {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 600;
          color: #3B3432;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .metaRow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .metaIcon {
          color: #6E6763;
          flex-shrink: 0;
        }

        .metaText {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          color: #6E6763;
        }

        @media (max-width: 1024px) {
          .headerRow {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          
          .titleGroup {
            padding-left: 0;
          }

          .filterGroup {
            justify-content: flex-start;
          }

          .cardContainer {
            flex: 0 0 calc((100% - 24px) / 2);
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 32px;
          }

          .subtitle {
            max-width: 100%;
          }

          .cardContainer {
            flex: 0 0 100%;
          }

          .navArrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
