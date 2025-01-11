'use client';

import React from 'react';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

import { Button } from '../ui/button';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='py-20'
    >
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-12 text-center text-3xl font-bold'>
          Featured Projects
        </h2>
        <div className='relative overflow-hidden'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.url} index={index} project={project} />
            ))}
          </div>
          <Link
            href='/projects'
            className='absolute bottom-0 flex h-64 w-full items-center justify-center bg-gradient-to-t from-background/90 via-background/80 to-transparent'
          >
            <Button variant='outline'>Show All Projects</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
