<script setup>
onMounted(() => {
  $fetch(
    "https://discord.com/api/webhooks/1171087359975096473/-7_yM5526PopCdWD6uk-Wv7StP39NaoYDyzKLDnr_xkJq6kaSHT99ijmf69fPLhZ5gy6",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "Birisi siteye girdi" }),
    }
  );
});

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const profiles = ref([
  {
    name: "+90 541 201 90 97",
    url: "https://wa.me/905412019097",
    icon: "bi:whatsapp",
    description: "/abdulkadiriba",
  },
  {
    name: "Github",
    url: "https://github.com/abdulkadiriba",
    icon: "radix-icons:github-logo",
    description: "/abdulkadiriba",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdulkadiriba/",
    icon: "mdi:linkedin",
    description: "/abdulkadiriba",
  },
  {
    name: "waynedev",
    url: "",
    icon: "ic:baseline-discord",
    description: "waynedev",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/abdulkadir.iba/",
    icon: "bi:instagram",
    description: "/abdulkadiriba",
  },
]);
const technologies = ref([
  { name: "Javascript", img: "/assets/img/technologies/javascript.svg" },
  { name: "Typescript", img: "/assets/img/technologies/typescript.svg" },
  { name: "Php", img: "/assets/img/technologies/php.svg" },
  { name: "Vue Js", img: "/assets/img/technologies/vuejs.svg" },
  { name: "Nuxt Js", img: "/assets/img/technologies/nuxtjs.svg" },
  { name: "React Js", img: "/assets/img/technologies/reactjs.svg" },
  { name: "Next", img: "/assets/img/technologies/next.svg" },
  { name: "Angular Js", img: "/assets/img/technologies/angular.svg" },
  { name: "Bootstrap", img: "/assets/img/technologies/bootstrap.png" },
  { name: "Tailwind", img: "/assets/img/technologies/tailwind.svg" },
  { name: "Sass", img: "/assets/img/technologies/sass.svg" },
  { name: "Mongodb", img: "/assets/img/technologies/mongodb.svg" },
  { name: "Node", img: "/assets/img/technologies/node.png" },
]);
const works = ref([
  {
    url: "odinboost.com",
    description:
      "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
    image: "/assets/img/works/odinboost.webp",
    icons: [
      "/assets/img/technologies/typescript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/nuxtjs.svg",
      "/assets/img/technologies/tailwind.svg",
      "/assets/img/technologies/sass.svg",
      "/assets/img/technologies/nodejs.svg",
    ],
  },
  {
    url: "gamemarket24.com",
    description: "Account trading store for league of legends",
    image: "/assets/img/works/gamemarket24.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/php.svg",
      "/assets/img/technologies/tailwind.svg",
    ],
  },
  {
    url: "megaeloboost.com",
    description:
      "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
    image: "/assets/img/works/mega.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/nuxtjs.svg",
      "/assets/img/technologies/bootstrap.png",
      "/assets/img/technologies/nodejs.svg",
    ],
  },
  {
    url: "moriaeloboost.com",
    description:
      "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
    image: "/assets/img/works/moria.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/nuxtjs.svg",
      "/assets/img/technologies/bootstrap.png",
      "/assets/img/technologies/nodejs.svg",
    ],
  },
  {
    url: "unrankedhesap.com",
    description: "Unranked account store for league of legends",
    image: "/assets/img/works/unrankedhesap.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/tailwind.svg",
      "/assets/img/technologies/php.svg",
    ],
  },
  {
    url: "teknarteknoloji.com",
    description:
      "Teknar Teknoloji has been developing solutions for the public transportation network systems since 2012, the year of establishment.",
    image: "/assets/img/works/teknarteknoloji.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/nuxtjs.svg",
      "/assets/img/technologies/bootstrap.png",
    ],
  },
  {
    url: "hphamami.com",
    description:
      "Historical Hasan Pasha Soldier Bath Museum, which is a museum in Trabzon",
    image: "/assets/img/works/hphamami.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/tailwind.svg",
    ],
  },
  {
    url: "dkaregroup.com",
    description:
      "DKare Group produces doors, kitchens and bathrooms and is a registered company preferred in important projects of the region.",
    image: "/assets/img/works/dkaregroup.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/bootstrap.png",
    ],
  },
  {
    url: "dtsolar.net",
    description:
      "It has been serving for years for the sale and installation of solar panels to homes, workplaces or wherever desired.",
    image: "/assets/img/works/dtsolar.webp",
    icons: [
      "/assets/img/technologies/javascript.svg",
      "/assets/img/technologies/vuejs.svg",
      "/assets/img/technologies/bootstrap.png",
    ],
  },
]);
</script>

