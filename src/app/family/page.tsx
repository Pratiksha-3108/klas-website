import type { Metadata } from 'next';
import FamilyHeader from '@/components/klas-family/FamilyHeader';
import FamilyHero from '@/components/klas-family/FamilyHero';
import FamilyAboutSection from '@/components/klas-family/FamilyAboutSection';
import FamilyMissionSection from '@/components/klas-family/FamilyMissionSection';
import FamilyVisionSection from '@/components/klas-family/FamilyVisionSection';
import FamilyValuesSection from '@/components/klas-family/FamilyValuesSection';
import FamilyFocusAreaSection from '@/components/klas-family/FamilyFocusAreaSection';
import FamilyInvestmentApproachSection from '@/components/klas-family/FamilyInvestmentApproachSection';
import FamilyDisclaimerSection from '@/components/klas-family/FamilyDisclaimerSection';

export const metadata: Metadata = {
  title: 'KLAS Family Office | Capital Stewarded for Generations',
  description: 'KLAS Family Office is the private investment arm of the family behind Silverline, one of India’s pioneering Tech companies.',
};

export default function FamilyPage() {
  return (
    <>
      <FamilyHeader />
      <FamilyHero />
      <FamilyAboutSection />
      <FamilyMissionSection />
      <FamilyVisionSection />
      <FamilyInvestmentApproachSection />
      <FamilyValuesSection />
      <FamilyFocusAreaSection />
      <FamilyDisclaimerSection />
    </>
  );
}
