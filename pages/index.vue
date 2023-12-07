<script setup>
import { useGlobalStore } from "~/stores/globalStore";
const store = useGlobalStore();
const profiles = ref([
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
const navigation = ref([
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
  <div class="md:mt-20 mt-5">
    <Head>
      <Title>Home - Wayne</Title>
      <Meta name="description" content="Abdulkadir iba private blog" />
    </Head>
    <div
      class="animate-text text-4xl md:text-6xl text-white font-extrabold text-center"
    >
      FRONTEND DEVELOPER
    </div>
    <div class="mt-5 md:mt-20 sm:text-xl">
      My name is Abdulkadir, I am a Frontend web developer and also an
      Electrical-Electronics Engineer. If you want to get more information about
      me, you can contact me.
      <Icon name="twemoji:smiling-face-with-smiling-eyes" />
    </div>

    <div>
      <div class="mt-10 grid sm:grid-cols-2 gap-5">
        <NuxtLink
          :to="link.path"
          v-for="link in navigation"
          :key="link.name"
          class="profiles group relative w-full"
        >
          <div
            class="w-full bg-red-600 group-hover:h-full absolute -z-10 h-0 duration-700 bottom-0 transition-all"
          ></div>
          <div class="px-5 py-3.5 flex justify-between items-center">
            <Icon :name="link.icon" class="h-12" size="34px" />
            <div class="text-xl">
              {{ link.name }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="cv cursor-pointer text-center bg-gray-700 rounded-lg mt-5"
      @click="store.switchCvModal"
    >
      Download Resume (CV)
    </div>
    <div class="grid sm:grid-cols-4 gap-5 mt-5">
      <NuxtLink
        :to="link.url"
        target="_blank"
        v-for="link in profiles"
        :key="link.index"
        class="profiles group relative p-1 text-center"
      >
        <div
          class="w-full bg-red-600 group-hover:h-full absolute -z-10 h-0 duration-700 bottom-0 transition-all"
        ></div>
        <Icon :name="link.icon" class="h-12" size="34px" />

        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<style>
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

.profiles {
  @apply duration-200 bg-zinc-900 rounded-lg border-2 border-zinc-200/80 overflow-hidden transition-all backdrop-blur-md;
}
</style>
