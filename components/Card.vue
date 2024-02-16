<template>
  <div
    class="max-w-xs overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800"
  >
    <slot />
    <div class="px-4 py-2">
      <h1 class="text-xl font-bold uppercase text-gray-800 dark:text-white">
        {{ header }}
      </h1>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  header: string
}

defineProps<Props>()
</script>
