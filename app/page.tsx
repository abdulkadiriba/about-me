'use client';

import React from 'react';
import { Glow, GlowCapture } from '@codaworks/react-glow';

import { GithubCommit } from '@/components/GithubCommit';
import Hero from '@/components/Hero';
import { Projects } from '@/components/Projects/Projects';
import { TechStack } from '@/components/TechStack';

export default function App() {
  return (
    <GlowCapture>
      <div className='mx-auto max-w-5xl px-4'>
        <Hero />

        <div className='grid gap-10 md:grid-cols-2'>
          <GithubCommit />
          <TechStack />
        </div>

        <Projects />
      </div>
    </GlowCapture>
  );
}
