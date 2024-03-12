<template>
  <h1
    class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
  >
    Explosion AI.
  </h1>
  <section class="grid gap-8 md:grid-cols-2 lg:gap-10">
    <article
      class="w-full overflow-hidden border-b bg-white pb-8 md:col-span-2 lg:pb-5"
    >
      <h2 class="mb-1 font-besley text-xl font-bold md:mb-2 md:text-3xl">
        Prodigy Teams
      </h2>
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="mr-8 w-full">
          <p class="mb-5 pt-3 md:mb-8">
            I worked as a Front End Engineer at
            <NuxtLink
              href="https://explosion.ai/"
              target="_blank"
              class="text-black underline hover:text-yellow-500"
              >Explosion AI</NuxtLink
            >
            (developer tools for AI, Machine Learning and Natural Language
            Processing) on their SaaS product,
            <NuxtLink
              href="https://prodigy.ai/teams"
              target="_blank"
              class="text-black underline hover:text-yellow-500"
              >Prodigy Teams</NuxtLink
            >.
          </p>
          <p class="mb-5 md:mb-8">
            Prodigy Teams collaboratively uses their developer tool,
            <NuxtLink
              href="https://prodi.gy/"
              target="_blank"
              class="text-black underline hover:text-yellow-500"
              >Prodigy</NuxtLink
            >, in the cloud, managing teams, annotators, data tasks, and running
            automated processes like model training (including LLMs), all while
            the user hosts their data on their own cluster. It was built in
            Vue/Nuxt 3 with Pinia, TailwindCSS, Typescript, Vitest, Cypress for
            e2e tests, Storybook for building components in isolation, Docker
            containers/Nomad. A far cry from beginner friendly for my first job
            in tech, but I thrived on the challenge.
          </p>

          <p class="mb-5 md:mb-8">
            With permission from the founders (full disclosure: it was their
            idea), as a taste of a portion of my contributions, I am showcasing
            the dashboard feature and all of its components I made for Prodigy
            Teams. Instead of screenshots, have refactored it in its entirety
            for use in my portfolio to show the full code.
          </p>

          <p class="mb-8 md:mb-8">
            I learned a lot from the process of getting this to look and
            function as it did in the original app, which was built desktop
            first with a very complicated backend. It was great to strip the
            components down even further and see where they could be improved.
          </p>
        </div>
        <div class="flex w-full flex-col items-center justify-center gap-10">
          <NuxtImg
            class="h-72 w-72 rounded-full bg-slate-100 object-contain shadow-xl md:h-96 md:w-96"
            src="/dashboard.png"
            alt="Screenshot of the dashboard feature"
            width="460px"
            height="574px"
            sizes="248px sm:288px md:384px"
            format="webp"
            decoding="auto"
            loading="lazy"
            ismap
          />
          <div class="flex h-16 w-full md:w-3/5">
            <LinkButton
              class="w-full text-xl"
              variant="primaryButton"
              to="/projects/explosion/dashboard"
              aria-label="View the dashboard feature"
              >View dashboard feature</LinkButton
            >
          </div>
        </div>
      </div>
    </article>
    <h2 class="font-besley text-xl font-bold md:col-span-2 md:mb-2 md:text-3xl">
      Dashboard Components
    </h2>
    <Card header="header">
      <div class="flex h-full flex-col gap-5 p-5">
        <span
          class="flex h-1/2 w-full items-center justify-center rounded-xl border bg-white"
        >
          <HeaderDetails
            class="flex h-full justify-center"
            title="Project X"
            :icon="IconsHome"
            description="US news in English"
          />
        </span>
        <span
          class="flex h-1/2 w-full items-center justify-center rounded-xl border bg-white"
        >
          <HeaderDetails
            class="flex h-full justify-center"
            headline="Train & Evaluate"
            title="Actions"
            :icon="IconsActions"
            is-card-header
        /></span>
      </div>
      <template #text>
        The header is used throughout the app in main sections and subsections,
        which required it to be flexible in its size, style and layout. The
        custom icons which I created and used in part in this component
        contribute to the personality of the Prodigy Teams SaaS app while
        aligning with the pixel aesthetic of its mother app, Prodigy.
      </template>
    </Card>

    <Card header="Empty State">
      <EmptyState class="flex h-full flex-col justify-center" />
      <template #text>
        Empty states are app wide in previews, dropdowns, individual items,
        error states, and data statuses. The icon and text are dynamic, matching
        the related data, with the dashboard using its generic default. The
        little bounce animation is a subtle but nice touch.
      </template>
    </Card>

    <Card header="Percentage Bar">
      <div class="flex h-full justify-center bg-orange-200 p-5">
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
        This was an extra fun one to build. The linear gradient is a utility
        function which has unit tests, and adding the white break between each
        colour was an added challenge in order to exclude it if there is only
        one stat taking up the entire height.
      </template>
    </Card>
    <Card header="custom icons">
      <div
        class="grid h-full grid-cols-3 gap-x-4 gap-y-3 bg-slate-600 p-5 md:gap-x-5"
      >
        <IconsActions
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsTasks
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsHome
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsLoading
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsSaveDisc
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsAnimateSparklesBlk
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsFlag
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsTag
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsTrash
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsAdministrator
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsUserMinus
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />
        <IconsUserPlus
          class="flex h-full w-full items-center justify-center rounded-lg bg-white p-3"
        />

        <IconsTeam
          class="col-span-3 flex h-full w-full rounded-lg bg-white p-3"
        />
      </div>
      <template #text>
        Ah the world of Figma! I loved putting on my design hat to give the app
        unique personality through icons. The main icons were designed in a wide
        pixel style, while all others were thinner but equally as cool. The
        sparkle animation displays to the admin when an annotator is currently
        annotating. I refactored all of the original svgs into components (the
        Vue/Nuxt 3 way) with the Typescript Component type.
      </template>
    </Card>
    <Card header="stats list">
      <div class="flex h-full flex-col justify-center p-5">
        <StatsList
          title="Stats"
          :items="[
            {
              icon: IconsStatusActive,
              stat: 9,
              name: 'Running',
              url: '#',
              classes: 'text-emerald-600 hover:text-emerald-700',
            },
            {
              icon: IconsStatusLoading,
              stat: 7,
              name: 'Starting',
              url: '#',
              classes: 'text-sky-600 hover:text-sky-700',
            },
            {
              icon: IconsStatusPaused,
              stat: 3,
              name: 'Stopped',
              url: '#',
              classes: 'text-slate-600 hover:text-slate-700',
            },
            {
              icon: IconsStatusPending,
              stat: 5,
              name: 'Pending',
              url: '#',
              classes: 'text-slate-500 hover:text-slate-600',
            },
            {
              icon: IconsStatusError,
              stat: 5,
              name: 'Failed',
              url: '#',
              classes: 'text-rose-600 hover:text-rose-700',
            },
          ]"
        />
      </div>
      <template #text>
        This was built specifically for the dashboard while following the same
        theme used throughout the app to display the state of data. It was
        tricky for my backend coworkers to nail down the complexity of these
        states which were coming from Nomad and I was lucky to work with them
        getting the states we needed written in python for me to wire it up to
        UI. The items are to to be links, but I have prevented them from going
        anywhere for this portfolio.
      </template>
    </Card>
    <Card header="Stats Grid">
      <div class="flex h-full flex-col justify-center p-5">
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
        The stats in grid form are the most prioritized and dominant stats
        throughout the app, sitting just below the header. It is large with a
        maximum of 3 items which vary depending on the type of data. If the stat
        value is zero, the icon is grey, while if above zero, its corresponding
        colour matches the stat.
      </template>
    </Card>

    <Card header="Stats">
      <div class="flex h-full w-full flex-col items-center justify-center p-5">
        <Stats
          classes="sm:flex sm:justify-between text-slate-500 sm:w-full items-center lg:px-10 p-10 md:py-5 md:px-4 border rounded"
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
        These stats are to be horizontal (the Prodigy Teams app being desktop
        first) with no dynamic colours or links, differentiating them from the
        other stats components. A simple component but needed dynamic spacing
        for use on small screens for use in my portfolio.
      </template>
    </Card>
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
