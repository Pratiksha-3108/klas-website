/// <reference types="styled-jsx" />
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { newsroomData, NewsroomItem } from '@/data/newsroomData';

const categories = ['ALL', 'ANIMATION', 'BOX OFFICE', 'CORPORATE', 'RECOGNITION', 'MEDIA'] as const;

export default function NewsroomContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Featured top 3 items
  const featuredItems = useMemo(() => {
    return newsroomData.filter(item => item.isFeatured).slice(0, 3);
  }, []);

  // Filtered news items based on Category & Search
  const filteredItems = useMemo(() => {
    return newsroomData.filter(item => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category.toUpperCase() === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.publisher.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="newsroomPage">
      <div className="newsroomContainer">
        {/* Main Title Section */}
        <header className="pageHeader">
          <h1 className="pageTitle">NEWSROOM</h1>
          <p className="pageSubtitle">Get the latest news and updates about KLAS.</p>
        </header>

        {/* Featured Top News Section: KLAS IN THE NEWS */}
        {featuredItems.length > 0 && (
          <section className="featuredSection">
            <h2 className="sectionTitle">KLAS IN THE NEWS</h2>
            <div className="featuredList">
              {featuredItems.map((item, index) => (
                <article key={item.id} className="featuredItem">
                  <div className="featuredMeta">
                    {item.date} &bull; {item.publisher}
                  </div>
                  <h3 className="featuredTitle">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p className="featuredExcerpt">{item.excerpt}</p>
                  {index < featuredItems.length - 1 && <div className="divider" />}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All News Section with Filter Pills and Search */}
        <section className="allNewsSection">
          <h2 className="sectionTitle">ALL NEWS</h2>

          {/* Filter Bar: Categories + Search */}
          <div className="filterBar">
            <div className="pillList">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(12);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="searchBox">
              <input
                type="text"
                placeholder="SEARCH"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="searchInput"
              />
              <svg
                className="searchIcon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* News Cards Grid */}
          {displayedItems.length > 0 ? (
            <div className="newsGrid">
              {displayedItems.map(item => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="newsCard"
                >
                  <div className="cardMeta">
                    {item.date} &bull; {item.publisher}
                  </div>
                  <h3 className="cardTitle">{item.title}</h3>
                  <p className="cardExcerpt">{item.excerpt}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="noResults">
              <p>No news articles found matching your filter.</p>
            </div>
          )}

          {/* Load More & Pagination Bar */}
          <div className="paginationBar">
            {visibleCount < filteredItems.length && (
              <button
                type="button"
                className="seeMoreBtn"
                onClick={() => setVisibleCount(prev => prev + 12)}
              >
                SEE MORE
              </button>
            )}
            <span className="showingText">
              SHOWING {Math.min(displayedItems.length, filteredItems.length)} OF{' '}
              {filteredItems.length}
            </span>
          </div>
        </section>
      </div>

      <style jsx>{`
        .newsroomPage {
          background-color: #ffffff;
          color: #22201e;
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 100px;
          font-family: var(--font-montserrat), 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .newsroomContainer {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Page Header */
        .pageHeader {
          margin-bottom: 56px;
        }

        .pageTitle {
          font-family: var(--font-serif), 'Montserrat', Georgia, serif;
          font-size: 38px;
          font-weight: 500;
          color: #8c7355;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pageSubtitle {
          font-family: var(--font-sans), 'Montserrat', sans-serif;
          font-size: 17px;
          font-style: italic;
          color: #6e6660;
          font-weight: 400;
        }

        /* Section Title Common */
        .sectionTitle {
          font-family: var(--font-serif), 'Montserrat', Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #8c7355;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        /* Featured Section */
        .featuredSection {
          margin-bottom: 72px;
        }

        .featuredList {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .featuredItem {
          position: relative;
          padding-bottom: 24px;
        }

        .featuredMeta {
          font-size: 12px;
          font-weight: 600;
          color: #8c7355;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .featuredTitle {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
          color: #2b2623;
          margin-bottom: 10px;
        }

        .featuredTitle a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .featuredTitle a:hover {
          color: #8c7355;
        }

        .featuredExcerpt {
          font-size: 14px;
          font-style: italic;
          line-height: 1.6;
          color: #756a62;
          max-width: 900px;
        }

        .divider {
          margin-top: 28px;
          height: 1px;
          background-color: #ebe4dd;
          width: 100%;
        }

        /* Filter & Search Bar */
        .allNewsSection {
          margin-top: 40px;
        }

        .filterBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0eae3;
        }

        .pillList {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          padding: 8px 20px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid #d6cec5;
          background-color: transparent;
          color: #6e6660;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pill:hover {
          border-color: #8c7355;
          color: #8c7355;
        }

        .pill.active {
          background-color: #8c7355;
          border-color: #8c7355;
          color: #ffffff;
        }

        .searchBox {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 260px;
        }

        .searchInput {
          width: 100%;
          padding: 10px 40px 10px 16px;
          border: 1px solid #e0d9d2;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #2b2623;
          background-color: #fcfbf9;
          outline: none;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .searchInput::placeholder {
          color: #a39b94;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        .searchInput:focus {
          border-color: #8c7355;
          background-color: #ffffff;
        }

        .searchIcon {
          position: absolute;
          right: 14px;
          color: #a39b94;
          pointer-events: none;
        }

        /* News Cards Grid */
        .newsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        @media (max-width: 1024px) {
          .newsGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .newsGrid {
            grid-template-columns: 1fr;
          }

          .filterBar {
            flex-direction: column;
            align-items: stretch;
          }

          .searchBox {
            width: 100%;
          }
        }

        .newsCard {
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          border: 1px solid #ebe4dd;
          border-radius: 6px;
          background-color: #ffffff;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .newsCard:hover {
          transform: translateY(-3px);
          border-color: #c5a880;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
        }

        .cardMeta {
          font-size: 11px;
          font-weight: 700;
          color: #8c7355;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .cardTitle {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;
          color: #2b2623;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
        }

        .newsCard:hover .cardTitle {
          color: #8c7355;
        }

        .cardExcerpt {
          font-size: 13px;
          font-style: italic;
          line-height: 1.6;
          color: #756a62;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .noResults {
          padding: 60px 0;
          text-align: center;
          color: #756a62;
          font-size: 15px;
          font-style: italic;
        }

        /* Pagination & Showing Status */
        .paginationBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid #f0eae3;
        }

        .seeMoreBtn {
          padding: 10px 24px;
          border: 1px solid #8c7355;
          background-color: transparent;
          color: #8c7355;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .seeMoreBtn:hover {
          background-color: #8c7355;
          color: #ffffff;
        }

        .showingText {
          font-size: 12px;
          font-weight: 600;
          color: #8c7355;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
