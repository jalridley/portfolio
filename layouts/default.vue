<template>
  <div class="mx-auto flex min-h-screen max-w-5xl flex-col font-raleway">
    <nav
      class="sticky top-0 mb-3 flex justify-between border-b border-slate-950/10 bg-white p-4 sm:mt-6 md:mb-8 lg:mb-10 lg:mt-12 dark:bg-slate-950"
    >
      <div class="flex items-center gap-4 md:gap-8 lg:gap-10">
        <NuxtLink class="nav-item" to="/"
          ><Icon name="heroicons-outline:home" class="mr-0"
        /></NuxtLink>
        <NuxtLink class="nav-item" to="/journey">journey</NuxtLink>
        <NuxtLink class="nav-item" to="/skills">skills</NuxtLink>
        <NuxtLink class="nav-item" to="/projects">projects</NuxtLink>
        <NuxtLink class="nav-item" to="/contact">contact</NuxtLink>
      </div>
      <span class="flex items-center">
        <Icon name="heroicons:sun" class="mr-0" />
        <!-- <Icon name="heroicons:moon" class="mr-0" /> -->
      </span>
    </nav>
    <main class="flex grow flex-col px-4 lg:px-0">
      <slot />
    </main>
    <footer class="flex justify-center bg-white p-2 dark:bg-slate-950">
      <div class="text-xs">
        &copy; {{ new Date().getFullYear() }} Jal Ridley.
      </div>
    </footer>
  </div>
</template>
<style lang="postcss" scoped>
.router-link-exact-active::after {
  @apply absolute block h-[4px] w-full scale-x-100 bg-yellow-500 transition-none;
}
</style>
