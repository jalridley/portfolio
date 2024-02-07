<template>
  <div class="h-full rounded border border-slate-200 bg-white">
    <div class="border-b border-slate-200 px-4 py-2 font-medium text-slate-600">
      {{ title }}
    </div>
    <ul class="py-1">
      <li v-for="item in filteredItems" :key="item.name" class="text-sm">
        <NuxtLink
          to=""
          class="group my-1 flex h-full w-full items-center justify-between px-4 py-2 transition"
          :class="[
            {
              'focus-visible:focus-inset cursor-pointer hover:bg-slate-100':
                item.url,
            },
            item.classes,
          ]"
        >
          <span class="flex items-center">
            <span class="mr-2 h-3.5 w-3.5">
              <component :is="item.icon" />
            </span>
            {{ item.stat }}
            {{ item.name }}
          </span>
          <IconsChevronUp v-if="item.url" class="ml-2 h-2.5 w-2.5 rotate-90" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { StatItem } from '~/types/index'

interface Props {
  title: string
  items: StatItem[]
}

const props = defineProps<Props>()

const filteredItems = computed(() => {
  return props.items.filter((item: StatItem) => item.stat > 0)
})
</script>
