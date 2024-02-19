<template>
  <section>
    <h1 class="flex justify-center text-3xl font-bold">Explosion page 💥</h1>
    <NuxtLink class="hover:text-emerald-700" to="/projects/explosion/dashboard"
      >Dashboard Feature</NuxtLink
    >
    <p>
      <strong
        >Descriptive text about Explosion AI work and Prodigy Teams:</strong
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam
      quos corrupti, odit officia hic non illum, modi labore similique neque
      temporibus sapiente. Minus qui eos repudiandae perspiciatis ullam
      necessitatibus.
    </p>
    <div class="w-full lg:grid lg:grid-cols-2 lg:gap-3 xl:grid-cols-3">
      <Card header="header">
        <div class="flex h-full flex-col justify-between bg-purple p-5">
          <HeaderDetails
            class="h-1/2 w-full rounded-xl border bg-white px-4 py-2"
            title="Project X"
            :icon="IconsHome"
            description="US news in English"
          />
          <HeaderDetails
            class="h-2/5 w-full rounded-lg border bg-white px-4 py-2"
            headline="Train & Evaluate"
            title="Actions"
            :icon="IconsActions"
            is-card-header
          />
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </template>
      </Card>

      <Card header="Empty State" class="rounded-b-0">
        <div class="h-full border-b bg-white">
          <EmptyState />
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>

      <Card header="Percentage Bar" class="rounded-b-0">
        <div class="flex h-full justify-center border-b bg-orange-100 py-5">
          <StatsPercentageBar
            class="w-10 rounded-lg"
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
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>
      <Card header="custom icons">
        <div class="grid h-full grid-cols-3 gap-2 bg-teal-600 p-5">
          <IconsActions
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsTasks
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsHome
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsLoading
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsSaveDisc
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsAnimateSparklesBlk
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsFlag
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsTag
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsTrash
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsAdministrator
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsUserMinus
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />
          <IconsUserPlus
            class="flex h-full w-full items-center justify-center rounded-lg bg-white p-2"
          />

          <IconsTeam
            class="col-span-3 flex h-full w-full rounded-lg bg-white p-2"
          />
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>
      <Card header="stats list" class="rounded-b-0">
        <div class="h-full border-b p-5">
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
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>
      <Card header="Stats Grid">
        <div class="flex h-full flex-col justify-center border-b p-5">
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
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>
      <Card header="Stats">
        <div class="flex h-full flex-col justify-center border-b p-5">
          <Stats
            classes="sm:flex sm:justify-between text-slate-500"
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
        </div>
        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          veniam quos corrupti, odit officia hic non illum, modi labore
          similique neque temporibus sapiente. Minus qui eos repudiandae
          perspiciatis ullam necessitatibus.
        </template>
      </Card>
    </div>
  </section>
</template>
<script setup lang="ts">
import { pluralize } from '@/utils/language'
import IconsStatusActive from '~/components/icons/IconsStatusActive.vue'
import IconsStatusLoading from '~/components/icons/IconsStatusLoading.vue'
import IconsStatusPaused from '~/components/icons/IconsStatusPaused.vue'
import IconsStatusPending from '~/components/icons/IconsStatusPending.vue'
import IconsStatusError from '~/components/icons/IconsStatusError.vue'
import IconsTasks from '~/components/icons/IconsTasks.vue'
import IconsActions from '~/components/icons/IconsActions.vue'
import IconsAnnotation from '~/components/icons/IconsAnnotation.vue'
import IconsAdministrator from '~/components/icons/IconsAdministrator.vue'
import IconsCode from '~/components/icons/IconsCode.vue'
import IconsHome from '~/components/icons/IconsHome.vue'
import IconsFlag from '~/components/icons/IconsFlag.vue'
import IconsTag from '~/components/icons/IconsTag.vue'
import IconsSaveDisc from '~/components/icons/IconsSaveDisc.vue'
import IconsTeam from '~/components/icons/IconsTeam.vue'
import IconsTrash from '~/components/icons/IconsTrash.vue'
import IconsUserMinus from '~/components/icons/IconsUserMinus.vue'
import IconsUserPlus from '~/components/icons/IconsUserPlus.vue'
import IconsAnimateSparklesBlk from '~/components/icons/IconsAnimateSparklesBlk.vue'

useHead({
  title: 'Explosion Ai',
})
</script>
