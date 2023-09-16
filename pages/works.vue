<script setup>
const works = ref([
  {
    url: "odinboost.com",
    description:
      "Service shop for online games such as league of legends, valorant, teamfight tactics and wild rift.",
    image: "/assets/img/works/odinboost.jpg",
  },
  {
    url: "gamemarket24.com",
    description:
      "Account trading store for league of legends",
    image: "/assets/img/works/gamemarket24.png",
  },
  {
    url: "unrankedhesap.com",
    description:
      "Unranked account store for league of legends",
    image: "/assets/img/works/unrankedhesap.png",
  },
  {
    url: "teknarteknoloji.com",
    description:
      "Teknar Teknoloji has been developing solutions for the public transportation network systems since 2012, the year of establishment.",
    image: "/assets/img/works/teknarteknoloji.png",
  },
  {
    url: "hphamami.com",
    description:
      "Historical Hasan Pasha Soldier Bath Museum, which is a museum in Trabzon",
    image: "/assets/img/works/hphamami.png",
  },
  {
    url: "dkaregroup.com",
    description:
      "DKare Group produces doors, kitchens and bathrooms and is a registered company preferred in important projects of the region.",
    image: "/assets/img/works/dkaregroup.png",
  },
  {
    url: "dtsolar.net",
    description:
      "It has been serving for years for the sale and installation of solar panels to homes, workplaces or wherever desired.",
    image: "/assets/img/works/dtsolar.png",
  },
]);
</script>
<template>
  <div>
    <div class="text-4xl font-semibold">My Work</div>

    <div class="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3 mt-12">
      <NuxtLink
      :to="'https://' + work.url"
      target="_blank"
        v-for="work in works"
        :key="work.url"
        class="group rounded-lg overflow-hidden bg-zinc-800 border-2 border-zinc-600/50"
      >
        <div class="">
          <div class="image-wrap">
            <img :src="work.image" class="group-hover:object-bottom" />
          </div>
          <div class="p-5">
            <div class="font-semibold text-xl">
              {{ work.url }}
            </div>
            <div class="mt-2 text-zinc-400">
              {{ work.description }}
            </div>
          </div>
        </div>
      </NuxtLink>
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
