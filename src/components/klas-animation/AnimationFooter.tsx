/// <reference types="styled-jsx" />
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AnimationFooter() {
  return (
    <footer className="footer">
      <div className="mainFooter">
        <div className="container">
          <div className="grid">
            {/* Brand Column */}
            <div className="brandCol">
              <Link
                href="/"
                className="brandLogo"
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontSize: '46px',
                  fontWeight: 500,
                  color: '#F3CD8A',
                  letterSpacing: '2px',
                  marginBottom: '16px',
                  lineHeight: 1,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                KLAS
              </Link>
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
                  <Image
                    src="/assets/klas-realty/linkdin.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="socialIconImage"
                  />
                </a>
                <a
                  href="https://wa.me/919867007181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/assets/klas-realty/whatsapp.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="socialIconImage"
                  />
                </a>
                <a
                  href="https://www.instagram.com/silvertoonstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  aria-label="Instagram"
                >
                  <Image
                    src="/assets/klas-realty/insta.png"
                    alt="Instagram"
                    width={22}
                    height={22}
                    className="socialIconImage"
                  />
                </a>
              </div>
            </div>

            {/* Ventures Column */}
            <div className="linksCol">
              <h3 className="heading">VENTURES</h3>
              <ul className="linkList">
                <li>
                  <Link href="/realty">Realty</Link>
                </li>
                <li>
                  <Link href="/family">Family Office</Link>
                </li>
                <li>
                  <Link href="/animation">Animation</Link>
                </li>
                <li>
                  <a href="https://klasinfotech.com/" target="_blank" rel="noopener noreferrer">
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="linksCol">
              <h3 className="heading">QUICK LINKS</h3>
              <ul className="linkList">
                <li>
                  <Link href="/animation#hero">Home</Link>
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
                  <Link href="/animation/newsroom">Newsroom</Link>
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
                  <a href="tel:+919867007181" className="contactLink">
                    +91 98670 07181
                  </a>
                </div>

                <div className="contactItem">
                  <svg className="contactIcon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="contactText">
                    <strong className="boldTitle">KLAS Group - Bizznet Unit</strong>
                    <span className="subAddress">Mohan Mill Compound Kolshet Majiwada</span>
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
      </div>

      {/* Bottom Bar */}
      <div className="bottomBarWrapper">
        <div className="container">
          <div className="bottomBar">
            <div className="copyright">© 2026 KLAS Animation . All rights reserved.</div>
            <div className="legal">
              <Link href="/privacy" className="legalLink">Privacy Policy</Link>
              <span className="separator">/</span>
              <Link href="/terms" className="legalLink">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          padding: 0;
          background: transparent;
          font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .mainFooter {
          background-color: #4F4742;
          color: #ffffff;
          padding: 70px 0 60px;
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

        :global(.brandLogo) {
          font-family: 'Times New Roman', Times, serif !important;
          font-size: 46px !important;
          font-weight: 500 !important;
          color: #F3CD8A !important;
          letter-spacing: 2px !important;
          margin-bottom: 16px !important;
          line-height: 1 !important;
          text-decoration: none !important;
          display: inline-block !important;
          transition: opacity 0.2s ease !important;
        }

        :global(.brandLogo:hover) {
          opacity: 0.9 !important;
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
          width: 22px;
          height: 22px;
          color: #ffffff;
          transition: transform 0.25s ease, opacity 0.25s ease;
          opacity: 0.9;
        }

        .socialLink:hover {
          opacity: 1;
          transform: translateY(-2px);
          color: #dfbd6c;
        }

        .socialIconImage {
          width: 22px;
          height: 22px;
          object-fit: contain;
          display: block;
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

        .bottomBarWrapper {
          background-color: #FFFFFF !important;
          padding: 18px 0;
          margin-top: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        .bottomBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: #55504C;
        }

        .legalLink {
          color: #55504C;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legalLink:hover {
          color: #111111;
        }

        .separator {
          margin: 0 8px;
          color: #A8A29E;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: 1.8fr 1fr 1fr 1.8fr;
            gap: 32px;
          }
        }

        @media (max-width: 900px) {
          .mainFooter {
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

          .bottomBar {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          :global(.brandLogo) {
            font-size: 36px !important;
          }

          .brandTagline {
            font-size: 17px;
          }
        }
      `}</style>
    </footer>
  );
}
