import type { Metadata } from 'next';
import AboutHero from '@/components/klas-realty/AboutHero';
import AboutWhoWeAreSection from '@/components/klas-realty/AboutWhoWeAreSection';
import AboutStatsSection from '@/components/klas-realty/AboutStatsSection';
import AboutVisionMissionSection from '@/components/klas-realty/AboutVisionMissionSection';
import AboutValuesSection from '@/components/klas-realty/AboutValuesSection';

export const metadata: Metadata = {
  title: 'About Us | KLAS Realty',
  description: 'Learn about KLAS Realty, established in 2000, managing 1+ million sq. ft. of planned built-up area across India.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAreSection />
      <AboutStatsSection />
      <AboutVisionMissionSection />
      <AboutValuesSection />
    </>
  );
}
