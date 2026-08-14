'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink} onClick={closeMobileMenu}>
          <Image
            src="/assets/logo_nav.png"
            alt="KLAS Realty Logo"
            width={130}
            height={40}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.rightGroup}>
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </nav>

          <div className={styles.desktopActions}>
            <Link href="/contact" className={styles.ctaButton}>
              Contact us
            </Link>
          </div>
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
          <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link href="/contact" className={`${styles.mobileNavLink} ${styles.mobileCta}`} onClick={closeMobileMenu}>
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
