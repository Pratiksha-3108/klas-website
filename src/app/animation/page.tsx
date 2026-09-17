import type { Metadata } from 'next';
import AnimationHeader from '@/components/klas-animation/AnimationHeader';
import AnimationHero from '@/components/klas-animation/AnimationHero';
import AnimationJourneySection from '@/components/klas-animation/AnimationJourneySection';
import AnimationIPsSection from '@/components/klas-animation/AnimationIPsSection';
import AnimationVisionMissionSection from '@/components/klas-animation/AnimationVisionMissionSection';
import AnimationCreativeControlSection from '@/components/klas-animation/AnimationCreativeControlSection';
import AnimationRatingsSection from '@/components/klas-animation/AnimationRatingsSection';
import AnimationAwardsSection from '@/components/klas-animation/AnimationAwardsSection';
import AnimationNewsroomSection from '@/components/klas-animation/AnimationNewsroomSection';
import AnimationFooter from '@/components/klas-animation/AnimationFooter';

export const metadata: Metadata = {
  title: 'KLAS Animation | India\'s Beloved Classic',
  description: 'KLAS Animation - India\'s beloved classic is returning soon.',
};

export default function AnimationPage() {
  return (
    <>
      <AnimationHeader />
      <AnimationHero />
      <AnimationJourneySection />
      <AnimationIPsSection />
      <AnimationVisionMissionSection />
      <AnimationCreativeControlSection />
      <AnimationRatingsSection />
      <AnimationAwardsSection />
      <AnimationNewsroomSection />
      <AnimationFooter />
    </>
  );
}



