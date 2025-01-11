// siteConfig.ts

export const siteConfig = {
  name: 'Abdulkadir Iba',
  description:
    'My personal blog and portfolio page where I showcase my web projects. Contact me for web projects.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Gallery',
      href: '/gallery',
    },
  ],
  links: {
    intagram: 'https://instagram.com/abdulkadir.iba',
    twitter: 'https://twitter.com/abdulkadiriba',
    github: 'https://github.com/abdulkadiriba',
    portfolio: 'https://www.abdulkadiriba.com',
  },
};

export type SiteConfig = typeof siteConfig;
