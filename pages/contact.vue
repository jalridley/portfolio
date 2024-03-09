<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Contact.
    </h1>
    <div>
      <div class="flex items-center">
        <Icon name="mdi:linkedin" class="h-6 w-6" />
        <a
          href="https://www.linkedin.com/in/jal-ridley"
          class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        >
          LinkedIn</a
        >
      </div>
      <div class="flex items-center">
        <Icon name="heroicons:envelope" />
        <a
          href="mailto:ridleyjal@gmail.com"
          class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
          >Email</a
        >
      </div>
    </div>
    <div
      class="grid grid-cols-3 gap-5 rounded-xl sm:gap-10 md:grid-cols-4 lg:gap-16"
    >
      <NuxtLink
        to="https://github.com/jalridley"
        aria-label="Go to Jal's Github"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="mdi:github" title="Github" />
      </NuxtLink>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>
