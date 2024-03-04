<template>
  <div
    class="mx-auto flex min-h-screen max-w-5xl flex-col font-raleway sm:mt-6 lg:mt-12"
  >
    <nav
      class="sticky top-0 mb-3 flex justify-between border-b border-slate-950/10 bg-white p-3 md:mb-8 md:p-4 lg:mb-10 dark:bg-slate-950"
    >
      <div class="flex items-center gap-4 md:gap-8 lg:gap-10">
        <NuxtLink to="/"
          ><img src="/assets/svg/home.svg" alt="home icon" class="h-5 w-5"
        /></NuxtLink>
        <NuxtLink to="/bio">bio</NuxtLink>
        <NuxtLink to="/skills">skills</NuxtLink>
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </div>
      <span class="flex items-center">
        <img src="/assets/svg/sun.svg" alt="sun icon" class="mr-1 h-5 w-5" />
      </span>
    </nav>
    <main class="flex grow flex-col">
      <slot />
    </main>
    <footer class="flex justify-center bg-white p-2 dark:bg-slate-950">
      <div class="text-xs">
        &copy; {{ new Date().getFullYear() }} Jal Ridley.
      </div>
    </footer>
  </div>
</template>
