<template>
  <section class="lg:flex lg:justify-between">
    <h1
      class="flex flex-col font-besley text-4xl font-bold xs:text-5xl md:space-y-2 md:text-6xl lg:text-7xl"
    >
      <span>Introducing</span>
      <span>Jal Ridley.</span>
      <span>Front End</span>
      <span>Developer.</span>
    </h1>
    <div class="w-full">
      <NuxtImg
        src="/avatar.png"
        class="ml-auto mt-6 flex-1 rounded-b-3xl md:mt-10 lg:mt-14"
        alt="illustration of Jal smiling with short hair styled up"
        width="548px"
        height="566px"
        sizes="xs:348px sm:348px md:448px lg:566px xl:566px"
        format="webp"
        decoding="auto"
        loading="lazy"
        ismap
      />
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>
