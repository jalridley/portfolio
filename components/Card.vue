<template>
  <article class="max-w-md overflow-hidden rounded-xl bg-white shadow-3xl">
    <div class="h-80">
      <slot />
    </div>
    <div class="p-5">
      <h1 class="font-besley text-xl font-bold uppercase">
        {{ header }}
      </h1>
      <p class="mt-1">
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
