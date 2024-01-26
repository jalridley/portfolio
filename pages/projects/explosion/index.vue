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

      <EmptyState>
        <template #icon>
          <IconsEmptyEye />
        </template>
      </EmptyState>
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
          class="h-40 w-2 rounded-l-lg"
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
      </div>

      <p>
        <strong>Descriptive text about Component</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        quos corrupti, odit officia hic non illum, modi labore similique neque
        temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
        necessitatibus.
      </p>
    </article>
    <article class="rounded border border-gray-400 bg-purple-300 p-4">
      <h2>Custom Icon Design</h2>
      <span class="flex flex-wrap space-x-2">
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <IconsActions class="h-6 w-6" />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/animate-sparkles.svg"
            alt="Animated sparkles icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/annotation.svg"
            alt="Annotation icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/flag.svg"
            alt="Flag icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/loading.svg"
            alt="Animated loading icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/save-disc.svg"
            alt="Save disc icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/tag.svg"
            alt="Tag icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/tasks.svg"
            alt="Tasks icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/trash.svg"
            alt="Trash can icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/user-minus.svg"
            alt="User with minus icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/user-plus.svg"
            alt="User with plus icon"
            class="h-6 w-6"
          />
        </div>
        <div
          class="flex h-11 w-24 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white"
        >
          <img
            src="@/assets/icons/explosion/team.svg"
            alt="Team icon"
            class="h-6 w-16"
          />
        </div>
      </span>

      <p>
        <strong>Descriptive text about Component</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        quos corrupti, odit officia hic non illum, modi labore similique neque
        temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
        necessitatibus.
      </p>
    </article>
    <article class="rounded border border-gray-400 bg-purple-300 p-4">
      <h2>Stats List Component</h2>
      <StatsList
        title="Stats"
        :items="[
          {
            icon: IconsStatusActive,
            stat: 9,
            name: 'Running',
            // url: links to item url if there is one,
            classes: 'text-emerald-600 hover:text-emerald-700',
          },
          {
            icon: IconsStatusLoading,
            stat: 7,
            name: 'Starting',
            // url: links to item url if there is one,
            classes: 'text-sky-600 hover:text-sky-700',
          },
          {
            icon: IconsStatusPaused,
            stat: 3,
            name: 'Stopped',
            // url: links to item url if there is one,
            classes: 'text-slate-600 hover:text-slate-700',
          },
          {
            icon: IconsStatusPending,
            stat: 5,
            name: 'Pending',
            // url: links to item url if there is one,
            classes: 'text-slate-500 hover:text-slate-600',
          },
          {
            icon: IconsStatusError,
            stat: 5,
            name: 'Failed',
            // url: links to item url if there is one,
            classes: 'text-rose-600 hover:text-rose-700',
          },
        ]"
      />
      <p>
        <strong>Descriptive text about Component</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
        quos corrupti, odit officia hic non illum, modi labore similique neque
        temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
        necessitatibus.
      </p>
    </article>
    <article class="rounded border border-gray-400 bg-purple-300 p-4">
      <h2>Stats Grid Component</h2>
      <StatsGrid
        :items="[
          {
            name: pluralize(3, 'Action'),
            stat: 12,
            icon: IconsActions,
          },
          {
            name: 'Running',
            stat: 9,
            icon: IconsStatusActive,
          },
          {
            name: 'Failed',
            stat: 2,
            icon: IconsStatusError,
          },
        ]"
      />
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
import { pluralize } from '@/utils/language'
import IconsStatusActive from '~/components/icons/IconsStatusActive.vue'
import IconsStatusLoading from '~/components/icons/IconsStatusLoading.vue'
import IconsStatusPaused from '~/components/icons/IconsStatusPaused.vue'
import IconsStatusPending from '~/components/icons/IconsStatusPending.vue'
import IconsStatusError from '~/components/icons/IconsStatusError.vue'
import IconsActions from '~/components/icons/IconsActions.vue'

useHead({
  title: 'Explosion Ai',
})
</script>
