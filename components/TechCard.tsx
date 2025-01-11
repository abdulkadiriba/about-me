'use client';

import React from 'react';
import type { Technology } from '@/data/technologies';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechCardProps {
  tech: Technology;
  index: number;
}

export const TechCard = ({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className='cursor flex items-center gap-2 overflow-hidden rounded border border-border bg-background p-1 shadow-lg glow:border-primary'
    >
      <img
        width={50}
        height={50}
        src={tech.icon}
        alt={tech.name}
        className='size-4'
      />
      <span className='text-xs'>{tech.name}</span>
    </motion.div>
  );
};
