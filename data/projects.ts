export interface Project {
  url: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}
export interface Technology {
  name: string;
  icon: string;
}

export const technologyList: Technology[] = [
  { name: 'TypeScript', icon: '/img/technologies/typescript.svg' },
  { name: 'Vue.js', icon: '/img/technologies/vuejs.svg' },
  { name: 'Nuxt.js', icon: '/img/technologies/nuxtjs.svg' },
  { name: 'Tailwind', icon: '/img/technologies/tailwind.svg' },
  { name: 'SASS', icon: '/img/technologies/sass.svg' },
  { name: 'Node.js', icon: '/img/technologies/nodejs.svg' },
  { name: 'JavaScript', icon: '/img/technologies/javascript.svg' },
  { name: 'Bootstrap', icon: '/img/technologies/bootstrap.png' },
  { name: 'PHP', icon: '/img/technologies/php.svg' },
];

export const projects: Project[] = [
  {
    url: 'odinboost.com',
    title: 'Odin Boost',
    description:
      'An online service shop for games like League of Legends, Valorant, Teamfight Tactics, and Wild Rift.',
    image: '/img/projects/odinboost.webp',
    technologies: [
      'TypeScript',
      'Vue.js',
      'Nuxt.js',
      'Tailwind',
      'SASS',
      'Node.js',
    ],
  },
  {
    url: 'deryapi.com',
    title: 'Der Yapı',
    description: 'A company providing services in the construction industry.',
    image: '/img/projects/deryapi.webp',
    technologies: ['JavaScript', 'Nuxt.js', 'Tailwind'],
  },
  {
    url: 'gamemarket24.com',
    title: 'Game Market 24',
    description: 'A store for trading League of Legends accounts.',
    image: '/img/projects/gamemarket24-v2.webp',
    technologies: ['JavaScript', 'Vue.js', 'PHP', 'Tailwind'],
  },
  {
    url: 'megaeloboost.com',
    title: 'Mega Elo Boost',
    description:
      'An online service shop for games like League of Legends, Valorant, and Teamfight Tactics.',
    image: '/img/projects/mega.webp',
    technologies: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Bootstrap', 'Node.js'],
  },
  {
    url: 'eloboosstkingdom.com',
    title: 'Elo Boost Kingdom',
    description:
      'A service shop for boosting services in games like League of Legends and Valorant.',
    image: '/img/projects/ebk.webp',
    technologies: ['PHP', 'Vue.js', 'Bootstrap'],
  },
  {
    url: 'moriaeloboost.com',
    title: 'Moria Elo Boost',
    description:
      'An online service shop for games like League of Legends, Valorant, and Teamfight Tactics.',
    image: '/img/projects/moria.webp',
    technologies: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Bootstrap', 'Node.js'],
  },
  {
    url: 'hphamami.com',
    title: 'Hasan Paşa Asker Hamamı Müzesi',
    description:
      'A historical museum located in Trabzon showcasing the Hasan Pasha Soldier Bath.',
    image: '/img/projects/hphamami.webp',
    technologies: ['JavaScript', 'Vue.js', 'Tailwind'],
  },
  {
    url: 'teknarteknoloji.com',
    title: 'Teknar Teknoloji',
    description:
      'A company developing solutions for public transportation network systems since 2012.',
    image: '/img/projects/teknarteknoloji.webp',
    technologies: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Bootstrap'],
  },
  {
    url: 'dkaregroup.com',
    title: 'DKare Kapı',
    description:
      'A company producing doors, kitchens, and bathrooms for regional projects.',
    image: '/img/projects/dkaregroup.webp',
    technologies: ['JavaScript', 'Vue.js', 'Bootstrap'],
  },
  {
    url: 'dtsolar.net',
    title: 'DT Solar',
    description:
      'A company offering solar panel sales and installation for homes and businesses.',
    image: '/img/projects/dtsolar.webp',
    technologies: ['JavaScript', 'Vue.js', 'Bootstrap'],
  },
  {
    url: 'bmwtrabzonmekanik.com',
    title: 'MPower Mekanik',
    description:
      'A professional mechanical repair service for BMW and MINI vehicles in Trabzon.',
    image: '/img/projects/mpowermekanik.webp',
    technologies: ['JavaScript', 'Nuxt.js', 'Tailwind'],
  },
  {
    url: 'unrankedhesap.com',
    title: 'Unranked Hesap',
    description: 'A store for buying unranked accounts for League of Legends.',
    image: '/img/projects/unrankedhesap.webp',
    technologies: ['JavaScript', 'Vue.js', 'Tailwind', 'PHP'],
  },
];

export const getIconsWithNames = (
  technologies: string[]
): { name: string; icon: string }[] => {
  return technologies
    .map((tech) => {
      const technology = technologyList.find((item) => item.name === tech);
      return technology
        ? { name: technology.name, icon: technology.icon }
        : null;
    })
    .filter((item) => item !== null) as { name: string; icon: string }[];
};
