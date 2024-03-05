<template>
  <section>
    <h1 class="font-besley text-2xl">contact page</h1>
    <div>
      <div class="flex items-center">
        <Icon name="mdi:github" />
        <a
          href="https://github.com/jalridley"
          class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        >
          Github</a
        >
      </div>
      <div class="flex items-center">
        <Icon name="mdi:linkedin:add-fill" />
        <a
          href="https://www.linkedin.com/in/jal-ridley"
          class="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
        >
          LinkedIn</a
        >
      </div>
      <div>
        <a
          href="mailto:ridleyjal@gmail.com"
          class="flex items-center text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
          ><img
            src="/assets/svg/envelope.svg"
            alt="envelope icon"
            class="mr-1 h-4 w-4"
          />Email</a
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
