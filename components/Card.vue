<template>
  <article class="max-w-sm overflow-hidden rounded-xl bg-white shadow-3xl">
    <div class="max-h-72">
      <slot />
    </div>
    <div>
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
