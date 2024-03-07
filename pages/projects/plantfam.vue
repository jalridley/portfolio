<template>
  <section>
    <h1
      class="mb-5 flex flex-col font-besley text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
    >
      Plantfam.
    </h1>
    <Card header="Plantfam">
      <span class="flex h-full w-full items-center justify-center">
        <NuxtImg
          src="/plantfam-logo.png"
          class="h-92 w-92"
          alt="illustration of Jal smiling with short hair styled up"
          width="263px"
          height="263px"
          format="webp"
          decoding="auto"
          loading="lazy"
          ismap
        />
      </span>

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
  title: 'Plantfam',
})
</script>
