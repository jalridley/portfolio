<template>
  <div class="flex flex-col items-center">
    <Icon
      :name="icon"
      :color="color"
      class="h-24 w-24 sm:h-32 sm:w-32 lg:h-48 lg:w-48"
      :class="iconClasses"
    />
    <div class="mt-2 text-center text-lg font-medium sm:text-2xl">
      {{ title }}
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  icon: string
  title: string
  iconClasses?: string
  color?: string
}
defineProps<Props>()
</script>
