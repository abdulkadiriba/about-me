
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { ProfileButton } from './ProfileButton';

export default function Hero(){

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 px-4 max-w-6xl mx-auto"
    >
        
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Abdulkadir Iba
          </motion.h1>
          <motion.div 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            🚀 Web Developer
          </motion.div>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
          >
            Hello, I am Abdulkadir, a web software developer and also an electrical and electronic engineer.
            I have listed some of the work I have done and the technologies I use, if you want to work with me, you can contact me.
          </motion.p>
<ProfileButton />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-64 h-64 rounded-full border-4 border-indigo-600 overflow-hidden">
            <img
              src="https://placehold.co/400x400"
              alt="Abdulkadir Iba"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};