<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Projects.
    </h1>
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
      <NuxtLink
        class="hover:text-emerald-700"
        to="/projects/palmodoro"
        aria-label="Read more about Jal's project Pinball Wizard"
        >Palmodoro</NuxtLink
      >
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Projects',
})
</script>
