<script setup lang="ts">
const route = useRoute();
const { isMobile, isDesktop } = useDevice();

import { useGlobalStore } from "~/stores/globalStore";
const store = useGlobalStore();

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
const isActive = ref(false);

watch(
  () => route.path,
  () => (isActive.value = false)
);
</script>
<template>
  <div>
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
      class="w-full md:block md:w-72 z-30 h-screen fixed backdrop-blur-sm bg-gradient-to-r from-zinc-950/50 to-zinc-950/50"
    >
      <div class="p-10 h-full flex flex-col justify-between content-between">
        <NuxtLink to="/" class="text-center font-semibold text-xl">
          <img class="logo" src="/assets/img/logo.png" alt="" />
          Abdulkadir Iba
        </NuxtLink>
        <div class="menu">
          <NuxtLink
            v-for="nav in navigation"
            :key="nav.path"
            :class="route.path === nav.path ? 'active' : ''"
            :to="nav.path"
          >
            <Icon :name="nav.icon" color="gray" size="24px" class="mr-1" />
            {{ nav.name }}</NuxtLink
          >
          <a
            v-if="$device.isDesktop"
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
          <div
            class="cv cursor-pointer text-center"
            @click="store.switchCvModal"
          >
            CV
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu a {
  @apply duration-200 flex justify-center items-center text-lg font-semibold text-center px-5 py-2 my-2 border-l-2 border-r-2 border-transparent;
}

.menu a:hover {
  @apply border-white;
  animation: pulse 3s infinite;
}

.menu .active {
  @apply border-white;
  animation: pulse 3s infinite;
}

.logo {
  filter: drop-shadow(2px 4px 16px #fff);
  animation: shining 2s infinite;
}

.cv {
  @apply hover:bg-zinc-100/20 px-5 py-2;
  animation: shining 2s infinite;
}

@keyframes pulse {
  0% {
    @apply bg-white/10;
  }

  50% {
    @apply bg-white/20;
    filter: drop-shadow(0px 0px 40px #fff);
    text-shadow: #fff 0 0 20px;
    color: #fff;
  }

  100% {
    @apply bg-white/10;
  }
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

.wrong-animate {
  background-color: red;
  animation: moveButton 0.2s ease-in-out infinite;
}

@keyframes moveButton {
  0%,
  100% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
    /* Sağa kaydır */
  }
}
</style>
