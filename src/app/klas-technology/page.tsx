import type { Metadata } from 'next';
import KlasHero from '@/components/klas/KlasHero';

export const metadata: Metadata = {
  title: 'KLAS Technology | Purpose-Driven Alliances',
  description: 'KLAS Infotech is a visionary partner for tech startups, empowering them to scale both locally and globally.',
};

export default function KlasTechnologyPage() {
  return (
    <>
      <KlasHero initialCategory="Technology" />
    </>
  );
}
