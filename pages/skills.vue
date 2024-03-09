<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Skills.
    </h1>
    <div
      class="grid grid-cols-3 gap-5 rounded-xl sm:gap-10 md:grid-cols-4 lg:gap-16"
    >
      <CardIcon icon="skill-icons:javascript" title="Javascript" />
      <!-- <CardIcon icon="skill-icons:vuejs-light" title="Vue.js" /> -->
      <CardIcon icon="skill-icons:vuejs-dark" title="Vue.js" />
      <!-- <CardIcon icon="skill-icons:nuxtjs-light" title="Nuxt" /> -->
      <CardIcon icon="skill-icons:nuxtjs-dark" title="Nuxt" />
      <!-- <CardIcon icon="skill-icons:pinia-light" title="Pinia" /> -->
      <CardIcon icon="skill-icons:pinia-dark" title="Pinia" />
      <!-- <CardIcon icon="skill-icons:tailwindcss-light" title="TailwindCSS" /> -->
      <CardIcon icon="skill-icons:tailwindcss-dark" title="TailwindCSS" />
      <CardIcon icon="skill-icons:typescript" title="Typescript" />
      <CardIcon icon="skill-icons:html" title="HTML" />
      <CardIcon icon="skill-icons:css" title="CSS" />
      <CardIcon icon="skill-icons:sass" title="SASS" />
      <CardIcon
        icon="vscode-icons:file-type-storybook"
        title="Storybook"
        icon-classes="rounded-2xl sm:rounded-3xl bg-[#242938] p-0.5"
      />
      <!-- <CardIcon
        icon="vscode-icons:file-type-storybook"
        title="Storybook"
        icon-classes="rounded-2xl sm:rounded-3xl bg-[#f4f2ed] p-0.5"
      /> -->
      <!-- <CardIcon icon="skill-icons:cypress-light" title="Cypress" /> -->
      <CardIcon icon="skill-icons:cypress-dark" title="Cypress" />
      <!-- <CardIcon icon="skill-icons:vitest-light" title="Vitest" /> -->
      <CardIcon icon="skill-icons:vitest-dark" title="Vitest" />
      <CardIcon icon="skill-icons:git" title="Git" />
      <!-- <CardIcon icon="skill-icons:github-light" title="Github" /> -->
      <CardIcon icon="skill-icons:github-dark" title="Github" />
      <!-- <CardIcon icon="skill-icons:figma-light" title="Figma" /> -->
      <CardIcon icon="skill-icons:figma-dark" title="Figma" />
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Skills',
})
</script>
