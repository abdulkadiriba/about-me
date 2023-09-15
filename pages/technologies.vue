<script lang="ts" setup>
const technologies = ref([
  { name: "Javascript", img: "/assets/img/technologies/javascript.svg" },
  { name: "Typescript", img: "/assets/img/technologies/typescript.svg" },
  { name: "Vue Js", img: "/assets/img/technologies/vuejs.svg" },
  { name: "Nuxt Js", img: "/assets/img/technologies/nuxtjs.svg" },
  { name: "Angular Js", img: "/assets/img/technologies/angular.svg" },
  { name: "React Js", img: "/assets/img/technologies/reactjs.svg" },
  { name: "Bootstrap", img: "/assets/img/technologies/bootstrap.png" },
  { name: "Tailwind", img: "/assets/img/technologies/tailwind.svg" },
  { name: "Sass", img: "/assets/img/technologies/sass.svg" },
  { name: "Mongodb", img: "/assets/img/technologies/mongodb.svg" },
]);
</script>
<template>
  <div>
    <div class="text-4xl font-semibold">Technologies I Use</div>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-12">
      <div v-for="tech in technologies" :key="tech.name" class="technologies group relative">
        <div class="w-full bg-zinc-800 absolute group-hover:h-32 h-0 duration-700 bottom-0 transition-all"></div>
        <div class="px-5 py-3.5 flex justify-between items-center">
          <img :src="tech.img" class="h-12 group-hover:translate-x-3 duration-500" :alt="tech.name" />
          <div class="text-xl group-hover:-translate-x-9 duration-500">{{ tech.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.technologies {
  @apply duration-200 bg-zinc-500/40 rounded-lg border border-zinc-600/80 overflow-hidden transition-all;
}

.technologies:hover {
  @apply scale-105 bg-zinc-700 border-zinc-400;
}
</style>
