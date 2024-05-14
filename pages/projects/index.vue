<template>
  <section>
    <h1
      class="mb-3 flex flex-col font-besley text-3xl font-bold sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
    >
      Projects.
    </h1>
    <div class="flex flex-col"></div>
    <div class="grid gap-8 md:auto-rows-fr md:grid-cols-2 lg:gap-10">
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
            I had the incredible opportunity to do a 3 month internship as a
            Front End Engineer at Explosion AI and was blown away when they
            officially hired me halfway through. I jumped into a complicated
            codebase on a journey into the world of machine learning and NLP,
            making it a delightfully challenging first job in tech. I worked
            with and learned from a uniquely close knit team of seriously gifted
            people on a SaaS app called, Prodigy Teams, a cloud based
            collaborative platform for the company’s data annotation and model
            training developer tools.
          </p>
        </template>
        <template #button>
          <Button
            to="/projects/explosion"
            ariaLabel="Read more about Jal's work at Explosion AI"
            >View Explosion AI work</Button
          >
        </template>
      </Card>
      <Card header="Pinball Wizard">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-black transition ease-in-out hover:bg-yellow-500 hover:p-10 hover:duration-500"
          target="_blank"
          to="https://pinballwizard.netlify.app/"
          aria-label="Go to Jal's Pinball Wizard project"
        >
          <NuxtImg
            src="/pinball-wizard.png"
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
            Built because I needed it, Pinball Wizard randomly fakes pinball
            machine scores at the click of a button. I made a lightbox for my
            vintage 1979 Dolly Parton pinball machine backglass to hang on the
            wall and the windows where the scores used to be displayed are empty
            clear glass, needing numbers. I thought, why hack my way through
            Photoshop when I can build an app! Vanilla Javascript with some fun
            Tailwind to get that sweet digital number style. Opens the browser
            print dialog to print the results perfectly sized to fit Bally
            backglass score board windows.
          </p>
        </template>
        <template #button>
          <Button
            to="https://pinballwizard.netlify.app/"
            target="_blank"
            ariaLabel="Go to Jal's Pinball Wizard project"
            >View Pinball Wizard</Button
          >
        </template>
      </Card>
      <Card header="Palmodoro">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-pink-500 transition ease-in-out hover:bg-yellow-500 hover:p-10 hover:duration-500"
          target="_blank"
          to="https://github.com/jalridley/palmodoro"
          aria-label="Go to Jal's project Palmodoro"
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
            I built post bootcamp, and my first venture into ReactJS, created
            not only because I was using Pomodoro apps, but because I wanted a
            cool looking one without the tomato. I designed it mobile first in
            Figma before beginning implementation. I learned that choosing your
            favourite font isn’t always the right font due to layout shift,
            especially with digital numbers. I used the Zustand library instead
            of Redux for state management, which is a nifty, lighter weight
            library and rather straightforward to use.
          </p>
        </template>
        <template #button>
          <Button
            to="https://github.com/jalridley/palmodoro"
            target="_blank"
            ariaLabel="Go to Jal's project Palmodoro"
            >View Palmodoro</Button
          >
        </template>
      </Card>
      <Card header="Plantfam">
        <NuxtLink
          class="flex h-full w-full items-center justify-center bg-green-500 transition ease-in-out hover:bg-yellow-500 hover:duration-500"
          target="_blank"
          to="https://github.com/brednadflex/plantfam?tab=readme-ov-file"
          aria-label="Go to Jal's project Plantfam"
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
            The final group project created for the bootcamp. Although it is
            incomplete and newbie code, it is such an amazing idea I wanted to
            include it in my portfolio. Plantfam: plant sitting and social media
            app, where users can hire and offer services, give and receive
            advice, and show off their plants. There are different levels of
            expertise, such as the all important top tier Plant Whisperer,
            location search, and a social media feed. I would love to see it to
            completion, but the owner of the idea went back to starring in the
            Blue Man Group and has moved on, such as it is with the famous.
          </p>
        </template>
        <template #button>
          <Button
            to="https://github.com/brednadflex/plantfam?tab=readme-ov-file"
            target="_blank"
            ariaLabel="Go to Jal's project Plantfam"
            >View Plantfam</Button
          >
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
