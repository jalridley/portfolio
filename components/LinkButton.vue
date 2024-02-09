<template>
  <NuxtLink v-bind="$attrs" :to="to" :class="classes" :aria-label="ariaLabel">
    <component :is="icon" class="mr-2 h-3 w-3 shrink-0" />
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  variant?: 'primaryButton' | 'secondaryButton'
  to?: string | Record<string, unknown>
  icon: Component
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primaryButton',
  to: undefined,
  ariaLabel: undefined,
})

const baseButton =
  'border flex justify-center items-center space-x-1 font-medium rounded-md transition focus-visible:focus-default px-4 py-2 text-base'

const primaryButton = [baseButton, 'text-white bg-purple hover:bg-purple-700']

const secondaryButton = [
  baseButton,
  'bg-white text-purple-500 border-purple-300 hover:text-purple-800 hover:border-purple-400',
]

const variants = {
  primaryButton,
  secondaryButton,
}

const classes = computed(() => [variants[props.variant]])
</script>
