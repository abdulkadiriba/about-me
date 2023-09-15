<template>
  <div class="fixed top-16 w-72">
    <div class="animate-text text-4xl text-white">FRONTENDCHARM</div>
  </div>
</template>

<script setup>

</script>
<style>

.animate-text {
  letter-spacing: 1vw;
  background: url("https://thumbs.dreamstime.com/b/tropical-flower-pattern-seamless-flowers-blossom-flowers-nature-background-vector-illustration-61142748.jpg");
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
</style>