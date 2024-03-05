<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Contact.
    </h1>
    <div>
      <div class="flex items-center">
        <Icon name="mdi:github" class="h-6 w-6" />
        <a
          href="https://github.com/jalridley"
          class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        >
          Github</a
        >
      </div>
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
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>
