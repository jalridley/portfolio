<template>
  <div
    class="container mx-auto flex min-h-screen min-w-[390px] flex-col overflow-x-auto p-4 2xl:w-3/5"
  >
    <header class="bg-yellow-100 text-right">
      <div>dark mode toggle</div>
    </header>
    <main class="flex-grow">
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
    <footer class="flex justify-center p-2">
      <div class="text-xs text-slate-500">
        &copy; {{ new Date().getFullYear() }} Jal Ridley. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>
