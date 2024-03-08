<template>
  <article class="w-full overflow-hidden rounded-xl bg-white shadow-3xl">
    <div class="h-96">
      <slot />
    </div>

    <div class="border-t p-5">
      <h1 class="font-besley text-xl font-bold uppercase">
        {{ header }}
      </h1>
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
