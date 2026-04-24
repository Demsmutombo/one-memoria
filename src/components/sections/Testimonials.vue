<template>
  <Section padding="large" background="light">
    <template #header>
      <Badge variant="primary" class="mb-4">Témoignages</Badge>
      <h2 class="heading-memorial text-3xl font-semibold text-noir dark:text-zinc-100 md:text-4xl mb-6">
        Des familles
        <span class="text-doré">reconnaissantes</span>
      </h2>
      <div class="divider-gold mb-8" />
      <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gris dark:text-zinc-400">
        La beauté d’un site, c’est aussi la paix qu’il apporte à ceux qui le visitent.
      </p>
    </template>

    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
      <Card
        v-for="(item, index) in items"
        :key="index"
        variant="elevated"
        padding="large"
        hover
        class="flex h-full flex-col"
      >
        <svg
          class="mb-4 h-8 w-8 text-doré/40"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
          />
        </svg>
        <blockquote class="flex flex-1 flex-col font-serif text-lg leading-relaxed text-noir dark:text-zinc-200">
          <p class="italic">« {{ item.quote }} »</p>
        </blockquote>
        <footer class="mt-8 border-t border-stone-200/90 pt-6 dark:border-zinc-700">
          <p class="font-medium text-noir dark:text-zinc-100">{{ item.name }}</p>
          <p class="mt-1 text-sm uppercase tracking-memorial text-gris dark:text-zinc-500">
            {{ item.context }}
          </p>
        </footer>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'

const items = [
  {
    quote:
      "Le site pour mon père est d'une dignité rare. Les photos, les textes — tout respire le respect. Nos invités ont pu se recueillir de loin.",
    name: 'Catherine M.',
    context: 'Hommage familial'
  },
  {
    quote:
      "Notre site de mariage reflétait exactement l’émotion du jour. Élégant, simple à parcourir, nos familles l’ont beaucoup partagé.",
    name: 'Thomas & Julie',
    context: 'Mariage'
  },
  {
    quote:
      "Professionnel et à l’écoute. Mon portfolio en ligne donne enfin l’image que je voulais pour mon activité.",
    name: 'Patrick K.',
    context: 'Profil personnel'
  }
]
</script>
