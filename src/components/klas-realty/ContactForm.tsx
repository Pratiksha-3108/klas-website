'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contactPageSection">
      <div className="container">
        {/* TOP 4 INFO CARDS GRID */}
        <div className="infoGrid">
          {/* Card 1: PHONE */}
          <div className="infoCard">
            <div className="iconBadge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="infoContent">
              <h3 className="infoTitle">PHONE</h3>
              <a href="tel:+919867007181" className="infoValue">+91 98670 07181</a>
            </div>
          </div>

          {/* Card 2: EMAIL */}
          <div className="infoCard">
            <div className="iconBadge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="infoContent">
              <h3 className="infoTitle">EMAIL</h3>
              <a href="mailto:info@klasgroup.com" className="infoValue">info@klasgroup.com</a>
            </div>
          </div>

          {/* Card 3: OFFICE */}
          <div className="infoCard">
            <div className="iconBadge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="infoContent">
              <h3 className="infoTitle">OFFICE</h3>
              <p className="infoValue">Mumbai, India</p>
            </div>
          </div>

          {/* Card 4: WORKING HOURS */}
          <div className="infoCard">
            <div className="iconBadge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="infoContent">
              <h3 className="infoTitle">WORKING HOURS</h3>
              <p className="infoValue">Mon - Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>

        {/* MAIN FORM & SIDEBAR SECTION */}
        <div className="mainFormGrid">
          {/* LEFT: SEND US A MESSAGE CARD */}
          <div className="formCard">
            <h2 className="sectionHeaderTitle">SEND US A MESSAGE</h2>

            {submitted ? (
              <div className="successCard">
                <div className="successIcon">✓</div>
                <h3>Message Sent Successfully</h3>
                <p>Thank you for reaching out! A member of the KLAS team will respond to your inquiry shortly.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="resetBtn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="formElement">
                {/* Row 1: Full Name & Email */}
                <div className="formRow">
                  <div className="inputGroup">
                    <label htmlFor="fullName" className="fieldLabel">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="formInput"
                    />
                  </div>

                  <div className="inputGroup">
                    <label htmlFor="email" className="fieldLabel">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="formInput"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Company Name */}
                <div className="formRow">
                  <div className="inputGroup">
                    <label htmlFor="phone" className="fieldLabel">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="formInput"
                    />
                  </div>

                  <div className="inputGroup">
                    <label htmlFor="company" className="fieldLabel">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="formInput"
                    />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="inputGroup fullWidth">
                  <label htmlFor="message" className="fieldLabel">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="formTextarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="sendBtn">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sendIcon">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: OUR OFFICES & CONNECT WITH US CARDS */}
          <div className="sidebarCol">
            {/* OUR OFFICES */}
            <div className="sidebarCard">
              <h2 className="sectionHeaderTitle">OUR OFFICES</h2>
              <div className="officesList">
                <div className="officeItem">
                  <div className="officePin">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="officeText">
                    <strong className="officeTitleName">KLAS Group</strong>
                    <p className="officeAddress">603, Dalamal Towers, Nariman Point, Mumbai 400021</p>
                  </div>
                </div>

                <div className="officeItem">
                  <div className="officePin">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="officeText">
                    <strong className="officeTitleName">KLAS Group</strong>
                    <p className="officeAddress">Bizznet Unit, Mohan Mill Compound, Kolshet Majiwada Thane (W)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONNECT WITH US */}
            <div className="sidebarCard">
              <h2 className="sectionHeaderTitle">CONNECT WITH US</h2>
              <p className="connectSubtext">
                Follow us on social media for the latest updates and insights.
              </p>

              <div className="socialTiles">
                <a
                  href="https://www.linkedin.com/company/klas-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialSquare"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialSquare"
                  aria-label="YouTube"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* VISIT OUR OFFICE SECTION */}
        <div className="visitSection">
          <h2 className="visitTitle">VISIT OUR OFFICE</h2>
          <p className="visitSubtitle">
            We're located in the heart of Mumbai. Schedule a visit to discuss your business needs.
          </p>

          <div className="mapWrapper">
            <iframe
              title="KLAS Group Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.137021670989!2d72.82283997596041!3d18.92528798224765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e0f06a099f%3A0x6b453e1a6c0c29f4!2sDalamal%20Towers%2C%20Free%20Press%20Journal%20Marg%2C%20Nariman%20Point%2C%20Mumbai%2C%20Maharashtra%20400021!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .contactPageSection {
          padding-top: 48px;
          padding-bottom: 0;
          background-color: #FFFFFF;
          font-family: var(--font-inter), 'Montserrat', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 4 TOP INFO CARDS GRID */
        .infoGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 44px;
        }

        .infoCard {
          background-color: #F5F0EC;
          border-radius: 12px;
          padding: 24px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .infoCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
        }

        .iconBadge {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background-color: #0B2B26;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .infoContent {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .infoTitle {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #4F4742;
          margin: 0;
          text-transform: uppercase;
        }

        .infoValue {
          font-size: 14.5px;
          font-weight: 500;
          color: #5C5852;
          margin: 0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a.infoValue:hover {
          color: #4F4742;
        }

        /* MAIN FORM & SIDEBAR GRID */
        .mainFormGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }

        .formCard {
          background-color: #F5F0EC;
          border-radius: 16px;
          padding: 36px 32px;
        }

        .sidebarCol {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebarCard {
          background-color: #F5F0EC;
          border-radius: 16px;
          padding: 32px;
        }

        .sectionHeaderTitle {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #4F4742;
          text-transform: uppercase;
          margin: 0 0 24px 0;
        }

        .formElement {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .inputGroup {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fullWidth {
          width: 100%;
        }

        .fieldLabel {
          font-size: 13.5px;
          font-weight: 700;
          color: #4F4742;
        }

        .formInput,
        .formSelect,
        .formTextarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #E2E0DC;
          background-color: #FFFFFF;
          font-family: inherit;
          font-size: 14.5px;
          color: #22201E;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .formInput:focus,
        .formSelect:focus,
        .formTextarea:focus {
          border-color: #0B2B26;
          box-shadow: 0 0 0 3px rgba(11, 43, 38, 0.08);
        }

        .formSelect {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%3C%230B2B26' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        .formTextarea {
          resize: vertical;
        }

        .sendBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #0B2B26;
          color: #FFFFFF;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          width: 100%;
          margin-top: 6px;
        }

        .sendBtn:hover {
          background-color: #061B18;
          transform: translateY(-1px);
        }

        .sendIcon {
          transition: transform 0.2s ease;
        }

        .sendBtn:hover .sendIcon {
          transform: translateX(2px) translateY(-2px);
        }

        /* SUCCESS STATE */
        .successCard {
          padding: 32px 20px;
          text-align: center;
          background-color: #FFFFFF;
          border-radius: 12px;
        }

        .successIcon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #0B2B26;
          color: #FFFFFF;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .successCard h3 {
          font-size: 20px;
          color: #0B2B26;
          margin-bottom: 8px;
        }

        .successCard p {
          font-size: 14.5px;
          color: #5C5852;
          margin-bottom: 20px;
        }

        .resetBtn {
          padding: 10px 24px;
          background-color: #0B2B26;
          color: #FFFFFF;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        /* SIDEBAR OFFICES */
        .officesList {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .officeItem {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding-bottom: 20px;
          border-bottom: 1px solid #E5E3DF;
        }

        .officeItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .officePin {
          color: #0B2B26;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .officeText {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .officeTitleName {
          font-size: 14.5px;
          font-weight: 700;
          color: #4F4742;
        }

        .officeAddress {
          font-size: 14px;
          line-height: 1.5;
          color: #5C5852;
          margin: 0;
        }

        /* SIDEBAR CONNECT */
        .connectSubtext {
          font-size: 14px;
          line-height: 1.5;
          color: #5C5852;
          margin-bottom: 20px;
        }

        .socialTiles {
          display: flex;
          gap: 12px;
        }

        .socialSquare {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background-color: #FFFFFF;
          color: #0B2B26;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .socialSquare:hover {
          background-color: #0B2B26;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        /* VISIT OUR OFFICE MAP SECTION */
        .visitSection {
          text-align: center;
          margin-bottom: 90px;
        }

        .visitTitle {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #4F4742;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .visitSubtitle {
          font-size: 16px;
          color: #5C5852;
          max-width: 640px;
          margin: 0 auto 32px;
          line-height: 1.5;
        }

        .mapWrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          background-color: #EAE8E4;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .infoGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mainFormGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .infoGrid {
            grid-template-columns: 1fr;
          }

          .formRow {
            grid-template-columns: 1fr;
          }

          .formCard,
          .sidebarCard {
            padding: 24px 20px;
          }

          .visitTitle {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
