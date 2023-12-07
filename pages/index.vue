<script setup>
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
</script>
<template>
  <div class="md:mt-20 mt-5">
    <Head>
      <Title>Home - Wayne</Title>
      <Meta name="description" content="Abdulkadir iba private blog"/>
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
      <div class="mt-10 sm:p-5 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <NuxtLink
          :to="profile.url"
          target="_blank"
          v-for="profile in profiles"
          :key="profile.name"
          class="profiles group relative"
        >
          <div
            class="w-full bg-red-600 absolute group-hover:h-32 h-0 duration-700 bottom-0 transition-all"
          ></div>
          <div class="px-5 py-3.5 flex justify-between items-center">
            <Icon
              :name="profile.icon"
              class="h-12 group-hover:translate-x-3 duration-500"
              size="34px"
            />
            <div class="text-xl group-hover:-translate-x-9 duration-500">
              {{ profile.name }}
            </div>
          </div>
        </NuxtLink>
      </div>
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

.profiles:hover {
  @apply scale-105 border-zinc-400;
}
</style>
