<template>
  <div class="container mx-auto flex min-h-screen flex-col overflow-x-auto p-4">
    <header class="bg-yellow-100">
      <div class="text-right">dark mode toggle</div>
      <h1 class="bg-blue-200">Hello, I am Jal.</h1>
      <nav class="flex items-center space-x-4 bg-green-200">
        <NuxtLink to="/"
          ><img src="/assets/svg/home.svg" alt="home icon" class="h-4 w-4"
        /></NuxtLink>
        <NuxtLink to="/bio">bio</NuxtLink>
        <NuxtLink to="/skills">skills</NuxtLink>
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </nav>
    </header>
    <main class="flex grow flex-col">
      <slot />
    </main>
    <footer class="flex justify-center p-2">
      <div class="text-xs text-slate-500">
        &copy; {{ new Date().getFullYear() }} Jal Ridley. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>
