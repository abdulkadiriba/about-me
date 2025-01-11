'use client';
import Link from 'next/link';
import { Glow } from '@codaworks/react-glow';
import GitHubCalendar from 'react-github-calendar';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function GithubCommit() {
  const selectLastHalfYear = (contributions: any) => {
    const currentYear = 2024;
    const currentMonth = 15;
    const shownMonths = 8;

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Glow>
      <Card className='h-full glow:border-primary'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Github className='size-8 glow:text-primary' />
            <div className='bg-gradient-to-r from-emerald-500 via-sky-400 to-primary bg-clip-text glow:text-transparent'>
              Github Profile
            </div>
          </CardTitle>
          <CardDescription>
            <Link target='_blank' href='https://github.com/abdulkadiriba'>
              Click to view my github profile
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className='overflow-hidden max-sm:max-w-xs'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GitHubCalendar
              transformTotalCount
              username='abdulkadiriba'
              transformData={selectLastHalfYear}
            />
          </motion.div>
        </CardContent>
      </Card>
    </Glow>
  );
}
