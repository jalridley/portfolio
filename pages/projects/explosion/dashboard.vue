<template>
  <!--  TODO: update calc when app layout is complete -->
  <div class="h-[calc(100vh-144px)]">
    <div class="h-full overflow-x-auto bg-slate-50">
      <section
        class="container mx-auto mt-2 px-6 py-2 md:py-4 lg:flex lg:max-w-4xl lg:justify-between lg:py-6 xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
      >
        <HeaderDetails
          title="Project X"
          :icon="IconsHome"
          description="US news in English"
        />
        <Stats
          classes="ml-0 flex items-center justify-center text-slate-500 lg:ml-10"
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
      <section
        class="container mx-auto mt-2 grid grid-cols-1 gap-6 px-6 md:gap-8 lg:max-w-4xl lg:grid-cols-2 xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
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
          <div class="flex justify-center">
            <!-- EmptyState conditional when dynamic without mock data -->
            <!-- v-if="stats.tasks_count" -->
            <div
              class="w-full space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0"
            >
              <div class="flex">
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
                <StatsList
                  class="w-full"
                  title="Stats"
                  :items="[
                    {
                      icon: IconsStatusActive,
                      stat: 4,
                      name: 'Running',
                      url: 'link to item url',
                      classes: 'text-emerald-600 hover:text-emerald-700',
                      id: 'Tasks',
                    },
                    {
                      icon: IconsStatusLoading,
                      stat: 2,
                      name: 'Starting',
                      url: 'link to item url',
                      classes: 'text-sky-600 hover:text-sky-700',
                      id: 'Tasks',
                    },
                    {
                      icon: IconsStatusPaused,
                      stat: 4,
                      name: 'Stopped',
                      url: 'link to item url',
                      classes: 'text-slate-600 hover:text-slate-700',
                      id: 'Tasks',
                    },
                    {
                      icon: IconsStatusPending,
                      stat: 1,
                      name: 'Pending',
                      url: 'link to item url',
                      classes: 'text-slate-500 hover:text-slate-600',
                      id: 'Tasks',
                    },
                    {
                      icon: IconsStatusError,
                      stat: 1,
                      name: 'Failed',
                      url: 'link to item url',
                      classes: 'text-rose-600 hover:text-rose-700',
                      id: 'tasks',
                    },
                  ]"
                />
              </div>
              <!-- conditional when dynamic without mock data: -->
              <!-- v-if="stats.tasks_workers" -->
              <StatsList
                class="text-emerald-600"
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
            <!-- EmptyState conditional when dynamic without mock data -->
            <!-- <EmptyState
            v-else
            class="flex w-full flex-col justify-center !bg-slate-100"
            empty-title="No tasks"
            empty-text="Get started by adding one below"
          /> -->
          </div>
          <div
            class="mt-6 space-y-2 sm:flex sm:justify-center sm:space-x-3 sm:space-y-0"
          >
            <LinkButton
              :icon="IconsTasks"
              variant="primaryButton"
              to=""
              ariaLabel="View all tasks"
              >All tasks</LinkButton
            >
            <LinkButton
              :icon="IconsPlus"
              variant="secondaryButton"
              to=""
              ariaLabel="Create new task"
              >New task</LinkButton
            >
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
          <div class="flex justify-center">
            <div
              class="w-full space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0"
            >
              <div class="flex">
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
                <StatsList
                  class="w-full"
                  title="Stats"
                  :items="[
                    {
                      icon: IconsStatusActive,
                      stat: 2,
                      name: 'Running',
                      url: 'link to item url',
                      classes: 'text-emerald-600 hover:text-emerald-700',
                      id: 'Actions',
                    },
                    {
                      icon: IconsStatusLoading,
                      stat: 1,
                      name: 'Starting',
                      url: 'link to item url',
                      classes: 'text-sky-600 hover:text-sky-700',
                      id: 'Actions',
                    },
                    {
                      icon: IconsStatusPaused,
                      stat: 3,
                      name: 'Stopped',
                      url: 'link to item url',
                      classes: 'text-slate-600 hover:text-slate-700',
                      id: 'Actions',
                    },
                    {
                      icon: IconsStatusPending,
                      stat: 2,
                      name: 'Pending',
                      url: 'link to item url',
                      classes: 'text-slate-500 hover:text-slate-600',
                      id: 'Actions',
                    },
                    {
                      icon: IconsStatusError,
                      stat: 2,
                      name: 'Failed',
                      url: 'link to item url',
                      classes: 'text-rose-600 hover:text-rose-700',
                      id: 'Actions',
                    },
                  ]"
                />
              </div>
              <!-- conditional when dynamic without mock data: -->
              <!-- v-if="stats.actions_workers" -->
              <StatsList
                class="text-emerald-600"
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
            <!-- EmptyState conditional when dynamic without mock data: -->
            <!-- <EmptyState
            v-else
            class="flex w-full flex-col justify-center !bg-slate-100"
            empty-title="No actions"
            empty-text="Get started by adding one below"
          /> -->
          </div>
          <div
            class="mt-6 space-y-2 sm:flex sm:justify-center sm:space-x-3 sm:space-y-0"
          >
            <LinkButton
              :icon="IconsActions"
              variant="primaryButton"
              to=""
              ariaLabel="View all actions"
              >All Actions</LinkButton
            >
            <LinkButton
              :icon="IconsPlus"
              variant="secondaryButton"
              to=""
              ariaLabel="Create new action"
              >New action</LinkButton
            >
          </div>
        </div>
      </section>
    </div>
  </div>
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
import IconsPlus from '~/components/icons/IconsPlus.vue'

useHead({
  title: 'Dashboard',
})
</script>
