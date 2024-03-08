<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Projects.
    </h1>
    <div class="flex flex-col"></div>
    <div class="grid gap-8 md:grid-cols-2 lg:gap-10">
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
            quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam
            minus iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Atque eius quam assumenda
            voluptatem quidem quae ullam quo accusantium, voluptatibus vitae
            amet molestias dolorem illum tempore asperiores dolor labore.
            Aliquam, quos!
          </p>
        </template>
      </Card>
      <Card header="Pinball Wizard">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-black transition ease-in-out hover:bg-yellow-500 hover:p-10 hover:duration-500"
          target="_blank"
          to="https://github.com/jalridley/digital-counter"
          aria-label="Read more about Jal's project Pinball Wizard"
        >
          <NuxtImg
            src="/pinball-wizard-wip.png"
            class="h-full w-full object-contain"
            alt="Screenshot of Jal's project Pinball Wizard"
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
            quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam
            minus iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Atque eius quam assumenda
            voluptatem quidem quae ullam quo accusantium, voluptatibus vitae
            amet molestias dolorem illum tempore asperiores dolor labore.
            Aliquam, quos!
          </p>
        </template>
      </Card>
      <Card header="Palmodoro">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-pink-500 transition ease-in-out hover:bg-yellow-500 hover:p-10 hover:duration-500"
          target="_blank"
          to="https://github.com/jalridley/palmodoro"
          aria-label="Read more about Jal's project Palmodoro"
        >
          <NuxtImg
            src="/palmodoro-wip.png"
            class="h-full w-full object-contain"
            alt="Screenshot of Jal's project Palmodoro"
            width="1024px"
            height="1224px"
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
            quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam
            minus iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Atque eius quam assumenda
            voluptatem quidem quae ullam quo accusantium, voluptatibus vitae
            amet molestias dolorem illum tempore asperiores dolor labore.
            Aliquam, quos!
          </p>
        </template>
      </Card>
      <Card header="Plantfam">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-green-500 transition ease-in-out hover:bg-yellow-500 hover:duration-500"
          target="_blank"
          to="https://github.com/brednadflex/plantfam?tab=readme-ov-file"
          aria-label="Read more about Jal's project Plantfam"
        >
          <NuxtImg
            src="/plantfam-logo.png"
            class="h-92 w-92 hover:p-10"
            alt="Screenshot of Jal's project Plantfam"
            width="263px"
            height="263px"
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
            quibusdam! Ipsa iure exercitationem perferendis? Obcaecati ipsam
            minus iure ducimus natus, quod perspiciatis? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Atque eius quam assumenda
            voluptatem quidem quae ullam quo accusantium, voluptatibus vitae
            amet molestias dolorem illum tempore asperiores dolor labore.
            Aliquam, quos!
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>
<script setup lang="ts">
import ExplosionLogo from '~/components/ExplosionLogo.vue'

useHead({
  title: 'Projects',
})
</script>
