<template>
  <div class="h-full rounded border border-slate-200 bg-white">
    <div class="border-b border-slate-200 px-4 py-2 font-medium text-slate-600">
      {{ title }}
    </div>
    <ul class="py-1">
      <li v-for="item in filteredItems" :key="item.name" class="text-sm">
        <LinkButton
          v-if="item.url"
          variant="tertiaryButton"
          to=""
          :icon="item.icon"
          :aria-label="`Link to ${item.name} stats`"
          iconClass="h-3.5 w-3.5"
          class="group my-1"
          :class="item.classes"
        >
          <span class="flex w-full items-center justify-between">
            <span>
              {{ item.stat }}
              {{ item.name }}
            </span>
            <IconsChevronUp class="h-2.5 w-2.5 rotate-90" />
          </span>
        </LinkButton>
        <div v-else class="my-1 flex items-center px-4 py-2">
          <component :is="item.icon" class="mr-2 h-3.5 w-3.5" />
          {{ item.stat }}
          {{ item.name }}
        </div>
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
