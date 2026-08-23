<template>
  <div class="min-h-screen bg-ivoire text-noir transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
    <PageHero
      kicker="Contact"
      title="Parlons de votre projet"
      subtitle="Une question, une idée — nous vous répondons avec attention et discrétion."
    />

    <Section padding="large" background="light">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <a
          :href="mailtoHref('Projet One Memoria')"
          class="rounded-[1.5rem] bg-ivoire p-7 transition-colors hover:bg-gris-clair dark:bg-zinc-800 dark:hover:bg-zinc-700"
          v-reveal
        >
          <p class="kicker mb-4">Email</p>
          <h2 class="font-serif text-2xl tracking-tight">Écrire un message</h2>
          <p class="mt-3 text-sm text-gris">Ouvre votre application de messagerie.</p>
          <p class="mt-6 text-sm font-medium">{{ CONTACT.email }}</p>
        </a>

        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-[1.5rem] bg-ivoire p-7 transition-colors hover:bg-gris-clair dark:bg-zinc-800 dark:hover:bg-zinc-700"
          v-reveal="{ delay: 60 }"
        >
          <p class="kicker mb-4">WhatsApp</p>
          <h2 class="font-serif text-2xl tracking-tight">Démarrer une conversation</h2>
          <p class="mt-3 text-sm text-gris">Ouvre WhatsApp avec un message prérempli.</p>
          <p class="mt-6 text-sm font-medium">{{ CONTACT.whatsappDisplay }}</p>
        </a>

        <a
          :href="telHref"
          class="rounded-[1.5rem] bg-ivoire p-7 transition-colors hover:bg-gris-clair dark:bg-zinc-800 dark:hover:bg-zinc-700"
          v-reveal="{ delay: 120 }"
        >
          <p class="kicker mb-4">Téléphone</p>
          <h2 class="font-serif text-2xl tracking-tight">Nous appeler</h2>
          <p class="mt-3 text-sm text-gris">Lance un appel vers One Memoria.</p>
          <p class="mt-6 text-sm font-medium">{{ CONTACT.phoneDisplay }}</p>
        </a>
      </div>
    </Section>

    <Section padding="large">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div v-reveal>
          <h2 class="heading-memorial text-3xl">Heures d’ouverture</h2>
          <div class="mt-6 space-y-3 text-sm">
            <div class="flex justify-between gap-4 border-b border-black/10 pb-3 dark:border-white/10">
              <span class="text-gris">{{ CONTACT.hours.weekdays }}</span>
              <span>{{ CONTACT.hours.weekdaysTime }}</span>
            </div>
            <div class="flex justify-between gap-4 border-b border-black/10 pb-3 dark:border-white/10">
              <span class="text-gris">{{ CONTACT.hours.saturday }}</span>
              <span>{{ CONTACT.hours.saturdayTime }}</span>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-gris">{{ CONTACT.hours.sunday }}</span>
              <span>{{ CONTACT.hours.sundayTime }}</span>
            </div>
          </div>
        </div>
        <div v-reveal>
          <h2 class="heading-memorial text-3xl">Pourquoi nous écrire</h2>
          <ul class="mt-6 space-y-3 text-sm text-gris">
            <li>Support dédié et réactif</li>
            <li>Designs élégants et modernes</li>
            <li>Processus simple et transparent</li>
            <li>Tarifs clairs, sans frais cachés</li>
          </ul>
        </div>
      </div>
    </Section>

    <Section padding="large" background="light">
      <template #header>
        <h2 class="heading-memorial text-3xl md:text-4xl">Questions fréquentes</h2>
      </template>
      <div class="max-w-3xl space-y-2">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-2xl bg-ivoire dark:bg-zinc-800"
        >
          <button
            type="button"
            class="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
            :aria-expanded="faq.open"
            @click="toggleFaq(index)"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <span class="text-gris" aria-hidden="true">{{ faq.open ? '–' : '+' }}</span>
          </button>
          <div v-show="faq.open" class="px-5 pb-4">
            <p class="whitespace-pre-line text-sm leading-relaxed text-gris">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import { CONTACT, mailtoHref, telHref, whatsappUrl } from '@/data/contact.js'
import {
  FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR,
  FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR
} from '@/data/pricing.js'

const whatsappHref = whatsappUrl(`Bonjour One Memoria,

Je souhaite créer un espace numérique personnalisé.

Pouvez-vous m'indiquer les options disponibles ?`)

const faqs = ref([
  {
    question: "Quel est le tarif pour un site d'anniversaire ou un profil personnel ?",
    answer: FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR,
    open: false
  },
  {
    question: "Quel est le tarif pour un site mémorial ou de mariage ?",
    answer: FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR,
    open: false
  },
  {
    question: "Quelle est la durée moyenne de création d'un site ?",
    answer: "La durée varie selon la complexité : 2-4 jours pour le Standard, et 2-4 jours pour le Premium.",
    open: false
  },
  {
    question: "Puis-je voir des exemples de sites déjà créés ?",
    answer: "Oui ! Visitez notre page Réalisations pour voir des démos en direct de tous nos designs.",
    open: false
  },
  {
    question: "Comment puis-je payer pour mon site ?",
    answer: "Nous acceptons les paiements par carte de crédit, virement bancaire, et mobile money. Le paiement se fait en 2 fois : 50% au début et 50% à la livraison.",
    open: false
  },
  {
    question: "Est-ce que je peux modifier le contenu après la livraison ?",
    answer: "Les sites livrés sont des sites statiques, ce qui garantit rapidité, sécurité et stabilité.\n\nToute modification (texte, images, informations) peut être réalisée sur demande en nous contactant directement.",
    open: false
  },
  {
    question: "Offrez-vous un support après la livraison ?",
    answer: "Oui, nous offrons un support technique pour toutes nos formules. La formule Premium inclut un support VIP 24/7 et la maintenance incluse.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>
