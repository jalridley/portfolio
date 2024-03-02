<template>
  <dl
    class="grid divide-x divide-gray-200 rounded border border-gray-200 bg-white font-sans"
    :class="[numCols.get(itemsLength(items))]"
  >
    <div v-for="item in items" :key="item.name" class="p-4 text-center">
      <dd>
        <span class="text-3xl font-medium">{{ item.stat }}</span>
        <component
          :is="item.icon"
          class="ml-1 inline-block h-3.5 w-3.5 align-baseline text-slate-500"
        />
      </dd>
      <dt class="text-xs tracking-wide text-slate-500">
        {{ item.name }}
      </dt>
    </div>
  </dl>
</template>

<script setup lang="ts">
import type { StatItem } from '~/types'

interface Props {
  items: StatItem[]
}

defineProps<Props>()

const itemsLength = (items: any) => {
  if (items.length === 0 || items.length > 3 || !items) {
    return undefined
  }
  return items.length
}

const numCols = new Map([
  [1, 'grid-cols-1'],
  [2, 'grid-cols-2'],
  [3, 'grid-cols-3'],
])
</script>
