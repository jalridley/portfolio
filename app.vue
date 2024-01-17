<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s | Jal Ridley',
  title: 'Home',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content:
        'A portfolio portal for all things web development created by Jal Ridley',
    },
  ],
})
</script>
