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

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMobileMenu();
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      if (pathname === '/realty' || pathname?.startsWith('/realty')) {
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
    }
  };

  const isAboutOrContactPage =
    pathname === '/about' ||
    pathname === '/contact' ||
    pathname === '/privacy' ||
    pathname === '/terms';

  const realtyNavLinks = [
    { label: 'Home', href: '/realty#home' },
    { label: 'About', href: '/realty#about' },
    { label: 'Projects', href: '/realty#projects' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {isAboutOrContactPage ? (
          <Link href="/" className={styles.goldLogo} onClick={closeMobileMenu}>
            KLAS
          </Link>
        ) : (
          <Link
            href="/realty#home"
            className={styles.realtyLogo}
            onClick={(e) => handleNavLinkClick(e, '/realty#home')}
          >
            Realty
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className={styles.rightGroup}>
          <nav className={styles.desktopNav}>
            {isAboutOrContactPage ? (
              <>
                <Link href="/" className={styles.aboutNavLink}>
                  Home
                </Link>
                <Link href="/about" className={styles.aboutNavLink}>
                  About
                </Link>
                <Link href="/contact" className={styles.aboutNavLink}>
                  Contact
                </Link>
              </>
            ) : (
              <>
                {realtyNavLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
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
          {isAboutOrContactPage ? (
            <>
              <Link href="/" className={styles.aboutMobileNavLink} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className={styles.aboutMobileNavLink} onClick={closeMobileMenu}>
                About
              </Link>
              <Link href="/contact" className={styles.aboutMobileNavLink} onClick={closeMobileMenu}>
                Contact
              </Link>
            </>
          ) : (
            <>
              {realtyNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
