import type { Metadata } from 'next';
import Hero from '@/components/klas-realty/Hero';
import HomeProjectsSection from '@/components/klas-realty/HomeProjectsSection';
import HomeResultsSection from '@/components/klas-realty/HomeResultsSection';
import HomeClientsSection from '@/components/klas-realty/HomeClientsSection';

export const metadata: Metadata = {
  title: 'KLAS Realty | Transforming Land Into Landmark Projects',
  description: 'Established in 2000, KLAS holds a robust portfolio of high-value assets across India which are currently under Joint Venture Development of Residential & Commercial projects.',
};

export default function RealtyPage() {
  return (
    <>
      <Hero />
      <HomeProjectsSection />
      <HomeResultsSection />
      <HomeClientsSection />
    </>
  );
}
