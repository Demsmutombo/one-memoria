<template>
  <div class="min-h-screen bg-ivoire text-noir transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
    <PageHero
      kicker="Expériences"
      title="Sites web pour chaque moment important"
      subtitle="Hommages, célébrations et présence en ligne — avec le même soin, adapté au web."
    />

    <Section padding="large" background="light">
      <div class="space-y-10">
        <article
          v-for="(activity, index) in activities"
          :key="activity.key"
          class="grid items-center gap-6 border-b border-black/10 pb-10 last:border-0 dark:border-white/10 lg:grid-cols-12"
          v-reveal="{ delay: index * 40 }"
        >
          <div v-if="activity.category && categoryImages[activity.category]" class="overflow-hidden rounded-[1.5rem] lg:col-span-5">
            <img
              :src="categoryImages[activity.category]"
              :alt="activity.title"
              class="aspect-[16/10] w-full object-cover"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div :class="activity.category ? 'lg:col-span-7' : 'lg:col-span-12'">
            <p class="kicker mb-2">{{ activity.kicker }}</p>
            <h2 class="font-serif text-3xl tracking-tight">{{ activity.title }}</h2>
            <p class="mt-3 max-w-xl text-sm leading-relaxed text-gris">{{ activity.description }}</p>
            <p v-if="activity.price" class="mt-4 font-serif text-xl">{{ activity.price.label }}</p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="feature in activity.features"
                :key="feature"
                class="rounded-full bg-ivoire px-3 py-1 text-xs text-gris dark:bg-zinc-800"
              >
                {{ feature }}
              </span>
            </div>
            <div class="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button variant="outline" @click="openActivity(activity)">
                {{ activity.category ? 'Voir les réalisations' : 'Nous écrire' }}
              </Button>
              <Button variant="primary" @click="chooseActivity(activity)">
                Créer mon espace
              </Button>
            </div>
          </div>
        </article>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import Button from '@/components/ui/Button.vue'
import { activities } from '@/data/services.js'
import { categoryImages } from '@/utils/templateMedia.js'
import { sendServiceWhatsApp } from '@/services/whatsapp.js'

const router = useRouter()

const openActivity = (activity) => {
  if (activity.href) {
    router.push(activity.href)
    return
  }
  sendServiceWhatsApp(activity.title)
}

const chooseActivity = (activity) => {
  sendServiceWhatsApp(activity.title)
}
</script>
