'use client';
import { Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Glow } from '@codaworks/react-glow';

export default function AboutInfo() {
  return (
    <Glow>
      <Card className='mb-8 bg-background/50 backdrop-blur-sm glow:border-primary glow:bg-primary/20'>
        <CardContent className='pt-6'>
          <div className='grid gap-8 md:grid-cols-2'>
            <div>
              <img
                src='/img/test.jpg'
                alt='Profile'
                className='w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]'
              />
            </div>
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold'>Profile</h2>
              <p className='text-muted-foreground'>
                For 4 years I have been using Vue.js and Nuxt.js in my projects.
                I used React.js and Next.js for 1 year. I write my codes with
                typescript support. Apart from that, I have developed many
                projects in the frontend area. On the backend side, I used PHP
                and Node.js in small projects. I have no location problems.
              </p>
              <div className='space-y-2'>
                <p className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Linkedin className='h-4 w-4' /> linkedin.com/in/abdulkadiriba
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
                <Button asChild>
                  <Link href='mailto:abdulkadiriba@gmail.com'>
                    <Mail className='mr-2 h-4 w-4' /> Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Glow>
  );
}
