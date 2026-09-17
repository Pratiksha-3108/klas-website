import type { Metadata } from 'next';
import KlasHero from '@/components/klas/KlasHero';

export const metadata: Metadata = {
  title: 'KLAS | Transforming Land Into Landmark Projects',
  description: 'KLAS holds a robust portfolio of high-value assets across India currently under Joint Venture Development of Residential & Commercial projects.',
};

export default function KlasPage() {
  return (
    <>
      <KlasHero />
    </>
  );
}
