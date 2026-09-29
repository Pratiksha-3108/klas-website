'use client';

import React from 'react';

export default function TermsContent() {
  return (
    <main className="termsMain">
      <div className="container">
        <div className="headerBlock">
          <h1 className="title">Terms &amp; Conditions</h1>
          <div className="metaRow">
            <span>Effective Date: 29 September 2026</span>
            <span className="dot">•</span>
            <span>Last Updated: 29 September 2026</span>
          </div>
        </div>

        <div className="contentCard">
          <section className="sectionBlock">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this (&ldquo;Website&rdquo;), you agree to comply with and be bound by these Terms &amp; Conditions (&ldquo;Terms&rdquo;). If you do not agree with these Terms, please discontinue use of the Website immediately.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>2. About KLAS Group</h2>
            <p>
              KLAS Group is a diversified Indian business conglomerate operating across Real Estate, Capital Markets, Technology, and Animation.
            </p>
            <p>
              This Website is designed to provide information about our divisions, partnerships, and corporate updates.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>3. Permitted Use</h2>
            <p>
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You must not:
            </p>
            <ul className="list">
              <li>Use the Website for fraudulent or malicious activity</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Copy, reproduce, or modify Website content without permission</li>
              <li>Upload or transmit any harmful code, viruses, or malicious software</li>
            </ul>
          </section>

          <section className="sectionBlock">
            <h2>4. Intellectual Property</h2>
            <p>
              All materials on this Website, including but not limited to text, images, graphics, icons, videos, design layout, and logos, are the property of KLAS Group or its affiliates and are protected by intellectual property laws.
            </p>
            <p>
              You may not copy, distribute, reproduce, or use any content for commercial purposes without prior written consent from KLAS Group.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>5. Third-Party Links</h2>
            <p>
              This Website may contain links to third-party websites for informational purposes.
            </p>
            <p>
              KLAS Group is not responsible for the content, accuracy, or practices of any third-party sites. Visiting external websites linked from this Website is at your own discretion and risk.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The Website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
            <p>
              KLAS Group makes no warranties or representations of any kind, express or implied, about the accuracy, reliability, or completeness of the Website&apos;s content or services.
            </p>
            <p>
              We reserve the right to modify or remove content without prior notice.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, KLAS Group shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to:
            </p>
            <ul className="list">
              <li>Your access to or use of the Website,</li>
              <li>Any inaccuracy or omission in content,</li>
              <li>Any unauthorized access to or alteration of data,</li>
              <li>Any other matter relating to the Website.</li>
            </ul>
            <p>
              This includes loss of revenue, data, business opportunities, or goodwill.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless KLAS Group, its affiliates, officers, employees, and partners from any claims, damages, liabilities, costs, or expenses resulting from your violation of these Terms or misuse of the Website.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>9. Termination</h2>
            <p>
              KLAS Group reserves the right to restrict or terminate your access to the Website at any time without prior notice, for any conduct that we believe violates these Terms or is harmful to our business or reputation.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <p>
              All disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="sectionBlock">
            <h2>11. Changes to These Terms</h2>
            <p>
              KLAS Group may update these Terms periodically without prior notice. Any changes will be effective immediately upon posting on this page. Continued use of the Website after such updates will signify your acceptance of the revised Terms.
            </p>
          </section>

          <section className="sectionBlock contactBlock">
            <h2>12. Contact Information</h2>
            <p>
              For questions or legal inquiries regarding these Terms &amp; Conditions, please contact:
            </p>
            <div className="contactCard">
              <strong className="companyName">KLAS Group</strong>
              <p>Mumbai, Maharashtra, India</p>
              <p>Email: <a href="mailto:info@klasgroup.com" className="link">info@klasgroup.com</a></p>
              <p>Phone: <a href="tel:+91 9867007181" className="link">+1 (009) 544-7818</a></p>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .termsMain {
          padding: 150px 0 80px;
          background-color: #FFFFFF;
          min-height: 100vh;
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .headerBlock {
          text-align: left;
          margin-bottom: 48px;
        }

        .badge {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #8C7B70;
          background-color: #EFECE8;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .title {
          font-family: var(--font-sans);
          font-size: 44px;
          font-weight: 700;
          color: #3B3432;
          line-height: 1.2;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
        }

        .metaRow {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: #6E6763;
        }

        .dot {
          color: #B5AEA7;
        }

        .contentCard {
          background-color: transparent;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          border: none;
        }

        .sectionBlock {
          margin-bottom: 40px;
        }

        .sectionBlock:last-child {
          margin-bottom: 0;
        }

        .sectionBlock h2 {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 600;
          color: #3B3432;
          margin: 0 0 14px;
          line-height: 1.3;
          border-bottom: 1px solid #F0ECE7;
          padding-bottom: 10px;
        }

        .sectionBlock p {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: #59524D;
          margin: 0 0 12px;
        }

        .sectionBlock p:last-child {
          margin-bottom: 0;
        }

        .list {
          margin: 12px 0 16px 20px;
          padding: 0;
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: #59524D;
        }

        .list li {
          margin-bottom: 8px;
        }

        .contactCard {
          background-color: #F8F6F3;
          border-radius: 12px;
          padding: 24px 28px;
          margin-top: 16px;
          border: 1px solid #EAE5DF;
        }

        .companyName {
          display: block;
          font-family: var(--font-sans);
          font-size: 18px;
          color: #3B3432;
          margin-bottom: 8px;
        }

        .contactCard p {
          font-size: 15px;
          color: #6E6763;
          margin: 0 0 4px !important;
        }

        .link {
          color: #403835;
          text-decoration: underline;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .link:hover {
          color: #8C7B70;
        }

        @media (max-width: 768px) {
          .termsMain {
            padding: 90px 0 50px;
          }

          .title {
            font-size: 32px;
          }

          .metaRow {
            flex-direction: column;
            gap: 4px;
          }

          .dot {
            display: none;
          }

          .contentCard {
            padding: 28px 20px;
            border-radius: 12px;
          }

          .sectionBlock h2 {
            font-size: 19px;
          }

          .sectionBlock p,
          .list {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
