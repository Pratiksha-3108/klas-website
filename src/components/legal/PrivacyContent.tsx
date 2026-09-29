'use client';

import React from 'react';

export default function PrivacyContent() {
  return (
    <main className="privacyMain">
      <div className="container">
        <div className="headerBlock">
          <h1 className="mainTitle">Privacy Policy</h1>
        </div>

        <div className="contentCard">
          <section className="sectionBlock">
            <h2 className="sectionTitle">1. Introduction</h2>
            <p className="text">
              KLAS Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) values your privacy and is committed to protecting your personal information.
            </p>
            <p className="text">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our (&ldquo;Website&rdquo;) or engage with us through our contact forms, emails, or other communication channels.
            </p>
            <p className="text">
              By using our Website, you agree to the terms described in this Privacy Policy. If you do not agree, please refrain from using our Website.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">2. Information We Collect</h2>
            <h3 className="subHeading">a. Personal Information</h3>
            <p className="text">
              We may collect the following personal details that you voluntarily provide when contacting us:
            </p>
            <ul className="list">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Business Inquiry Details or Message Content</li>
            </ul>

            <h3 className="subHeading">b. Non-Personal Information</h3>
            <p className="text">
              We may automatically collect non-identifiable information such as:
            </p>
            <ul className="list">
              <li>Browser type and version</li>
              <li>Device information (desktop, mobile, tablet)</li>
              <li>IP address and approximate location</li>
              <li>Pages visited, duration of visit, and site navigation data</li>
            </ul>
            <p className="text">
              This helps us understand user behavior and improve our website&apos;s performance.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">3. How We Use Your Information</h2>
            <p className="text">
              We use your information for the following purposes:
            </p>
            <ul className="list">
              <li>To respond to inquiries or requests submitted via our contact form</li>
              <li>To share information about our services, business divisions, and partnerships</li>
              <li>To improve our website functionality and user experience</li>
              <li>To conduct analytics, performance tracking, and security monitoring</li>
              <li>To comply with applicable laws and legal obligations</li>
            </ul>
            <p className="text">
              We will not use your personal data for any purpose unrelated to the reason it was collected without your consent.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">4. Cookies and Tracking</h2>
            <p className="text">
              Our Website may use cookies and similar technologies to enhance your browsing experience. Cookies are small text files stored on your device to remember user preferences and analyze website traffic.
            </p>
            <p className="text">
              You may choose to disable cookies through your browser settings, but this could affect some parts of the Website&apos;s functionality.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">5. Data Sharing and Disclosure</h2>
            <p className="text">
              KLAS Group does not sell or rent your personal data. However, your information may be shared with:
            </p>
            <ul className="list">
              <li><strong>Service Providers:</strong> Who assist in website maintenance, analytics, or communications (under strict confidentiality agreements).</li>
              <li><strong>Legal Authorities:</strong> When required by law or legal proceedings.</li>
              <li><strong>Business Partners:</strong> In limited cases related to collaborations or joint ventures, ensuring compliance with privacy standards.</li>
            </ul>
            <p className="text">
              All data sharing is done responsibly and only when necessary.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">6. Data Protection and Security</h2>
            <p className="text">
              We implement appropriate administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text">
              While we take these precautions seriously, please note that no online data transmission can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">7. Your Rights</h2>
            <p className="text">
              As per Indian data protection laws, you have the right to:
            </p>
            <ul className="list">
              <li>Access the information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Withdraw consent to processing (where applicable)</li>
              <li>Opt out of marketing or newsletters at any time</li>
            </ul>
            <p className="text">
              To exercise any of these rights, contact us at <a href="mailto:info@klasgroup.com" className="link">info@klasgroup.com</a>.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">8. Third-Party Links</h2>
            <p className="text">
              Our Website may contain links to external or third-party sites. KLAS Group is not responsible for the privacy practices, data handling, or content of these external websites. Please review their privacy policies when visiting such sites.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">9. Data Retention</h2>
            <p className="text">
              We retain your personal data only for as long as necessary to fulfill the purpose it was collected for, or as required by law, whichever is longer.
            </p>
          </section>

          <section className="sectionBlock">
            <h2 className="sectionTitle">10. Policy Updates</h2>
            <p className="text">
              KLAS Group reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with the revised effective date. Continued use of the Website after updates implies acceptance of the new terms.
            </p>
          </section>

          <section className="sectionBlock contactBlock">
            <h2 className="sectionTitle">11. Contact Us</h2>
            <p className="text">
              For questions or concerns about this Privacy Policy, please contact:
            </p>
            <div className="contactCard">
              <strong className="companyName">KLAS Group</strong>
              <p className="cardText">Mumbai, Maharashtra, India</p>
              <p className="cardText">Email: <a href="mailto:info@klasgroup.com" className="link">info@klasgroup.com</a></p>
              <p className="cardText">Phone: <a href="tel:+91 9867007181" className="link">+1 (009) 544-7818</a></p>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .privacyMain {
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
          color: #756A62;
          background-color: #F8F6F3;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .mainTitle {
          font-family: var(--font-sans);
          font-size: 44px;
          font-weight: 700;
          color: #4F4742;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.5px;
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

        .sectionTitle {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 600;
          color: #4F4742;
          margin: 0 0 14px;
          line-height: 1.3;
          border-bottom: 1px solid #F0EAE5;
          padding-bottom: 10px;
        }

        .subHeading {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          color: #4F4742;
          margin: 20px 0 10px;
        }

        .text {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: #756A62;
          margin: 0 0 12px;
        }

        .text:last-child {
          margin-bottom: 0;
        }

        .list {
          margin: 12px 0 16px 20px;
          padding: 0;
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: #756A62;
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
          color: #4F4742;
          margin-bottom: 8px;
        }

        .cardText {
          font-size: 15px;
          color: #756A62 !important;
          margin: 0 0 4px !important;
        }

        .link {
          color: #4F4742;
          text-decoration: underline;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .link:hover {
          color: #756A62;
        }

        @media (max-width: 768px) {
          .privacyMain {
            padding: 90px 0 50px;
          }

          .mainTitle {
            font-size: 32px;
          }

          .contentCard {
            padding: 28px 20px;
            border-radius: 12px;
          }

          .sectionTitle {
            font-size: 19px;
          }

          .subHeading {
            font-size: 16px;
          }

          .text,
          .list {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
