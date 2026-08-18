'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HomeProjectsSection.module.css';

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
    image: '/assets/our_project1.png',
    location: 'Ghodbunder Road, Thane (W)'
  },
  {
    id: 2,
    title: 'KLAS Abhinav Center',
    category: 'Retail, Commercial & IT',
    image: '/assets/our_project2.png',
    location: 'Adayar, Chennai'
  },
  {
    id: 3,
    title: 'Silverline Tower',
    category: 'Residential',
    image: '/assets/our_project3.png',
    location: 'Ghodbunder Road, Thane (W)',
    area: 'Sq. Ft 1,40,000'
  },
  {
    id: 4,
    title: 'Silverline Tech Park',
    category: 'Retail, Commercial & IT',
    image: '/assets/our_project4.png',
    location: 'Padi, Chennai',
    area: 'Sq. Ft 1,50,000'
  },
  {
    id: 5,
    title: 'KLAS Shiva Center',
    category: 'Retail, Commercial & IT',
    image: '/assets/our_project5.png',
    location: 'T Nagar, Chennai'
  },
  {
    id: 6,
    title: 'Upcoming Project',
    category: 'Retail, Commercial & IT',
    image: '/assets/our_project6.png',
    location: 'Ghodbunder Road, Thane (W)',
    area: 'Sq. Ft 300,000',
    isUpcoming: true
  },
  {
    id: 7,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/our_project3.png',
    location: 'Ghodbunder Road, Thane (W)',
    isUpcoming: true
  },
  {
    id: 8,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/our_project7.png',
    location: 'Chembur (E), Mumbai',
    isUpcoming: true
  },
  {
    id: 9,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/our_project6.png',
    location: 'Bandra (W), Mumbai',
    isUpcoming: true
  },
  {
    id: 10,
    title: 'Upcoming Project',
    category: 'Residential',
    image: '/assets/our_project7.png',
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
    <section ref={sectionRef} id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Header Row: Title & Subtitle on left with fadeInUp, Filter Pills on right */}
        <div className={styles.headerRow}>
          <div className={`${styles.titleGroup} ${isVisible ? styles.animatedTitle : ''}`}>
            <h2 className={styles.title}>Our Projects</h2>
            <p className={styles.subtitle}>
              A selection of recent work. Workspaces and homes shaped entirely around the site and the people it was built for.
            </p>
          </div>

          <div className={styles.filterGroup}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterPill} ${activeCategory === cat ? styles.activePill : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel / Cards Grid Row */}
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navArrow} ${startIndex === 0 ? styles.disabledArrow : ''}`} 
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous Projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Smooth 1-card sliding viewport */}
          <div className={styles.viewport}>
            <div 
              className={styles.sliderTrack} 
              style={{ transform: `translateX(calc(-${startIndex} * (100% + 24px) / 3))` }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className={styles.cardContainer}>
                  <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                        className={`${styles.cardImage} ${project.isUpcoming ? styles.blurredImage : ''}`}
                      />
                      {project.isUpcoming && (
                        <div className={styles.upcomingOverlay}>
                          <span>Upcoming Project</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Meta Content Below Image */}
                  <div className={styles.cardMeta}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.metaRow}>
                      <svg className={styles.metaIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className={styles.metaText}>{project.location}</span>
                    </div>

                    {project.area && (
                      <div className={styles.metaRow}>
                        <svg className={styles.metaIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16v16H4z" />
                          <path d="M4 12h8v8" />
                          <path d="M12 4v8" />
                        </svg>
                        <span className={styles.metaText}>{project.area}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navArrow} ${startIndex >= maxIndex ? styles.disabledArrow : ''}`} 
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
    </section>
  );
}