<template>
  <title>Abdulkadir Iba</title>
  <body class="dark">
    <div class="pt-20 container mx-auto">
      <section class="grid md:grid-cols-2">
        <div class="order-2 md:order-1">
          <h1 class="text-5xl font-semibold">Abdulkadir Iba</h1>
          <h2 class="text-3xl mt-4">
            <Icon name="logos:google-developers" /> Web Developer
          </h2>
          <h3 class="text-2xl mt-4">
            Hello, I am Abdulkadir, a web software developer and also an
            electrical and electronic engineer.
          </h3>
          <p class="mt-4">
            I have listed some of the work I have done and the technologies I
            use. If you want to work with me, you can contact me.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button class="mt-4">Contact Me</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <NuxtLink
                v-for="item in profiles"
                :key="item.name"
                :to="item.url"
                target="_blank"
              >
                <DropdownMenuItem>
                  <Icon class="mr-2 w-3 h-3" :name="item.icon" />
                  {{ item.name }}
                </DropdownMenuItem>
              </NuxtLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div class="order-1">
          <img class="logo" src="/assets/img/logo.png" alt="" />
        </div>
      </section>

      <!-- Technologies -->
      <section class="mt-12">
        <div class="text-2xl font-semibold">
          <Icon
            name="streamline:ai-technology-spark"
            class="text-blue-500 h-6 w-6"
          />
          Technologies
        </div>
        <div
          class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-5 mt-8"
        >
          <Button
            variant="outline"
            v-for="tech in technologies"
            :key="tech.name"
          >
            <img :src="tech.img" class="h-5 mr-2" :alt="tech.name" />

            {{ tech.name }}
          </Button>
        </div>
      </section>

      <!-- Works -->
      <section class="mt-12">
        <div class="text-2xl font-semibold flex items-center">
          <Icon
            name="material-symbols:workspace-premium-outline"
            class="text-blue-500 h-6 w-6 mr-2"
          />
          Projects
        </div>

        <div
          class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8"
        >
          <div
            v-for="work in works"
            :key="work.url"
            class="group rounded-md overflow-hidden bg-zinc-950 border duration-300 w-full h-full"
          >
            <div class="relative">
              <div class="image-wrap relative">
                <img :src="work.image" class="group-hover:object-bottom" />
              </div>
              <div
                class="absolute bottom-0 right-0 bg-zinc-950/80 rounded-tl-lg p-2 z-10 flex gap-1"
              >
                <img
                  class="w-7 h-7 hover:-translate-y-1 duration-200"
                  v-for="icons in work.icons"
                  :key="icons"
                  :src="icons"
                  alt=""
                />
              </div>
            </div>

            <div class="p-5 flex flex-col justify-between w-full">
              <NuxtLink
                :to="'https://' + work.url"
                target="_blank"
                class="font-semibold text-xl"
              >
                {{ work.url }}
              </NuxtLink>
              <div class="mt-2 text-zinc-400">
                {{ work.description }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
</template>
<style>
body {
  @apply bg-zinc-950;
}

.logo {
  filter: drop-shadow(2px 4px 16px #fff);
  animation: shining 2s infinite;
}
@keyframes shining {
  0% {
    filter: drop-shadow(0px 0px 0px #fff);
  }

  45% {
    filter: drop-shadow(0px 0px 15px #fff);
  }

  50% {
    filter: drop-shadow(0px 0px 0px #fff);
  }

  55% {
    filter: drop-shadow(0px 0px 15px #fff);
  }

  100% {
    filter: drop-shadow(0px 0px 0px #fff);
  }
}
.animate-text {
  letter-spacing: 1vw;
  background: url("https://sm.ign.com/t/ign_tr/news/t/the-batman/the-batmans-rating-has-been-confirmed_gxb6.1280.jpg");
  background-size: auto 200%;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s linear infinite;
}

@keyframes shine {
  from {
    background-position: center 0;
  }
  to {
    background-position: center 200%;
  }
}

.card {
  @apply text-sm bg-zinc-700;
}
.image-wrap {
  height: 250px;
  overflow: hidden;
}
.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: all 2s ease-in-out;
}
</style>
