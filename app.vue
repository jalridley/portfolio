<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s | Jal Ridley',
  title: 'Jal Ridley Portfolio',
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
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/apple-icon-180.png',
      sizes: '180x180',
    },
  ],
})
</script>
