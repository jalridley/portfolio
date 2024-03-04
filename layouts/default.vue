<template>
  <div
    class="mx-auto flex min-h-screen max-w-5xl flex-col font-raleway sm:mt-6 lg:mt-12"
  >
    <nav
      class="lg::mb-10 mb-3 flex justify-between bg-green-200 p-3 md:mb-8 md:p-4"
    >
      <div class="flex items-center gap-4">
        <NuxtLink to="/"
          ><img src="/assets/svg/home.svg" alt="home icon" class="h-4 w-4"
        /></NuxtLink>
        <NuxtLink to="/bio">bio</NuxtLink>
        <NuxtLink to="/skills">skills</NuxtLink>
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </div>
      <div class="flex">
        <span class="flex items-center">
          <img src="/assets/svg/sun.svg" alt="sun icon" class="h-4 w-4" />
          light
        </span>
        <span class="flex items-center">
          <img src="/assets/svg/moon.svg" alt="moon icon" class="h-3.5 w-3.5" />
          dark
        </span>
      </div>
    </nav>
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
