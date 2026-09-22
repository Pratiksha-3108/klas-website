/// <reference types="styled-jsx" />
'use client';

import React from 'react';
import Link from 'next/link';

export default function AnimationFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {/* Brand Column */}
          <div className="brandCol">
            <div className="brandLogo">KLAS</div>
            <p className="brandTagline">
              Illustrating Imagination<br />to Life
            </p>
            <div className="socials">
              <a
                href="https://www.linkedin.com/company/klas-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919867007181"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2zm.01 16.5c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.31A8.204 8.204 0 0 1 3.75 11.9c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.23 8.23 0 0 1 2.43 5.86c0 4.57-3.72 8.29-8.28 8.29zm4.54-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.32-.02-.45s-.57-1.37-.78-1.87c-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.12.17 1.79 2.73 4.34 3.83.61.26 1.08.42 1.45.54.61.19 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Ventures Column */}
          <div className="linksCol">
            <h3 className="heading">VENTURES</h3>
            <ul className="linkList">
              <li>
                <Link href="/">Realty</Link>
              </li>
              <li>
                <Link href="/family">Family Office</Link>
              </li>
              <li>
                <Link href="/animation">Animation</Link>
              </li>
              <li>
                <Link href="/klas-technology">Technology</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="linksCol">
            <h3 className="heading">QUICK LINKS</h3>
            <ul className="linkList">
              <li>
                <Link href="/animation">Home</Link>
              </li>
              <li>
                <Link href="/animation#journey">Journey</Link>
              </li>
              <li>
                <Link href="/animation#ips">IPs</Link>
              </li>
              <li>
                <Link href="/animation#process">Our Process</Link>
              </li>
              <li>
                <Link href="/animation#awards">Awards</Link>
              </li>
              <li>
                <Link href="/animation#newsroom">Newsroom</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="contactCol">
            <h3 className="heading">CONTACT INFO</h3>
            <div className="contactList">
              <div className="contactItem">
                <svg className="contactIcon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="contactText">
                  <strong className="boldTitle">KLAS Group 603, Dalamal Towers</strong>
                  <span className="subAddress">Nariman Point Mumbai 400021</span>
                </span>
              </div>

              <div className="contactItem">
                <svg className="contactIcon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://wa.me/919867007181" target="_blank" rel="noopener noreferrer" className="contactLink">
                  +91 98670 07181
                </a>
              </div>

              <div className="contactItem">
                <svg className="contactIcon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="contactText">
                  <strong className="boldTitle">KLAS Group - Bizznet Unit Mohan</strong>
                  <span className="subAddress">Mill Compound Kolshet Majiwada</span>
                  <span className="subAddress">Thane (W)</span>
                </span>
              </div>

              <div className="contactItem">
                <svg className="contactIcon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919867824227" className="contactLink">
                  +91 98678 24227
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background-color: #4F4742;
          color: #ffffff;
          padding: 70px 0 60px;
          font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .grid {
          display: grid;
          grid-template-columns: 2.2fr 1.1fr 1.1fr 2fr;
          gap: 48px;
          align-items: start;
        }

        /* Brand Column */
        .brandCol {
          display: flex;
          flex-direction: column;
        }

        .brandLogo {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: 42px;
          font-weight: 500;
          color: #dfbd6c;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .brandTagline {
          font-size: 19px;
          font-weight: 500;
          line-height: 1.35;
          color: #ffffff;
          margin: 18px 0 28px;
          letter-spacing: -0.01em;
        }

        .socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .socialLink {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: transform 0.25s ease, opacity 0.25s ease;
          opacity: 0.9;
        }

        .socialLink:hover {
          opacity: 1;
          transform: translateY(-2px);
          color: #dfbd6c;
        }

        /* Common Headings */
        .heading {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #c5b9ac;
          text-transform: uppercase;
          margin: 0 0 24px 0;
        }

        /* Links Column */
        .linksCol {
          display: flex;
          flex-direction: column;
        }

        .linkList {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .linkList li a {
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .linkList li a:hover {
          color: #dfbd6c;
        }

        /* Contact Column */
        .contactCol {
          display: flex;
          flex-direction: column;
        }

        .contactList {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contactItem {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contactIcon {
          color: #ffffff;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .contactText {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          line-height: 1.45;
          color: #ffffff;
        }

        .boldTitle {
          font-weight: 700;
          color: #ffffff;
          font-size: 14px;
        }

        .subAddress {
          font-weight: 400;
          color: #f0eae1;
          font-size: 14px;
        }

        .contactLink {
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
          margin-top: 1px;
        }

        .contactLink:hover {
          color: #dfbd6c;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: 1.8fr 1fr 1fr 1.8fr;
            gap: 32px;
          }
        }

        @media (max-width: 900px) {
          .footer {
            padding: 50px 0 40px;
          }

          .container {
            padding: 0 32px;
          }

          .grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 32px;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0 24px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .brandLogo {
            font-size: 36px;
          }

          .brandTagline {
            font-size: 17px;
          }
        }
      `}</style>
    </footer>
  );
}
