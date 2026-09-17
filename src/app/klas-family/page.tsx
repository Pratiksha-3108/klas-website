import type { Metadata } from 'next';
import KlasHero from '@/components/klas/KlasHero';

export const metadata: Metadata = {
  title: 'KLAS Family Office | Capital Stewarded for Generations',
  description: 'KLAS Family Office is the private investment arm of the family behind Silverline, one of India’s pioneering Tech companies.',
};

export default function KlasFamilyPage() {
  return (
    <>
      <KlasHero initialCategory="Family Office" />
    </>
  );
}
