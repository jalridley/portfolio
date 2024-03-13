<template>
  <article
    class="flex w-full flex-1 flex-col justify-between overflow-hidden rounded-xl bg-white pb-3 shadow-3xl"
  >
    <div class="pb-5">
      <div class="h-72 w-full md:h-80 lg:h-96">
        <slot />
      </div>
      <div class="border-t p-5">
        <h2 class="mb-3 font-besley text-2xl font-bold capitalize md:text-3xl">
          {{ header }}
        </h2>
        <slot name="text" />
      </div>
    </div>
    <span class="px-5 pb-5 text-center">
      <slot name="button" />
    </span>
  </article>
</template>
<script setup lang="ts">
interface Props {
  header: string
}
defineProps<Props>()
</script>
