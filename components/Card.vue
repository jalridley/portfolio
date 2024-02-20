<template>
  <article class="shadow-3xl max-w-sm overflow-hidden rounded-xl bg-white">
    <div class="h-72">
      <slot />
    </div>
    <div class="px-4 py-2">
      <h1 class="text-xl font-bold uppercase text-gray-800">
        {{ header }}
      </h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        <slot name="text" />
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
interface Props {
  header: string
}

defineProps<Props>()
</script>
