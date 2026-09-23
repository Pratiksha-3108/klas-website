'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FamilyDisclaimerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className={`wrapper ${isVisible ? 'animatedIn' : ''}`}>
          {/* Header Row with Icon & Title */}
          <div className="headerRow">
            <Image
              src="/assets/klas-family/dis.png"
              alt="Disclaimer Icon"
              width={32}
              height={32}
              className="icon"
            />
            <h3 className="title">Disclaimer</h3>
          </div>

          {/* Disclaimer Text */}
          <p className="text">
            The KLAS Family Office is a private investment arm and not a registered investment adviser. We do not offer investment advisory services or products to the public. This website is intended solely for informational purposes.
          </p>
        </div>
      </div>

      <style jsx>{`
        .section {
          width: 100%;
          padding: 90px 0 20px;
          background-color: #ffffff;
        }

        .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animatedIn {
          opacity: 1;
          transform: translateY(0);
        }

        .headerRow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .icon {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .title {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 26px;
          font-weight: 700;
          color: #4A423D;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .text {
          font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: 18px;
          font-weight: 400;
          color: #8E8178;
          line-height: 1.6;
          margin: 0;
          max-width: 1100px;
        }

        @media (max-width: 1024px) {
          .section {
            padding: 70px 0 20px;
          }

          .title {
            font-size: 22px;
          }

          .text {
            font-size: 16px;
          }

          .icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 50px 0 20px;
          }

          .container {
            padding: 0 24px;
          }

          .title {
            font-size: 20px;
          }

          .text {
            font-size: 15px;
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
}
