<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Pinball Wizard.
    </h1>

    <Card header="Pinball Wizard">
      <NuxtImg
        src="/pinball-wizard-wip.png"
        class="h-full w-full bg-black object-contain"
        alt="illustration of Jal smiling with short hair styled up"
        width="1024px"
        height="795px"
        sizes="288px sm:604px md:736px lg:795px"
        format="webp"
        decoding="auto"
        loading="lazy"
        ismap
      />

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
useHead({
  title: 'Pinball Wizard',
})
</script>
