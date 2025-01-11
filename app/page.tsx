import React from 'react';

import { GithubCommit } from '@/components/GithubCommit';
import Hero from '@/components/Hero';
import { Projects } from '@/components/Projects/Projects';
import { TechStack } from '@/components/TechStack';
import { Metadata } from 'next';
import GlowArea from '@/components/GlowArea';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <Hero />

      <GlowArea>
        <div className='grid gap-10 md:grid-cols-2'>
          <GithubCommit />
          <TechStack />
        </div>
      </GlowArea>

      <Projects />
    </>
  );
}
