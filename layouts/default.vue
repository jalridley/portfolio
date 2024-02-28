<template>
  <div
    class="mx-auto flex min-h-screen max-w-5xl flex-col px-4 sm:px-6 lg:px-8"
  >
    <header>
      <div class="flex justify-end">
        <span class="flex items-center">
          <img src="/assets/svg/sun.svg" alt="sun icon" class="h-4 w-4" />
          light
        </span>
        <span class="flex items-center">
          <img src="/assets/svg/moon.svg" alt="moon icon" class="h-3.5 w-3.5" />
          dark
        </span>
      </div>
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
        &copy; {{ new Date().getFullYear() }} Jal Ridley.
      </div>
    </footer>
  </div>
</template>
