import React from 'react';
import { motion } from 'framer-motion';
import type { Technology } from '@/data/technologies';

interface FloatingIconProps {
  tech: Technology;
  index: number;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ tech, index }) => {
  const randomX = Math.random() * 400 - 200;
  const randomY = Math.random() * 400 - 200;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, randomX, 0],
        y: [0, randomY, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut"
      }}
      className="absolute"
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-8 h-8 opacity-30"
      />
    </motion.div>
  );
};