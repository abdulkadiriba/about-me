'use client';

import React from 'react';
import Link from 'next/link';
import { technologies } from '@/data/technologies';
import { motion } from 'framer-motion';

import { Icons } from './Icons';
import { TechCard } from './TechCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { CodeXml, Frame } from 'lucide-react';
import { Glow, GlowCapture } from '@codaworks/react-glow';

export const TechStack = () => {
  return (
    <Glow>
      <Card className='h-full overflow-hidden glow:border-primary'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CodeXml className='glow:text-primary' />
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='bg-gradient-to-r from-emerald-500 via-sky-400 to-primary bg-clip-text glow:text-transparent'
            >
              Technologies
            </motion.h2>
          </CardTitle>
          <CardDescription>Technologies I use in my projects</CardDescription>
        </CardHeader>

        <CardContent>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {technologies.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Glow>
  );
};
