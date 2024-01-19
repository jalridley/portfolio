<template>
  <div
    class="rounded-md border border-gray-200 bg-white px-4 py-12 text-center text-gray-500"
  >
    <img
      src="../assets/icons/eye-empty.svg"
      alt="Crossed out eye"
      aria-hidden="true"
      :name="icon"
      class="motion-safe:animate-icon-bounce mx-auto h-16 w-16"
    />
    <h3 v-if="emptyTitle" class="mt-2 font-medium">
      {{ emptyTitle }}
    </h3>
    <div class="mt-1 text-sm">
      <p>{{ emptyText }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  emptyTitle?: string
  emptyText?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'eye-empty',
  emptyTitle: '',
  emptyText: 'There is nothing to preview.',
})
</script>
