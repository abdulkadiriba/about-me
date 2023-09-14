<template>
  <div>
    <Navbar />
    <div class="ml-64 p-40">
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