"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';
import { TechCard } from './TechCard';

export const TechStack = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold mb-8"
      >
        💻 Technologies
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
};