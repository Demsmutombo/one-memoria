<template>
  <Section padding="large" background="light">
    <template #header>
      <p class="kicker mb-4">Réalisations</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Des espaces déjà en vie</h2>
      <p class="mt-5 max-w-xl text-lg text-gris">Chaque projet est unique. Parcourez-les, puis créez le vôtre.</p>
    </template>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-12">
      <article
        v-for="(template, index) in featuredTemplates"
        :key="template.id"
        :class="index === 0 ? 'md:col-span-12' : 'md:col-span-4'"
        class="group"
        v-reveal="{ delay: (index % 3) * 60 }"
      >
        <div class="relative overflow-hidden rounded-[1.4rem] bg-noir">
          <img
            :src="getTemplateImage(template)"
            :alt="`${template.name} — ${getCategoryLabel(template.category)}`"
            :class="index === 0 ? 'aspect-[16/8] sm:aspect-[21/9]' : 'aspect-[4/3]'"
            class="img-editorial group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-noir/75 via-transparent to-transparent opacity-90" />
          <div class="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-7">
            <p class="text-xs uppercase tracking-[0.16em] text-doré">{{ getCategoryLabel(template.category) }}</p>
            <h3 class="mt-1 font-serif text-2xl text-blanc sm:text-3xl">{{ template.name }}</h3>
            <div class="mt-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100">
              <Button variant="light" size="small" @click="openDemo(template.demoUrl)">Voir</Button>
              <Button variant="secondary" size="small" @click="sendWhatsApp(template)">Créer le mien</Button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-12" v-reveal>
      <Button variant="outline" @click="$router.push('/templates')">Toutes les réalisations</Button>
    </div>
  </Section>
</template>

<script setup>
import { computed } from 'vue'
import Section from '@/components/ui/Section.vue'
import Button from '@/components/ui/Button.vue'
import { templates } from '@/data/templates.js'
import { sendToWhatsApp } from '@/services/whatsapp.js'
import { getTemplateImage, getCategoryLabel } from '@/utils/templateMedia.js'

const featuredTemplates = computed(() => {
  const preferred = ['Elegant Union', 'Romantic Wedding', 'Green Leaves', 'Premium Anniversary']
  return preferred.map((name) => templates.find((t) => t.name === name)).filter(Boolean)
})

const openDemo = (url) => window.open(url, '_blank', 'noopener,noreferrer')
const sendWhatsApp = (template) => sendToWhatsApp(template)
</script>
