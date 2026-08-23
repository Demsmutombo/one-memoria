<template>
  <Section padding="large">
    <template #header>
      <p class="kicker mb-4">Confiance</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Trois engagements</h2>
    </template>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <article
        v-for="(item, index) in items"
        :key="item.title"
        class="rounded-[1.4rem] bg-white p-7 dark:bg-zinc-900"
        v-reveal="{ delay: index * 70 }"
      >
        <span class="flex h-10 w-10 items-center justify-center rounded-full border border-doré/40 text-doré" aria-hidden="true">
          <svg v-if="item.icon === 'pay'" class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v-1" />
          </svg>
          <svg v-else-if="item.icon === 'time'" class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 8v4l2 2m6-2a8 8 0 11-16 0 8 8 0 0116 0z" />
          </svg>
          <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l.8-4A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
        <h3 class="mt-5 font-serif text-2xl">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-gris">{{ item.text }}</p>
      </article>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'

const items = [
  { icon: 'pay', title: 'Paiement en deux temps', text: '50 % au démarrage, 50 % à la livraison.' },
  { icon: 'time', title: 'Livraison soignée', text: 'Délai indiqué sur chaque réalisation.' },
  { icon: 'chat', title: 'Accompagnement', text: 'Échanges directs par WhatsApp ou e-mail.' }
]
</script>
