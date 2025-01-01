'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { Project, projects } from '@/data/projects';
import ProjectCard from '@/components/Projects/ProjectCard';

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='mx-auto max-w-5xl'>
        <h2 className='mb-12 text-center text-3xl font-bold'>Projects</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={project.url} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
