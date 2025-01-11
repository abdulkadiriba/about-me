import { BookImage, CircleUser, Home, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function MobileNav() {
  const navigation = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: CircleUser },
    { name: 'Projects', url: '/projects', icon: LayoutGrid },
    { name: 'Gallery', url: '/gallery', icon: BookImage },
  ];
  return (
    <div className='fixed bottom-10 left-1/2 z-40 block -translate-x-1/2 md:hidden'>
      <div className='flex rounded-3xl border border-zinc-700 bg-background/40 px-4 py-1 backdrop-blur-md'>
        {navigation.map((nav, index) => (
          <Link
            href={nav.url}
            key={index}
            className='flex cursor-pointer items-center gap-2 rounded-2xl border border-transparent px-3 py-1 text-sm duration-200 hover:border-zinc-600 hover:bg-zinc-400/10'
          >
            <nav.icon className='size-4' />
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </div>
  );
}
