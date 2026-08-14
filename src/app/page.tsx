import Hero from '@/components/home/Hero';
import HomeProjectsSection from '@/components/home/HomeProjectsSection';
import HomeResultsSection from '@/components/home/HomeResultsSection';
import HomeClientsSection from '@/components/home/HomeClientsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProjectsSection />
      <HomeResultsSection />
      <HomeClientsSection />
    </>
  );
}
