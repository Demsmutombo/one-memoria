<template>
  <Section padding="large" background="light">
    <template #header>
      <p class="kicker mb-4">En ligne</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Des projets réellement en ligne.</h2>
      <p class="mt-5 text-lg text-gris">Découvrez des expériences que nous avons déjà conçues et mises en ligne.</p>
    </template>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="(project, index) in liveProjects"
        :key="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group rounded-[1.3rem] bg-ivoire p-6 transition-colors hover:bg-gris-clair dark:bg-zinc-800 dark:hover:bg-zinc-700"
        v-reveal="{ delay: index * 45 }"
      >
        <p class="text-xs uppercase tracking-[0.16em] text-doré">{{ project.category }}</p>
        <h3 class="mt-3 font-serif text-2xl">{{ project.name }}</h3>
        <p class="mt-8 text-sm text-gris transition-transform duration-300 group-hover:translate-x-1">
          Ouvrir le site →
        </p>
      </a>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'

const liveProjects = [
  { name: 'Jean & Shekinah', category: 'Mariage', url: 'https://jean-shekinah.onememoria.com/' },
  { name: 'Couple Kalengayi', category: 'Mariage', url: 'https://couple-kalengayi.onememoria.com/' },
  { name: 'Nelly Kuntwakibambe', category: 'Anniversaire', url: 'https://nellykuntwakibambe.vercel.app' },
  { name: 'Papy Fernand', category: 'Profil', url: 'https://papyfernand.vercel.app/' },
  { name: 'Green Leaves', category: 'Mémorial', url: 'https://funeraille-tamp2-premium.vercel.app/' },
  { name: 'Cherry Blossoms', category: 'Mémorial', url: 'https://offre-premium.vercel.app/' }
]
</script>
