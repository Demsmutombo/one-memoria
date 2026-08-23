<template>
  <Section padding="large">
    <template #header>
      <p class="kicker mb-4">Tarifs</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Des formules claires</h2>
      <p class="mt-5 text-lg text-gris">
        {{ TIER_PRICES_WHATSAPP_LINE_FR }}
        Anniversaire et profil : tarif fixe {{ FIXED_PRICE_ANNIVERSAIRE_PROFIL }}.
      </p>
    </template>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <article
        v-for="(offer, index) in offers"
        :key="offer.name"
        :class="offer.featured
          ? 'bg-noir text-blanc ring-1 ring-doré'
            : 'bg-white text-noir ring-1 ring-noir/10 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10'"
        class="flex h-full flex-col rounded-[1.5rem] p-7 sm:p-8"
        v-reveal="{ delay: index * 70 }"
      >
        <p v-if="offer.featured" class="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-doré">Recommandé</p>
        <h3 class="mt-4 font-serif text-3xl">{{ offer.name }}</h3>
        <p :class="['mt-1 text-sm', offer.featured ? 'text-blanc/55' : 'text-gris']">{{ offer.audience }}</p>
        <p class="mt-6 font-serif text-5xl text-doré">{{ offer.price }}</p>
        <ul class="mt-8 flex-1 space-y-2.5">
          <li
            v-for="item in offer.features"
            :key="item"
            :class="['text-sm', offer.featured ? 'text-blanc/70' : 'text-gris']"
          >
            {{ item }}
          </li>
        </ul>
        <Button
          :variant="offer.featured ? 'secondary' : 'primary'"
          full-width
          class="mt-10"
          @click="offer.onSelect()"
        >
          {{ offer.cta }}
        </Button>
      </article>
    </div>
  </Section>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Section from '@/components/ui/Section.vue'
import { sendPlanWhatsApp, sendGeneralWhatsApp } from '@/services/whatsapp.js'
import {
  TIER_PRICES,
  FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  TIER_PRICES_WHATSAPP_LINE_FR
} from '@/data/pricing.js'

const offers = [
  {
    name: 'Standard',
    audience: 'Mémorial et mariage',
    price: TIER_PRICES.standard,
    featured: false,
    cta: 'Choisir Standard',
    features: [
      'Biographie complète',
      'Galerie photos illimitée',
      'Témoignages et livre d’or',
      'Timeline interactive',
      'Formulaire de contact'
    ],
    onSelect: () => sendPlanWhatsApp('standard', TIER_PRICES.standard)
  },
  {
    name: 'Premium',
    audience: 'Mémorial et mariage',
    price: TIER_PRICES.premium,
    featured: true,
    cta: 'Choisir Premium',
    features: [
      'Tout le Standard',
      'Design sur mesure',
      'Galerie vidéo',
      'Animations avancées',
      'Support VIP'
    ],
    onSelect: () => sendPlanWhatsApp('premium', TIER_PRICES.premium)
  },
  {
    name: 'Anniversaire & Profil',
    audience: 'Tarif fixe',
    price: FIXED_PRICE_ANNIVERSAIRE_PROFIL,
    featured: false,
    cta: 'Créer mon espace',
    features: [
      'Espace personnalisé',
      'Galerie et contenus',
      'Design adapté à votre histoire',
      'Mise en ligne accompagnée'
    ],
    onSelect: () => sendGeneralWhatsApp()
  }
]
</script>
