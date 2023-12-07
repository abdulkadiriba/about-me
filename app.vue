<script lang="ts" setup>
import { useGlobalStore } from "~/stores/globalStore";
const store = useGlobalStore();
</script>

<template>
  <div>
    <cv-modal />
    <NuxtLayout :name="store.layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.nav-link {
  position: relative;
}
.nav-link::before {
  content: "";
  width: 0px;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s all;
  z-index: -1;
  background-image: linear-gradient(90deg, #4ade80, #49de84);
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}

.nav-link::after {
  content: "";
  width: 0px;
  height: 2px;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.3s all;
  z-index: -1;
  background-image: linear-gradient(90deg, #49de84, #4ade80);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}

.nav-link:not(.active):hover::before {
  content: "";
  -webkit-animation: grow-up 1.5s ease-in-out infinite alternate;
  animation: grow-up 1.5s ease-in-out infinite alternate;
  width: 50%;
}
.nav-link:not(.active):hover::after {
  content: "";
  -webkit-animation: grow-up 1.5s ease-in-out infinite alternate;
  animation: grow-up 1.5s ease-in-out infinite alternate;
  width: 50%;
}

body {
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    /* bottom, image */ url("/assets/img/bg.jpeg");

  background-size: cover;
  @apply bg-zinc-800 text-zinc-200;
}
</style>
