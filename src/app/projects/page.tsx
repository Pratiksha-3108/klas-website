import type { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import HomeProjectsSection from '@/components/home/HomeProjectsSection';

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
