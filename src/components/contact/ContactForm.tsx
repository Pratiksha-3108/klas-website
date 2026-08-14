'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          
          {submitted ? (
            <div className={styles.successMessage}>
              Thank you for reaching out! A member of the KLAS Realty team will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input id="name" type="text" required placeholder="John Doe" className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input id="email" type="email" required placeholder="john@example.com" className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input id="phone" type="tel" placeholder="+91 98765 43210" className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" rows={5} required placeholder="Tell us about your inquiry..." className={styles.textarea}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
