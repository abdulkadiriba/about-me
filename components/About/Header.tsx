'use client';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { GlowCapture } from '@codaworks/react-glow';

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mb-12 pt-16 text-center'
    >
      <GlowCapture>
        <h1 className='mb-4 text-4xl font-bold'>Abdulkadir Iba</h1>

        <p className='text-xl text-muted-foreground'>Web Developer</p>
        <div className='mt-4 flex flex-wrap justify-center gap-4'>
          <Button variant='ghost' size='sm' asChild>
            <Link href='mailto:abdulkadiriba@gmail.com'>
              <Mail className='mr-1 h-4 w-4' />
              abdulkadiriba@gmail.com
            </Link>
          </Button>
          <Button variant='ghost' size='sm'>
            <MapPin className='mr-1 h-4 w-4' />
            Available for Remote Work
          </Button>
        </div>
      </GlowCapture>
    </motion.div>
  );
}
