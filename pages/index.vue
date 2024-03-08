<template>
  <section class="flex justify-between">
    <h1
      class="flex flex-col font-besley text-3xl font-bold sm:text-5xl md:space-y-2 md:text-6xl lg:text-7xl"
    >
      <span>Introducing</span>
      <span>Jal Ridley.</span>
      <span>Front End</span>
      <span>Developer.</span>
    </h1>
    <NuxtImg
      src="/avatar.png"
      class="mt-6 flex-1 rounded-b-full md:mt-10 lg:mt-14"
      alt="illustration of Jal smiling with short hair styled up"
      width="960px"
      height="992px"
      sizes="148px sm:248px md:348px lg:448px"
      format="webp"
      decoding="auto"
      loading="lazy"
      ismap
    />
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
