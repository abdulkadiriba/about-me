"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
      url: "odinboost.com",
      description:
        "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
      image: "/img/projects/odinboost.webp",
      icons: [
        "/img/technologies/typescript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/tailwind.svg",
        "/img/technologies/sass.svg",
        "/img/technologies/nodejs.svg",
      ],
    },
    {
      url: "gamemarket24.com",
      description: "Account trading store for league of legends",
      image: "/img/projects/gamemarket24-v2.png",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/php.svg",
        "/img/technologies/tailwind.svg",
      ],
    },
    {
      url: "megaeloboost.com",
      description:
        "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
      image: "/img/projects/mega.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/bootstrap.png",
        "/img/technologies/nodejs.svg",
      ],
    },
    {
      url: "moriaeloboost.com",
      description:
        "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
      image: "/img/projects/moria.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/bootstrap.png",
        "/img/technologies/nodejs.svg",
      ],
    },
    {
      url: "unrankedhesap.com",
      description: "Unranked account store for league of legends",
      image: "/img/projects/unrankedhesap.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/tailwind.svg",
        "/img/technologies/php.svg",
      ],
    },
    {
      url: "teknarteknoloji.com",
      description:
        "Teknar Teknoloji has been developing solutions for the public transportation network systems since 2012, the year of establishment.",
      image: "/img/projects/teknarteknoloji.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/bootstrap.png",
      ],
    },
    {
      url: "hphamami.com",
      description:
        "Historical Hasan Pasha Soldier Bath Museum, which is a museum in Trabzon",
      image: "/img/projects/hphamami.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/tailwind.svg",
      ],
    },
    {
      url: "dkaregroup.com",
      description:
        "DKare Group produces doors, kitchens and bathrooms and is a registered company preferred in important projects of the region.",
      image: "/img/projects/dkaregroup.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/bootstrap.png",
      ],
    },
    {
      url: "dtsolar.net",
      description:
        "It has been serving for years for the sale and installation of solar panels to homes, workplaces or wherever desired.",
      image: "/img/projects/dtsolar.webp",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/vuejs.svg",
        "/img/technologies/bootstrap.png",
      ],
    },
    {
      url: "bmwtrabzonmekanik.com",
      description:
        "A business offering professional mechanical repair services for BMW and MINI vehicles in Trabzon.",
      image: "/img/projects/mpowermekanik.png",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/tailwind.svg",
      ],
    },
    {
      url: "deryapi.com",
      description: "A company serving in the construction industry",
      image: "/img/projects/deryapi.png",
      icons: [
        "/img/technologies/javascript.svg",
        "/img/technologies/nuxtjs.svg",
        "/img/technologies/tailwind.svg",
      ],
    },
  ];

export const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">🎯 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src={project.image} 
              alt={project.url}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.url}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.icons.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};