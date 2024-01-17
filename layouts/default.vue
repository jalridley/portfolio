<template>
  <header>
    <h1>Hello, I am Jal.</h1>
    <nav class="space-x-2">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/bio">bio</NuxtLink>
      <NuxtLink to="/skills">skills</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
