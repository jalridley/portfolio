<template>
  <section class="flex justify-between">
    <h1
      class="flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      <span>Introducing</span>
      <span>Jal Ridley.</span>
      <span>Front End</span>
      <span>Developer.</span>
    </h1>
    <NuxtImg
      src="/avatar.png"
      class="mt-5 flex-1 rounded-b-full"
      alt="illustration of Jal smiling with short hair styled up"
      width="960px"
      height="992px"
      sizes="192px sm:288px md:384px lg:448px"
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
