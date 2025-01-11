'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SocialButtons } from './Buttons/SocialButtons';
import { ProfileImage } from './ProfileImage';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='px-4 py-12 sm:px-6 md:py-20 lg:px-8'
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row-reverse'>
        {/* Image Section */}
        <ProfileImage />

        {/* Text Section */}
        <div className='flex-1 text-center md:text-left'>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mb-4 space-y-2'
          >
            <span className='bg-gradient-to-r from-emerald-500 via-sky-400 to-primary bg-clip-text text-sm font-medium text-transparent'>
              Welcome to my portfolio
            </span>
            <h1 className='bg-gradient-to-r from-emerald-500 via-sky-400 to-primary bg-clip-text text-4xl font-bold text-transparent sm:text-5xl'>
              Abdulkadir Iba
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mb-8'
          >
            <span className='inline-flex items-center rounded-full bg-secondary px-4 py-2 text-lg font-medium text-secondary-foreground'>
              🚀 Web Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground'
          >
            Hello, I am Abdulkadir, a web software developer and electrical and
            electronic engineer. I have listed some of the work I have done and
            the technologies I use. If you want to work with me, you can contact
            me.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SocialButtons />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
