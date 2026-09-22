'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldHideHeader =
    pathname === '/' ||
    pathname?.startsWith('/family') ||
    pathname?.startsWith('/klas-family') ||
    pathname?.startsWith('/animation') ||
    pathname?.startsWith('/klas-animation') ||
    pathname?.startsWith('/klas-technology') ||
    pathname?.startsWith('/klas');

  if (shouldHideHeader) {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/realty" className={styles.realtyLogo} onClick={closeMobileMenu}>
          Realty
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.rightGroup}>
          <nav className={styles.desktopNav}>
            <Link href="/realty" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
            <Link href="/contact" className={styles.contactPill}>
              Contact us
            </Link>
          </nav>
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerActive : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/realty" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link href="/contact" className={styles.mobileContactPill} onClick={closeMobileMenu}>
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
