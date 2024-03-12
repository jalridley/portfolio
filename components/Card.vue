<template>
  <article class="w-full overflow-hidden rounded-xl bg-white shadow-3xl">
    <div class="h-72 md:h-80 lg:h-96">
      <slot />
    </div>

    <div class="border-t p-5">
      <h2 class="font-besley text-xl font-bold capitalize md:text-3xl">
        {{ header }}
      </h2>
      <p class="pt-3">
        <slot name="text" />
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
interface Props {
  header: string
}
defineProps<Props>()
</script>
