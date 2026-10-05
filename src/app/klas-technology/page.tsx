import type { Metadata } from 'next';
import KlasHero from '@/components/klas/KlasHero';

export const metadata: Metadata = {
  title: 'KLAS Technology | Purpose-Driven Alliances',
  description: 'Guided by one of the pioneers of India’s I.T. industry, KLAS Infotech delivers Digital Transformation and Artificial Intelligence (AI) Solutions. Through strategic joint ventures, we are deploying next-gen AI platforms to drive efficiency and intelligent automation.',
};

export default function KlasTechnologyPage() {
  return (
    <>
      <KlasHero initialCategory="Technology" />
    </>
  );
}
