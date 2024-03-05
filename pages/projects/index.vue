<template>
  <section>
    <h1 class="font-besley text-2xl">projects page</h1>
    <div class="flex flex-col">
      <NuxtLink
        class="hover:text-emerald-700"
        to="/projects/explosion"
        aria-label="Read more about Jal's work at Explosion AI"
        >Explosion Ai</NuxtLink
      >
      <NuxtLink
        class="hover:text-emerald-700"
        to="/projects/pinball-wizard"
        aria-label="Read more about Jal's project Pinball Wizard"
        >Pinball Wizard</NuxtLink
      >
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Projects',
})
</script>
