<template>
  <div>
    <Navbar />
    <!-- <test /> -->
    <div class="md:ml-64 p-5 sm:p-12 pt-20 xl:px-40 md:pt-40 overflow-auto h-screen">
      <slot />
    </div>
  </div>
</template>

<style>
body {
  background: url("/assets/img/1350.svg");
  @apply bg-zinc-950 text-zinc-200;
}
</style>
