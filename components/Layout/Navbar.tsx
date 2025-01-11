'use client';
import { BookImage, CircleUser, Home, LayoutGrid } from 'lucide-react';

import { ThemeToggle } from '@/components/Layout/ThemeToggle';
import Link from 'next/link';

export function Navbar() {
  const navigation = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: CircleUser },
    { name: 'Projects', url: '/projects', icon: LayoutGrid },
    { name: 'Gallery', url: '/gallery', icon: BookImage },
  ];
  return (
    <header className='sticky top-0 z-40 hidden w-full bg-gradient-to-b from-background to-transparent md:block'>
      <div className='mx-auto flex h-16 max-w-5xl items-center space-x-4 sm:justify-between sm:space-x-0'>
        <div></div>
        <div className='hidden rounded-3xl border border-zinc-700 bg-background/40 px-4 py-1 backdrop-blur-md md:flex'>
          {navigation.map((nav, index) => (
            <Link
              href={nav.url}
              key={index}
              className='flex cursor-pointer items-center gap-2 rounded-2xl border border-transparent px-3 py-1 text-sm duration-200 hover:border-zinc-600 hover:bg-zinc-400/10'
            >
              <nav.icon className='size-4' />
              {nav.name}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
