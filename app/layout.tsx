import '@/public/css/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/Layout/ThemeProvider';
import { MouseShine } from '@/components/MouseShine';
import { Navbar } from '@/components/Layout/Navbar';
import { MobileNav } from '@/components/Layout/MobileNav';
import { GlowCapture } from '@codaworks/react-glow';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
            inter.className
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <div className='relative flex min-h-screen flex-col'>
              <MouseShine />
              <Navbar />
              <div className='flex-1'>{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
