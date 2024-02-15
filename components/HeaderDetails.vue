<template>
  <div class="flex flex-col">
    <span v-if="headline" class="text-sm uppercase text-slate-500">
      {{ headline }}
    </span>
    <component
      :is="isCardHeader ? 'h2' : 'h1'"
      v-if="title"
      class="flex items-baseline font-semibold text-slate-700"
      :class="[isCardHeader ? 'text-xl' : 'text-2xl']"
    >
      <component
        :is="icon"
        class="mr-1.5 text-slate-600"
        :class="[isCardHeader ? 'ml-0.5 h-3.5 w-3.5' : 'h-4 w-4']"
      />
      {{ title }}
    </component>
    <p v-if="description" class="text-slate-600">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headline?: string
  icon: Component
  title: string
  isCardHeader?: boolean
  description?: string
}

defineProps<Props>()
</script>
