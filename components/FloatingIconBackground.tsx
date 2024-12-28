import React from 'react';
import { FloatingIcon } from './FloatingIcon';
import { technologies } from '@/data/technologies';

export const FloatingIconsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full">
        {technologies.map((tech, index) => (
          <FloatingIcon
            key={`${tech.name}-${index}`}
            tech={tech}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};