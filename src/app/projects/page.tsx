import type { Metadata } from 'next';
import ProjectsHero from '@/components/klas-realty/ProjectsHero';
import HomeProjectsSection from '@/components/klas-realty/HomeProjectsSection';

export const metadata: Metadata = {
  title: 'Projects & Portfolio | KLAS Realty',
  description: 'Explore KLAS Realty residential, commercial, retail, IT, and warehousing Joint Venture developments across India.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <HomeProjectsSection />
    </>
  );
}
