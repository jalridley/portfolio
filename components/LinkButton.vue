<template>
  <NuxtLink v-bind="$attrs" :to="to" :class="classes" :aria-label="ariaLabel">
    <component
      v-if="icon"
      :is="icon"
      class="shrink-0"
      :class="iconClass || 'mr-2 h-3 w-3'"
    />
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  variant?: 'primaryButton' | 'secondaryButton' | 'tertiaryButton'
  to?: string | Record<string, unknown>
  icon?: Component
  ariaLabel?: string
  iconClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primaryButton',
  to: undefined,
  icon: undefined,
  ariaLabel: undefined,
  iconClass: undefined,
})

const baseButton =
  'border flex justify-center items-center space-x-1 font-medium rounded-md transition px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/90'

const primaryButton = [baseButton, 'text-white bg-purple hover:bg-purple-700']

const secondaryButton = [
  baseButton,
  'bg-white text-purple-500 border-purple-300 hover:text-purple-800 hover:border-purple-400',
]

const tertiaryButton =
  'flex items-center px-4 py-2 transition cursor-pointer hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/90'

const variants = {
  primaryButton,
  secondaryButton,
  tertiaryButton,
}

const classes = computed(() => [variants[props.variant]])
</script>
