import type { Metadata } from 'next';
import AnimationHeader from '@/components/klas-animation/AnimationHeader';
import NewsroomContent from '@/components/newsroom/NewsroomContent';
import AnimationFooter from '@/components/klas-animation/AnimationFooter';

export const metadata: Metadata = {
  title: 'Newsroom | KLAS',
  description: 'Get the latest news, press releases, media coverage and updates about KLAS.',
};

export default function GeneralNewsroomPage() {
  return (
    <>
      <AnimationHeader />
      <NewsroomContent />
      <AnimationFooter />
    </>
  );
}
