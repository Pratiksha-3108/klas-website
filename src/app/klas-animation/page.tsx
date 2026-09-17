import type { Metadata } from 'next';
import KlasHero from '@/components/klas/KlasHero';
import AnimationFooter from '@/components/klas-animation/AnimationFooter';

export const metadata: Metadata = {
  title: 'KLAS Animation | Illustrating Imagination to Life',
  description: 'KLAS own a strong Intellectual Property (IP) portfolio, inclusive of India’s First Animated Film IP — Bal Hanuman.',
};

export default function KlasAnimationPage() {
  return (
    <>
      <KlasHero initialCategory="Animation" />
      <AnimationFooter />
    </>
  );
}
