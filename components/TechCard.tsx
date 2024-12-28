"use client";

import React from 'react';
import { motion } from 'framer-motion';
import type { Technology } from '@/data/technologies';

interface TechCardProps {
  tech: Technology;
  index: number;
}

export const TechCard = ({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <motion.div 
        className="w-12 h-12 rounded-lg mr-4 overflow-hidden"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={tech.icon} 
          alt={tech.name}
          className="w-full h-full object-contain"
        />
      </motion.div>
      <span className="font-medium">{tech.name}</span>
    </motion.div>
  );
};