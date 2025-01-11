'use client';
import { getIconsWithNames, Project } from '@/data/projects';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
interface ProjectCardProps {
  project: Project;
  index: number;
}
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className='group h-full overflow-hidden duration-300 hover:border-primary'>
        <div className='image-wrap relative'>
          <img
            height={300}
            width={300}
            src={project.image}
            alt={project.url}
            className='h-48 w-full object-cover group-hover:object-bottom'
          />
        </div>

        <CardHeader>
          <CardTitle>
            <div className='flex items-center justify-between gap-2'>
              <span>{project.title}</span>

              <Link href={`https://` + project.url} target='_blank'>
                <ExternalLink size={16} />
              </Link>
            </div>
            <span className='text-sm'>{project.url}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>{project.description}</CardContent>
        <CardFooter className='flex gap-1.5'>
          {getIconsWithNames(project.technologies).map((tech, iconIndex) => (
            <TooltipProvider key={iconIndex}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <img src={tech.icon} alt={tech.name} className='size-5' />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='border bg-background p-1 text-xs'>
                    {tech.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
