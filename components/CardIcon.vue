<template>
  <div class="flex flex-col items-center">
    <Icon
      :name="icon"
      class="!mr-0 h-16 w-16 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
      :class="iconClasses"
    />
    <div class="mt-2 text-center sm:text-xl">{{ title }}</div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  icon: string
  title: string
  iconClasses?: string
}
defineProps<Props>()
</script>
