<template>
  <main class="bg-slate-50">
    <header>
      <section
        class="container mx-auto mt-2 px-6 py-2 md:py-4 lg:flex lg:max-w-4xl lg:justify-between lg:py-6 xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
      >
        <!-- <h1 class="flex justify-center text-5xl font-bold">Dashboard page</h1> -->
        <HeaderDetails
          title="Project X"
          :icon="IconsHome"
          description="US news in English"
        />
        <Stats
          classes="ml-0 flex shrink-0 grow-0 items-center justify-center text-slate-500 lg:ml-10"
          :items="[
            {
              name: pluralize(1, 'Admin'),
              icon: IconsAdministrator,
              stat: 1,
            },
            {
              name: pluralize(8, 'Dev'),
              icon: IconsCode,
              stat: 8,
            },
            {
              name: pluralize(22, 'Annotator'),
              icon: IconsAnnotation,
              stat: 22,
            },
          ]"
        />
      </section>
    </header>
    <section
      class="container mx-auto mt-2 grid grid-cols-1 gap-8 px-6 lg:max-w-4xl lg:grid-cols-2 xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
    >
      <!-- tasks -->
      <HeaderDetails
        class="items-center rounded border border-slate-200 bg-white p-2 lg:order-1"
        headline="Annotate Data"
        title="Tasks"
        :icon="IconsTasks"
        is-card-header
      />
      <StatsGrid
        :items="[
          {
            name: pluralize(12, 'Task'),
            stat: 12,
            icon: IconsTasks,
          },
          {
            name: 'Running',
            stat: 9,
            icon: IconsStatusActive,
          },
          {
            name: pluralize(2, 'Live session'),
            stat: 2,
            icon: IconsAnimateSparkles,
          },
        ]"
      />
      <!-- actions -->
      <HeaderDetails
        class="items-center rounded border border-slate-200 bg-white p-2 lg:order-2"
        headline="Train & Evaluate"
        title="Actions"
        :icon="IconsActions"
        is-card-header
      />
      <StatsGrid
        :items="[
          {
            name: pluralize(8, 'Action'),
            stat: 8,
            icon: IconsActions,
          },
          {
            name: 'Running',
            stat: 1,
            icon: IconsStatusActive,
          },
          {
            name: 'Failed',
            stat: 1,
            icon: IconsStatusError,
          },
        ]"
      />
      <div
        class="flex flex-col rounded border border-slate-200 bg-slate-100 p-6 lg:order-5"
      >
        <div class="flex h-full justify-center">
          <StatsList
            title="Stats"
            :items="[
              {
                icon: IconsStatusActive,
                stat: 1,
                name: 'Running',
                // url: links to item url if there is one,
                classes: 'text-emerald-600 hover:text-emerald-700',
              },
              {
                icon: IconsStatusLoading,
                stat: 2,
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
                stat: 1,
                name: 'Pending',
                // url: links to item url if there is one,
                classes: 'text-slate-500 hover:text-slate-600',
              },
              {
                icon: IconsStatusError,
                stat: 1,
                name: 'Failed',
                // url: links to item url if there is one,
                classes: 'text-rose-600 hover:text-rose-700',
              },
            ]"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { pluralize } from '@/utils/language'
import IconsStatusActive from '~/components/icons/IconsStatusActive.vue'
import IconsStatusLoading from '~/components/icons/IconsStatusLoading.vue'
import IconsStatusPaused from '~/components/icons/IconsStatusPaused.vue'
import IconsStatusPending from '~/components/icons/IconsStatusPending.vue'
import IconsStatusError from '~/components/icons/IconsStatusError.vue'
import IconsActions from '~/components/icons/IconsActions.vue'
import IconsTasks from '~/components/icons/IconsTasks.vue'
import IconsAnnotation from '~/components/icons/IconsAnnotation.vue'
import IconsAdministrator from '~/components/icons/IconsAdministrator.vue'
import IconsCode from '~/components/icons/IconsCode.vue'
import IconsHome from '~/components/icons/IconsHome.vue'
import IconsAnimateSparkles from '~/components/icons/IconsAnimateSparkles.vue'

useHead({
  title: 'Dashboard',
})
</script>
