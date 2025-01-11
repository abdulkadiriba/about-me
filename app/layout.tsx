import '@/public/css/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/Layout/ThemeProvider';
import { Navbar } from '@/components/Layout/Navbar';

import { Outfit } from 'next/font/google';
import { MobileNav } from '@/components/Layout/MobileNav';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background antialiased',
            fontSans.variable,
            outfit.className
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <Navbar />
            <MobileNav />

            <div className='relative mx-auto flex min-h-screen max-w-5xl flex-col px-4'>
              {/* <MouseShine /> */}
              <div className='flex-1'>{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
