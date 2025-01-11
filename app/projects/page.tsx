import { projects } from '@/data/projects';
import ProjectCard from '@/components/Projects/ProjectCard';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};
export default function About() {
  return (
    <>
      <h2 className='py-12 text-center text-3xl font-bold md:py-16'>
        Projects
      </h2>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={project.url} index={index} project={project} />
        ))}
      </div>
    </>
  );
}
