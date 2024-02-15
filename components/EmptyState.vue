<template>
  <div class="rounded-md bg-white px-4 py-12 text-center text-gray-500">
    <component
      :is="icon"
      class="mx-auto h-16 w-16 motion-safe:animate-icon-bounce"
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
import IconsEmptyEye from '~/components/icons/IconsEmptyEye.vue'

interface Props {
  icon?: Component
  emptyTitle?: string
  emptyText?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: IconsEmptyEye,
  emptyTitle: '',
  emptyText: 'There is nothing to preview.',
})
</script>
