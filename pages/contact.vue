<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Contact.
    </h1>
    <div>
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
        target="_blank"
        aria-label="Go to Jal's Github page"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="skill-icons:github-dark" title="Github" />
        <!-- <CardIcon icon="skill-icons:github-light" title="Github" /> -->
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/jal-ridley"
        target="_blank"
        aria-label="Go to Jal's LinkedIn profile"
        class="hover:text-yellow-500"
      >
        <CardIcon icon="simple-icons:linkedin" title="LinkedIn" />
        <!-- dark mode -->
        <!-- <CardIcon
          icon="simple-icons:linkedin"
          title="LinkedIn"
          color="#64748b"
        /> -->
      </NuxtLink>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>
