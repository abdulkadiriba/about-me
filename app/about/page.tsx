'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';
import { Glow, GlowCapture } from '@codaworks/react-glow';

export default function About() {
  return (
    <Glow>
      <div className='container mx-auto px-4 py-16'>
        <div className='mx-auto max-w-4xl'>
          {/* Header Section */}
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold'>Abdulkadir Iba</h1>
            <p className='text-xl text-muted-foreground'>
              Frontend Developer (Vue.js Nuxt.js)
            </p>
            <div className='mt-4 flex flex-wrap justify-center gap-4'>
              <Button variant='ghost' size='sm' asChild>
                <Link href='mailto:abdulkadiriba@gmail.com'>
                  <Mail className='mr-2 h-4 w-4' />
                  abdulkadiriba@gmail.com
                </Link>
              </Button>
              <Button variant='ghost' size='sm'>
                <MapPin className='mr-2 h-4 w-4' />
                Available for Remote Work
              </Button>
            </div>
          </div>

          {/* Personal Info Section */}
          <Card className='mb-8 bg-background/50 backdrop-blur-sm glow:border-primary'>
            <CardContent className='pt-6'>
              <div className='grid gap-8 md:grid-cols-2'>
                <div>
                  <img
                    src='/img/profile2.jpg'
                    alt='Profile'
                    className='h-[500px] w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02]'
                  />
                </div>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-semibold'>Profile</h2>
                  <p className='text-muted-foreground'>
                    For 4 years I have been using Vue.js and Nuxt.js in my
                    projects. I used React.js and Next.js for 1 year. I write my
                    codes with typescript support. Apart from that, I have
                    developed many projects in the frontend area. On the backend
                    side, I used PHP and Node.js in small projects. I have no
                    location problems.
                  </p>
                  <div className='space-y-2'>
                    <p className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Linkedin className='h-4 w-4' />{' '}
                      linkedin.com/in/abdulkadiriba
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

          {/* Experience Section */}
          <div className='mb-8 grid gap-8 md:grid-cols-2'>
            <Card className='bg-background/50 backdrop-blur-sm'>
              <CardContent className='pt-6'>
                <h2 className='mb-6 text-2xl font-semibold'>Experience</h2>
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-semibold'>
                      Frontend Developer at Codio Tech
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Feb 2024 - Oct 2024 • Turkey / Trabzon
                    </p>
                    <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                      <li>React.js, Next.js with TypeScript</li>
                      <li>SCSS, Tailwind, Bootstrap</li>
                      <li>React Hooks and State Management</li>
                      <li>ERP Project and CMS Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      Frontend Developer at OdinBoost Inc.
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      May 2022 - Oct 2023 • Germany (Remote)
                    </p>
                    <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                      <li>Vue.js, Nuxt.js with TypeScript</li>
                      <li>SEO optimization and Google Adwords</li>
                      <li>
                        Payment methods integration (PayPal, Coinbase, Stripe)
                      </li>
                      <li>Websocket implementation and CMS Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      Frontend Developer at Teknar Technology
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Jan 2022 - May 2022 • Turkey / Trabzon
                    </p>
                    <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                      <li>Vue.js, Nuxt.js (Version 2)</li>
                      <li>Figma to HTML conversion</li>
                      <li>Map navigation systems for public transportation</li>
                      <li>Bootstrap, CSS, SCSS implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      Founder & Lead Web Developer
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      My Company • Established July 2020 • Remote Work
                    </p>
                    <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                      <li>E-Commerce websites for various industries</li>
                      <li>Corporate and personal portfolio websites</li>
                      <li>SEO optimization and analytics improvements</li>
                      <li>
                        Figma to HTML conversion for high-fidelity designs
                      </li>
                      <li>Map navigation systems for public transportation</li>
                      <li>Bootstrap, CSS, SCSS implementation</li>
                      <li>Projects developed under my own company</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='space-y-8'>
              <Card className='bg-background/50 backdrop-blur-sm'>
                <CardContent className='pt-6'>
                  <h2 className='mb-4 text-2xl font-semibold'>Education</h2>
                  <div>
                    <h3 className='font-semibold'>
                      Electrical and Electronic Engineer
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Sep 2016 - Jun 2021
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Gümüşhane University
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-background/50 backdrop-blur-sm'>
                <CardContent className='pt-6'>
                  <h2 className='mb-4 text-2xl font-semibold'>Skills</h2>
                  <div className='space-y-3'>
                    <div>
                      <p className='mb-1 text-sm'>Vue.js / Nuxt.js</p>
                      <div className='h-2 rounded-full bg-secondary'>
                        <div
                          className='h-full rounded-full bg-primary'
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className='mb-1 text-sm'>React.js / Next.js</p>
                      <div className='h-2 rounded-full bg-secondary'>
                        <div
                          className='h-full rounded-full bg-primary'
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className='mb-1 text-sm'>TypeScript / JavaScript</p>
                      <div className='h-2 rounded-full bg-secondary'>
                        <div
                          className='h-full rounded-full bg-primary'
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className='mb-1 text-sm'>Node.js</p>
                      <div className='h-2 rounded-full bg-secondary'>
                        <div
                          className='h-full rounded-full bg-primary'
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className='mb-1 text-sm'>PHP</p>
                      <div className='h-2 rounded-full bg-secondary'>
                        <div
                          className='h-full rounded-full bg-primary'
                          style={{ width: '50%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Glow>
  );
}
