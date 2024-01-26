<template>
  <dl :class="[numCols.get(itemsLength(items))]">
    <div v-for="(item, index) in items" :key="index" class="p-4 text-center">
      <dd>
        <span>{{ isLoading ? '...' : item.stat }}</span>
        <component
          :is="item.icon"
          class="ml-1 inline-block h-3.5 w-3.5 text-slate-500"
        />
      </dd>
      <dt>
        {{ item.name }}
      </dt>
    </div>
  </dl>
</template>

<script setup lang="ts">
interface StatusItem {
  name: string
  stat: string | number
  icon: string
}

interface Props {
  items: StatusItem[]
  isLoading?: boolean
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

<style lang="postcss" scoped>
dl {
  @apply grid divide-x divide-gray-200 rounded border border-gray-200 bg-white;
}

dd span {
  @apply text-3xl font-medium;
}

dt {
  @apply text-xs tracking-wide text-slate-500;
}
</style>
