<script lang="ts" setup>
import { useGlobalStore } from "~/stores/globalStore";
const { isMobile } = useDevice();
const store = useGlobalStore();
const isActive = ref(false);

const navigation = ref([
  {
    name: "About Me",
    path: "/",
    icon: "ic:baseline-home",
  },
  {
    name: "My Works",
    path: "/works",
    icon: "material-symbols:workspace-premium",
  },
  {
    name: "Technologies",
    path: "/technologies",
    icon: "ph:code-bold",
  },
]);
</script>

<template>
  <!-- Mobile -->
  <div
    class="block md:hidden backdrop-blur-sm bg-zinc-950/50 h-16 fixed z-50 w-full"
  >
    <div class="flex justify-between items-center w-full h-full px-5 py-2.5">
      <NuxtLink to="/" class="font-semibold flex items-center">
        <img class="w-20" src="/assets/img/logo.png" alt="" />

        Abdulkadir Iba
      </NuxtLink>
      <div>
        <Icon
          v-if="!isActive"
          @click="isActive = !isActive"
          name="radix-icons:hamburger-menu"
          color="white"
          size="32px"
        />
        <Icon
          v-if="isActive"
          @click="isActive = !isActive"
          name="material-symbols:close-rounded"
          color="white"
          size="32px"
        />
      </div>
    </div>
  </div>
  <div
    :class="isActive ? 'block' : 'hidden'"
    class="w-full md:hidden md:w-72 z-30 h-screen fixed backdrop-blur-sm bg-gradient-to-r from-zinc-950/50 to-zinc-950/50"
  >
    <div class="p-10 h-full flex flex-col justify-between content-between">
      <NuxtLink to="/" class="text-center font-semibold text-xl">
        <img class="logo" src="/assets/img/logo.png" alt="" />
        Abdulkadir Iba
      </NuxtLink>
      <div class="menu">
        <NuxtLink v-for="nav in navigation" :key="nav.path" :to="nav.path">
          <Icon :name="nav.icon" color="gray" size="24px" class="mr-1" />
          {{ nav.name }}</NuxtLink
        >
        <a
          v-if="$device.isMobile"
          class="cursor-pointer hidden md:block"
          @click="store.layout = 'custom'"
        >
          <Icon
            name="mingcute:layout-line"
            color="gray"
            size="24px"
            class="mr-1"
          />
          Change Layout
        </a>
      </div>

      <div>
        <div class="cv cursor-pointer text-center" @click="store.switchCvModal">
          CV
        </div>
      </div>
    </div>
  </div>
  <nav
    class="fixed hidden md:block top-0 left-0 z-20 w-full border-b px-2 py-2.5 backdrop-blur-sm border-gray-600 sm:px-4"
  >
    <div
      class="container mx-auto flex flex-wrap items-center justify-between max-w-7xl"
    >
      <NuxtLink
        to="/"
        class="text-center flex items-center font-semibold text-xl"
      >
        <img class="logo w-48" src="/assets/img/logo.png" alt="" />
        Abdulkadir Iba
      </NuxtLink>

      <div class="hidden w-full items-center justify-between md:flex md:w-auto">
        <ul
          class="mt-4 flex flex-col rounded-lg border px-4 py-2 border-gray-700 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:text-sm md:font-medium"
        >
          <li v-for="nav in navigation" :key="nav.path">
            <NuxtLink
              class="nav-link text-lg text-white hover:text-green-300 animated-link h-100 flex py-2 pl-3 pr-2"
              :to="nav.path"
            >
              <Icon :name="nav.icon" size="24px" class="mr-1" />
              {{ nav.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="hidden md:block">
        <Icon
          class="cursor-pointer"
          name="mingcute:layout-line"
          size="24px"
          @click="store.layout = 'default'"
        />
      </div>
    </div>
  </nav>
</template>
