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
          <ExplosionLogo class="h-72 w-72 p-2 hover:p-6" />
        </NuxtLink>
        <template #text>
          <p>
            I had the incredible opportunity to do a three month internship as a
            Front End Engineer at Explosion AI and was blown away when they
            officially hired me halfway through. A delightfully intense journey
            into the world of machine learning and NLP while building a SaaS app
            for their developer tools, I worked with and learned from a uniquely
            close knit team of gifted people.
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
            Fake it till ya make it! An extremely niche little app which allows
            the user to randomly fake their pinball machine scores at the click
            of a button. Built because I needed it. I made a lightbox for my
            vintage 1979 Dolly Parton pinball machine backglass and the windows
            where the digital scores were displayed needed either printed
            numbers or to be blacked out to block the LED lights. I thought, why
            hack my way through Photoshop when I can build an app! Vanilla
            Javascript with some fun CSS to get that sweet 70s digital number
            overlay and glow. Exports the results to PDF for print to actual
            size. But it is a one trick pony: it is only for the Dolly Parton
            pinball machine made by Bally. She's all I needed, but perhaps in
            the future, I will create more templates for other machines for the
            few people in the world with backglass lightboxes.
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
            Palmodoro! The Pomodoro timer for neon beach dreamers! The first app
            I built post bootcamp, and my first venture into ReactJS. I designed
            it mobile first in Figma before beginning implementation. I learned
            that choosing your favourite font isn’t always the right font due to
            layout shift, especially with digital numbers. I used the Zustand
            library instead of Redux for state management.
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
            The final project created for the bootcamp. Although it is
            incomplete and newbie code, it is such an amazing idea I wanted to
            include it in my portfolio. Plantfam is a plant sitting and social
            media app, where users can hire and offer services, give and receive
            advice, and show off their plants. There are different levels of
            expertise, such as the all important top tier Plant Whisperer, as
            well as location search, and a social media feed with text input and
            photo upload. This was a group project made in a whirlwind with
            collaboration using Github, and my focus was on Figma design and
            front end implementations. I would love to see it to completion and
            get it out into the world, but the owner of the idea went back to
            starring in the Blue Man Group and has moved on, such as it is when
            working with famous people.
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
