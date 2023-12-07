<script setup>
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
  <div>
    <Head>
      <Title>Works - Wayne</Title>
      <Meta name="description" content="Abdulkadir iba private blog" />
    </Head>
    <div class="text-4xl font-semibold">My Work</div>

    <div class="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3 mt-12">
      <div
        v-for="work in works"
        :key="work.url"
        class="group rounded-lg overflow-hidden bg-zinc-800 border-2 border-zinc-600/50 hover:border-green-500 duration-300 w-full h-full"
      >
        <div class="relative">
          <div class="image-wrap relative">
            <img :src="work.image" class="group-hover:object-bottom" />
          </div>
          <div class="absolute bottom-0 right-0 bg-zinc-800/80 rounded-tl-lg p-2 z-10 flex gap-1">
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
  </div>
</template>
<style>
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
