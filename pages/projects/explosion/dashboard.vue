<template>
  <main>
    <header>
      <section
        class="container mx-auto mt-2 px-6 py-2 md:py-4 lg:flex lg:max-w-4xl lg:justify-between lg:py-6 xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl"
      >
        <!-- <h1 class="flex justify-center text-5xl font-bold">Dashboard page</h1> -->
        <HeaderDetails
          title="Actions"
          :icon="IconsHome"
          description="US news in English"
        />
      </section>
    </header>
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
import IconsAnnotation from '~/components/icons/IconsAnnotation.vue'
import IconsAdministrator from '~/components/icons/IconsAdministrator.vue'
import IconsCode from '~/components/icons/IconsCode.vue'
import IconsHome from '~/components/icons/IconsHome.vue'
useHead({
  title: 'Dashboard',
})
</script>
