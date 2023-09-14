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
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
      <div v-for="tech in technologies" :key="tech.name" class="flex bg-zinc-500/40 px-5 py-3.5 justify-between items-center">
        <img :src="tech.img" class="h-12" :alt="tech.name" />
        <div class="text-xl">{{ tech.name }}</div>
      </div>
    </div>
  </div>
</template>
