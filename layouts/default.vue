<template>
  <div>
    <Navbar />
    <!-- <test /> -->
    <div class="md:ml-64 p-12 pt-20 md:px-40 md:pt-40">
      <slot />
    </div>
  </div>
</template>

<style>
body{
  background: url('/assets/img/1350.svg');
  @apply bg-zinc-950 text-zinc-200;
}
</style>