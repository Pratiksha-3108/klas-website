import type { Metadata } from 'next';
import ContactHero from '@/components/klas-realty/ContactHero';
import ContactForm from '@/components/klas-realty/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | KLAS Realty',
  description: 'Get in touch with KLAS Realty for Joint Venture development inquiries or project details.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
