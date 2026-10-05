'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/animation') || pathname?.startsWith('/klas-animation')) {
    return null;
  }

  const isFamily = pathname?.startsWith('/family') || pathname?.startsWith('/klas-family');
  const isRealty = pathname?.startsWith('/realty');

  const tagline = isFamily ? (
    <>
      Capital Stewarded for <br /> Generations
    </>
  ) : isRealty ? (
    <>
      Transforming Land Into <br /> Landmark Projects
    </>
  ) : (
    'Vision To Legacy'
  );

  const quickLinks = isFamily
    ? [
        { label: 'Home', href: '/family#home' },
        { label: 'About', href: '/family#about' },
        { label: 'Investment Approach', href: '/family#investment-approach' },
        { label: 'Values', href: '/family#values' },
        { label: 'Focus Area', href: '/family#focus-area' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ];

  const copyrightText = isFamily
    ? '© 2026 KLAS Family . All rights reserved.'
    : '© 2026 KLAS Realty . All rights reserved.';

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      if (hash === 'home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', href);
        return;
      }
      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.brandLogo}>
                KLAS
              </Link>
              <p className={styles.brandTagline}>{tagline}</p>
              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/company/klas-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/assets/klas-realty/linkdin.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
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
                    src="/assets/klas-realty/whatsapp.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className={styles.socialIconImage}
                  />
                </a>
                <a
                  href="https://www.instagram.com/silvertoonstudios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Image
                    src="/assets/klas-realty/insta.png"
                    alt="Instagram"
                    width={22}
                    height={22}
                    className={styles.socialIconImage}
                  />
                </a>
              </div>
            </div>

            {/* Ventures Column */}
            <div className={styles.linksCol}>
              <h3 className={styles.heading}>VENTURES</h3>
              <ul className={styles.linkList}>
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
            <div className={styles.linksCol}>
              <h3 className={styles.heading}>QUICK LINKS</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleQuickLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className={styles.contactCol}>
              <h3 className={styles.heading}>CONTACT INFO</h3>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className={styles.contactText}>
                    <strong>KLAS Group 603, Dalamal Towers</strong> <br /> Nariman Point Mumbai 400021
                  </span>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+919867007181" className={styles.contactLink}>
                    +91 98670 07181
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className={styles.contactText}>
                    <strong>KLAS Group - Bizznet Unit</strong> <br /> Mohan Mill Compound Kolshet Majiwada <br /> Thane (W)
                  </span>
                </div>

                <div className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Pure White Bottom Bar */}
      <div className={styles.bottomBarWrapper}>
        <div className={styles.container}>
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>{copyrightText}</div>
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
