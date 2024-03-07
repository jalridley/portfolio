<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Projects.
    </h1>
    <div class="flex flex-col">
      <NuxtLink
        class="hover:text-emerald-700"
        to="/projects/palmodoro"
        aria-label="Read more about Jal's project Palmodoro"
        >Palmodoro</NuxtLink
      >
      <NuxtLink
        class="hover:text-emerald-700"
        target="_blank"
        to="https://github.com/brednadflex/plantfam?tab=readme-ov-file"
        aria-label="Read more about Jal's project Plantfam"
        >Plantfam</NuxtLink
      >
    </div>
    <Card header="Explosion AI">
      <NuxtLink
        class="flex h-full w-full items-center justify-center bg-purple text-white transition ease-in-out hover:bg-yellow-500 hover:text-slate-900 hover:duration-500"
        to="/projects/explosion"
        aria-label="Read more about Jal's work at Explosion AI"
      >
        <ExplosionLogo class="h-72 w-72 hover:p-6" />
      </NuxtLink>

      <template #text>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptas itaque ipsum, commodi obcaecati eius vel ab
          quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam minus
          iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Atque eius quam assumenda voluptatem
          quidem quae ullam quo accusantium, voluptatibus vitae amet molestias
          dolorem illum tempore asperiores dolor labore. Aliquam, quos!
        </p>
      </template>
    </Card>
    <Card header="Pinball Wizard">
      <NuxtLink
        class="flex h-full w-full items-center justify-center bg-slate-900 transition ease-in-out hover:bg-yellow-500 hover:p-10 hover:duration-500"
        target="_blank"
        to="https://github.com/jalridley/digital-counter"
        aria-label="Read more about Jal's project Pinball Wizard"
      >
        <NuxtImg
          src="/pinball-wizard-wip-2.png"
          class="h-full w-full object-cover"
          alt="illustration of Jal smiling with short hair styled up"
          width="1024px"
          height="795px"
          sizes="288px sm:604px md:736px lg:795px"
          format="webp"
          decoding="auto"
          loading="lazy"
          ismap
        />
      </NuxtLink>

      <template #text>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptas itaque ipsum, commodi obcaecati eius vel ab
          quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam minus
          iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Atque eius quam assumenda voluptatem
          quidem quae ullam quo accusantium, voluptatibus vitae amet molestias
          dolorem illum tempore asperiores dolor labore. Aliquam, quos!
        </p>
      </template>
    </Card>
  </section>
</template>
<script setup lang="ts">
import ExplosionLogo from '~/components/ExplosionLogo.vue'

useHead({
  title: 'Projects',
})
</script>
