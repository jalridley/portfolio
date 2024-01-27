<template>
  <div
    class="rounded-md border border-gray-200 bg-white px-4 py-12 text-center text-gray-500"
  >
    <div class="motion-safe:animate-icon-bounce mx-auto h-16 w-16">
      <slot name="icon"><IconsEmptyEye /></slot>
    </div>
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

const props = withDefaults(defineProps<Props>(), {
  emptyTitle: '',
  emptyText: 'There is nothing to preview.',
})
</script>
