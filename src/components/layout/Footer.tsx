'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <div className={styles.brandLogo}>KLAS</div>
              <p className={styles.brandTagline}>
                Transforming Land Into <br /> Landmark Projects
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/company/klas-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/assets/linkdin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </a>
                <a
                  href="https://wa.me/919867007181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/assets/whatsapp.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Image
                    src="/assets/insta.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className={styles.linksCol}>
              <h3 className={styles.heading}>QUICK LINKS</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className={styles.contactCol}>
              <h3 className={styles.heading}>CONTACT INFO</h3>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className={styles.contactText}>
                    KLAS Group 603, Dalamal Towers <br /> Nariman Point Mumbai 400021
                  </span>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="https://wa.me/919867007181" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    +91 98670 07181
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className={styles.contactText}>
                    KLAS Group - Bizznet Unit Mohan <br /> Mill Compound Kolshet Majiwada <br /> Thane (W)
                  </span>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+919867824227" className={styles.contactLink}>
                    +91 98678 24227
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light Cream Bottom Bar */}
      <div className={styles.bottomBarWrapper}>
        <div className={styles.container}>
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © 2026 KLAS Realty . All rights reserved.
            </div>
            <div className={styles.legal}>
              <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <span className={styles.separator}>/</span>
              <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
