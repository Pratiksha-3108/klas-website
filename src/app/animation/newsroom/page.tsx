import type { Metadata } from 'next';
import AnimationHeader from '@/components/klas-animation/AnimationHeader';
import NewsroomContent from '@/components/newsroom/NewsroomContent';
import AnimationFooter from '@/components/klas-animation/AnimationFooter';

export const metadata: Metadata = {
  title: 'Newsroom | KLAS Animation',
  description: 'Get the latest news, updates, box office records, and media coverage about KLAS Animation.',
};

export default function AnimationNewsroomPage() {
  return (
    <>
      <AnimationHeader />
      <NewsroomContent />
      <AnimationFooter />
    </>
  );
}
