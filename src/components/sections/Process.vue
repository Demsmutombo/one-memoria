<template>
  <Section padding="large">
    <template #header>
      <p class="kicker mb-4">Processus</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Quatre étapes. Une histoire.</h2>
    </template>

    <div class="relative">
      <div class="absolute left-4 top-0 hidden h-full w-px bg-doré/25 md:left-1/2 md:block" aria-hidden="true" />
      <ol class="space-y-10 md:space-y-16">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="grid items-center gap-6 md:grid-cols-2 md:gap-16"
          v-reveal="{ delay: 40 }"
        >
          <div :class="index % 2 === 1 ? 'md:order-2' : ''">
            <p class="font-serif text-6xl text-doré/50 md:text-7xl">{{ step.number }}</p>
            <h3 class="mt-3 font-serif text-2xl md:text-3xl">{{ step.title }}</h3>
            <p class="mt-3 max-w-md text-sm leading-relaxed text-gris">{{ step.description }}</p>
          </div>
          <figure :class="['overflow-hidden rounded-[1.4rem]', index % 2 === 1 ? 'md:order-1' : '']">
            <img
              :src="step.image"
              :alt="step.title"
              class="aspect-[16/10] w-full object-cover"
              loading="lazy"
              decoding="async"
            >
          </figure>
        </li>
      </ol>
    </div>

    <div class="mt-14" v-reveal>
      <Button variant="outline" @click="$router.push('/process')">Voir le processus détaillé</Button>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'
import Button from '@/components/ui/Button.vue'
import { media } from '@/utils/templateMedia.js'

const steps = [
  {
    number: '01',
    title: 'Vous partagez votre histoire',
    description: 'Photos, dates, mots, souvenirs : vous nous confiez ce qui compte. Nous écoutons avec attention.',
    image: media.anniv
  },
  {
    number: '02',
    title: 'Nous concevons votre expérience',
    description: 'Nous choisissons le ton, le rythme et la mise en page qui honorent votre récit — jamais un modèle générique figé.',
    image: media.wedding2
  },
  {
    number: '03',
    title: 'Nous donnons vie à votre espace',
    description: 'Galerie, textes, parcours : tout est assemblé, peaufiné, puis soumis à votre regard avant la mise en ligne.',
    image: media.memorial
  },
  {
    number: '04',
    title: 'Vous partagez avec le monde',
    description: 'Votre espace devient un lieu accessible, élégant et durable — à transmettre à ceux que vous aimez.',
    image: media.wedding3
  }
]
</script>
