<template>
  <section class="space-y-6">
    <h1 class="flex justify-center text-3xl font-bold">Explosion page 💥</h1>
    <p>
      <strong
        >Descriptive text about Explosion AI work and Prodigy Teams:</strong
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
      quos corrupti, odit officia hic non illum, modi labore similique neque
      temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
      necessitatibus.
    </p>
    <article class="rounded border border-gray-400 bg-purple-300 p-4">
      <h2>Empty State Component</h2>
      <EmptyState />
      <p>
        <strong>Descriptive text about Component</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        quos corrupti, odit officia hic non illum, modi labore similique neque
        temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
        necessitatibus.
      </p>
    </article>
    <article class="rounded border border-gray-400 bg-purple-300 p-4">
      <h2>Stats Percentage Bar Component</h2>
      <div class="flex h-full justify-center">
        <StatsPercentageBar
          class="w-2 rounded-l-lg"
          :items="[
            {
              color: 'rgba(5, 150, 105, 0.7)',
              value: 9,
            },
            {
              color: 'rgba(2, 132, 199, 0.7)',
              value: 7,
            },
            {
              color: 'rgba(71, 85, 105, 0.7)',
              value: 3,
            },
            {
              color: 'rgba(100, 116, 139, 0.7)',
              value: 5,
            },
            {
              color: 'rgba(225, 29, 72, 0.7)',
              value: 5,
            },
          ]"
        />
        <div class="ml-2 h-full py-1">
          <div class="px-4 py-2">Green stat label</div>
          <div class="px-4 py-2">Blue stat label</div>
          <div class="px-4 py-2">Dark gray stat label</div>
          <div class="px-4 py-2">Light gray stat label</div>
          <div class="px-4 py-2">Red stat label</div>
        </div>
      </div>

      <p>
        <strong>Descriptive text about Component</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        quos corrupti, odit officia hic non illum, modi labore similique neque
        temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
        necessitatibus.
      </p>
    </article>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: 'Explosion Ai',
})
</script>
