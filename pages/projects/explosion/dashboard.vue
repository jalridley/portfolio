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
        class="lg:order-3"
        :items="[
          {
            name: pluralize(12, 'Task'),
            stat: 12,
            icon: IconsTasks,
          },
          {
            name: 'Running',
            stat: 4,
            icon: IconsStatusActive,
          },
          {
            name: pluralize(2, 'Live session'),
            stat: 2,
            icon: IconsAnimateSparkles,
          },
        ]"
      />
      <div
        class="flex flex-col rounded border border-slate-200 bg-slate-100 p-6 lg:order-5"
      >
        <div class="flex h-full justify-center">
          <StatsPercentageBar
            class="w-2 rounded-l-lg"
            :items="[
              {
                color: 'rgba(5, 150, 105, 0.7)',
                value: 4,
              },
              {
                color: 'rgba(2, 132, 199, 0.7)',
                value: 2,
              },
              {
                color: 'rgba(71, 85, 105, 0.7)',
                value: 4,
              },
              {
                color: 'rgba(100, 116, 139, 0.7)',
                value: 1,
              },
              {
                color: 'rgba(225, 29, 72, 0.7)',
                value: 1,
              },
            ]"
          />
          <div class="grid w-full grid-cols-2 gap-6">
            <StatsList
              class="h-full"
              title="Stats"
              :items="[
                {
                  icon: IconsStatusActive,
                  stat: 4,
                  name: 'Running',
                  url: 'link to item url',
                  classes: 'text-emerald-600 hover:text-emerald-700',
                },
                {
                  icon: IconsStatusLoading,
                  stat: 2,
                  name: 'Starting',
                  url: 'link to item url',

                  classes: 'text-sky-600 hover:text-sky-700',
                },
                {
                  icon: IconsStatusPaused,
                  stat: 4,
                  name: 'Stopped',
                  url: 'link to item url',
                  classes: 'text-slate-600 hover:text-slate-700',
                },
                {
                  icon: IconsStatusPending,
                  stat: 1,
                  name: 'Pending',
                  url: 'link to item url',
                  classes: 'text-slate-500 hover:text-slate-600',
                },
                {
                  icon: IconsStatusError,
                  stat: 1,
                  name: 'Failed',
                  url: 'link to item url',
                  classes: 'text-rose-600 hover:text-rose-700',
                },
              ]"
            />
            <StatsList
              class="h-full text-emerald-600"
              title="Workers in-use"
              :items="[
                {
                  icon: IconsWorker,
                  stat: 2,
                  name: 'medium',
                },
                {
                  icon: IconsWorker,
                  stat: 1,
                  name: 'large',
                },
                {
                  icon: IconsWorker,
                  stat: 1,
                  name: 'gpu',
                },
              ]"
            />
          </div>
        </div>
      </div>
      <!-- actions -->
      <HeaderDetails
        class="items-center rounded border border-slate-200 bg-white p-2 lg:order-2"
        headline="Train & Evaluate"
        title="Actions"
        :icon="IconsActions"
        is-card-header
      />
      <StatsGrid
        class="lg:order-4"
        :items="[
          {
            name: pluralize(10, 'Action'),
            stat: 10,
            icon: IconsActions,
          },
          {
            name: 'Running',
            stat: 1,
            icon: IconsStatusActive,
          },
          {
            name: 'Failed',
            stat: 2,
            icon: IconsStatusError,
          },
        ]"
      />
      <div
        class="flex flex-col rounded border border-slate-200 bg-slate-100 p-6 lg:order-5"
      >
        <div class="flex h-full justify-center">
          <StatsPercentageBar
            class="w-2 rounded-l-lg"
            :items="[
              {
                color: 'rgba(5, 150, 105, 0.7)',
                value: 2,
              },
              {
                color: 'rgba(2, 132, 199, 0.7)',
                value: 1,
              },
              {
                color: 'rgba(71, 85, 105, 0.7)',
                value: 3,
              },
              {
                color: 'rgba(100, 116, 139, 0.7)',
                value: 2,
              },
              {
                color: 'rgba(225, 29, 72, 0.7)',
                value: 2,
              },
            ]"
          />
          <div class="grid w-full grid-cols-2 gap-6">
            <StatsList
              class="h-full"
              title="Stats"
              :items="[
                {
                  icon: IconsStatusActive,
                  stat: 2,
                  name: 'Running',
                  url: 'link to item url',
                  classes: 'text-emerald-600 hover:text-emerald-700',
                },
                {
                  icon: IconsStatusLoading,
                  stat: 1,
                  name: 'Starting',
                  url: 'link to item url',
                  classes: 'text-sky-600 hover:text-sky-700',
                },
                {
                  icon: IconsStatusPaused,
                  stat: 3,
                  name: 'Stopped',
                  url: 'link to item url',
                  classes: 'text-slate-600 hover:text-slate-700',
                },
                {
                  icon: IconsStatusPending,
                  stat: 2,
                  name: 'Pending',
                  url: 'link to item url',
                  classes: 'text-slate-500 hover:text-slate-600',
                },
                {
                  icon: IconsStatusError,
                  stat: 2,
                  name: 'Failed',
                  url: 'link to item url',
                  classes: 'text-rose-600 hover:text-rose-700',
                },
              ]"
            />
            <StatsList
              class="h-full text-emerald-600"
              title="Workers in-use"
              :items="[
                {
                  icon: IconsWorker,
                  stat: 1,
                  name: 'medium',
                },
                {
                  icon: IconsWorker,
                  stat: 1,
                  name: 'large',
                },
                {
                  icon: IconsWorker,
                  stat: 1,
                  name: 'gpu',
                },
              ]"
            />
          </div>
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
import IconsWorker from '~/components/icons/IconsWorker.vue'

useHead({
  title: 'Dashboard',
})
</script>
