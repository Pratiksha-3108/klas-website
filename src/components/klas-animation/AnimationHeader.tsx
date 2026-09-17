'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnimationHeader() {
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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link
          href="/animation"
          className="logo"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '40px',
            fontWeight: 700,
            color: '#4F4742',
            lineHeight: '100%',
            letterSpacing: '0%',
            textDecoration: 'none',
          }}
        >
          Animation
        </Link>

        <nav className="nav">
          <Link href="/animation" className="navLink active">
            Home
          </Link>
          <Link href="/animation#journey" className="navLink">
            Journey
          </Link>
          <Link href="/animation#ips" className="navLink">
            IPs
          </Link>
          <Link href="/animation#process" className="navLink">
            Our Process
          </Link>
          <Link href="/animation#awards" className="navLink">
            Awards
          </Link>
          <Link href="/animation#newsroom" className="navLink">
            Newsroom
          </Link>
        </nav>

        <button
          className={`burger ${isMobileMenuOpen ? 'burgerActive' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobileNav">
          <Link href="/animation" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/animation#journey" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Journey
          </Link>
          <Link href="/animation#ips" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            IPs
          </Link>
          <Link href="/animation#process" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Our Process
          </Link>
          <Link href="/animation#awards" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Awards
          </Link>
          <Link href="/animation#newsroom" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Newsroom
          </Link>
        </div>
      )}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background-color: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
        }

        .scrolled {
          height: 66px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: 'Montserrat', var(--font-montserrat), sans-serif !important;
          font-size: 42px;
          font-weight: 800;
          line-height: 100%;
          letter-spacing: 0%;
          color: #4F4742;
          text-decoration: none;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .navLink {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 15px;
          font-weight: 600;
          color: #4A423D;
          text-decoration: none;
          transition: color 0.25s ease;
          position: relative;
          padding: 4px 0;
        }

        .navLink::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #4A423D;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navLink:hover {
          color: #111111;
        }

        .navLink:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .burger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .burger span {
          width: 100%;
          height: 2px;
          background-color: #4A423D;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobileNav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          padding: 20px 32px;
          gap: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .mobileNavLink {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 16px;
          font-weight: 500;
          color: #4A423D;
          text-decoration: none;
        }

        @media (max-width: 992px) {
          .header {
            height: 70px;
          }

          .scrolled {
            height: 60px;
          }

          .container {
            padding: 0 24px;
          }

          .nav {
            display: none;
          }

          .burger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
