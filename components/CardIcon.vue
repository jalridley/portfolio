<template>
  <div>
    <Icon
      :name="icon"
      class="!mr-0 h-16 w-16 sm:h-28 sm:w-28"
      :class="iconClasses"
    />
    <div class="mt-2 text-center">{{ title }}</div>
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
