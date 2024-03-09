<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Contact.
    </h1>
    <div class="gap-5 sm:gap-10 md:flex md:justify-center lg:gap-16">
      <NuxtLink
        to="https://github.com/jalridley"
        target="_blank"
        aria-label="Go to Jal's Github page"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="mdi:github" title="Github" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/jal-ridley"
        target="_blank"
        aria-label="Go to Jal's LinkedIn profile"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="mdi:linkedin" title="LinkedIn" />
      </NuxtLink>
      <NuxtLink
        to="mailto:ridleyjal@gmail.com"
        target="_blank"
        aria-label="Email Jal"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="mdi:email-arrow-right" title="Email" />
      </NuxtLink>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>
