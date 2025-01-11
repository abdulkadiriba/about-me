'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Glow } from '@codaworks/react-glow';

export default function AboutExperience() {
  return (
    <Glow>
      <motion.div
        className='mb-8 grid gap-8 md:grid-cols-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Card className='bg-background/50 backdrop-blur-sm glow:border-primary glow:bg-primary/20'>
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
                <h3 className='font-semibold'>Founder & Lead Web Developer</h3>
                <p className='text-sm text-muted-foreground'>
                  My Company • Established July 2020 • Remote Work
                </p>
                <ul className='mt-2 list-inside list-disc text-sm text-muted-foreground'>
                  <li>E-Commerce websites for various industries</li>
                  <li>Corporate and personal portfolio websites</li>
                  <li>SEO optimization and analytics improvements</li>
                  <li>Figma to HTML conversion for high-fidelity designs</li>
                  <li>Map navigation systems for public transportation</li>
                  <li>Bootstrap, CSS, SCSS implementation</li>
                  <li>Projects developed under my own company</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='space-y-8'>
          <Card className='bg-background/50 backdrop-blur-sm glow:border-primary glow:bg-primary/20'>
            <CardContent className='pt-6'>
              <h2 className='mb-4 text-2xl font-semibold'>Education</h2>
              <div>
                <h3 className='font-semibold'>
                  Electrical and Electronic Engineer
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Sep 2016 - Jun 2021
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-background/50 backdrop-blur-sm glow:border-primary glow:bg-primary/20'>
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
      </motion.div>
    </Glow>
  );
}
