<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Skills.
    </h1>
    <ul class="mb-5">
      <li class="flex">
        <Icon name="skill-icons:javascript" />
        Javascript
      </li>
      <li class="flex">
        <Icon name="skill-icons:vuejs-light" /><Icon
          name="skill-icons:vuejs-dark"
        />Vue.js
      </li>
      <li class="flex">
        <Icon name="skill-icons:nuxtjs-dark" /><Icon
          name="skill-icons:nuxtjs-light"
        />Nuxt
      </li>
      <li class="flex">
        <Icon name="skill-icons:pinia-dark" /><Icon
          name="skill-icons:pinia-light"
        />Pinia
      </li>
      <li class="flex">
        <Icon name="skill-icons:tailwindcss-dark" /><Icon
          name="skill-icons:tailwindcss-light"
        />TailwindCSS
      </li>
      <li class="flex"><Icon name="skill-icons:typescript" />Typescript</li>
      <li class="flex"><Icon name="skill-icons:html" />HTML</li>
      <li class="flex"><Icon name="skill-icons:css" />CSS</li>
      <li class="flex"><Icon name="skill-icons:sass" />SASS</li>
      <li class="flex">
        <Icon
          name="vscode-icons:file-type-storybook"
          class="rounded-md bg-[#f4f2ed] p-0.5"
        />Storybook
      </li>
      <li class="flex"><Icon name="skill-icons:cypress-light" />Cypress</li>
      <li class="flex">
        <Icon name="skill-icons:vitest-dark" /><Icon
          name="skill-icons:vitest-light"
        />Vitest
      </li>
      <li class="flex">
        <Icon name="skill-icons:git" /><Icon
          name="skill-icons:github-dark"
        /><Icon name="skill-icons:github-light" />Git/Github
      </li>
      <li class="flex">
        <Icon name="skill-icons:figma-dark" /><Icon
          name="skill-icons:figma-light"
        />Figma
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Skills',
})
</script>
