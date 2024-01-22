<template>
  <div
    :style="{
      background: linearGradient(filteredItems),
    }"
  />
</template>
<script setup lang="ts">
import linearGradient from '@/utils/linear-gradient'
import type { ColorStatItem } from '~/types/index'

interface Props {
  items: ColorStatItem[]
}

const props = defineProps<Props>()

const filteredItems = computed(() => {
  return props.items.filter((item: { value: number }) => item.value > 0)
})
console.log(linearGradient(filteredItems.value))
</script>
