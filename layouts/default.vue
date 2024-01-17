<template>
  <div
    class="3xl:w-1/2 container mx-auto h-screen w-full bg-red-100 p-4 2xl:w-3/5"
  >
    <header class="bg-yellow-100 text-right">
      <div>dark mode toggle</div>
    </header>
    <main class="bg-gray-300">
      <h1 class="bg-blue-200">Hello, I am Jal.</h1>
      <nav class="space-x-2 bg-green-200">
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/bio">bio</NuxtLink>
        <NuxtLink to="/skills">skills</NuxtLink>
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </nav>
      <slot />
    </main>
  </div>
</template>
