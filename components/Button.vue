<template>
  <NuxtLink
    :to="to"
    :target="target"
    :aria-label="ariaLabel"
    class="w-full rounded-xl bg-yellow-400 px-6 py-3 text-lg hover:bg-yellow-500 lg:w-auto"
  >
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  to: string
  target?: string
  ariaLabel: string
}
defineProps<Props>()
</script>
