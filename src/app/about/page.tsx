import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import HomeAboutSection from '@/components/home/HomeAboutSection';

export const metadata: Metadata = {
  title: 'About Us | KLAS Realty',
  description: 'Learn about KLAS Realty, established in 2000, managing 1+ million sq. ft. of planned built-up area across India.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HomeAboutSection />
    </>
  );
}
