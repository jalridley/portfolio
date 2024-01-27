<template>
  <section :class="classes">
    <ul class="flex space-x-10">
      <li v-for="item in items" :key="item.name" class="flex items-center">
        <component :is="item.icon" class="mr-2 h-3 w-3" />
        <strong class="mr-1 text-base font-medium text-slate-800">{{
          item.stat
        }}</strong>

        <span class="text-slate-500">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { StatItem } from '~/types/index'

interface Props {
  items: StatItem[]
  classes?: string
}

withDefaults(defineProps<Props>(), {
  classes: '',
})
</script>
