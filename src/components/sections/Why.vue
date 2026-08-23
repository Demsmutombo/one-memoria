<template>
  <Section id="pourquoi" class="scroll-mt-24" padding="large" background="light">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5" v-reveal>
        <p class="kicker mb-4">Pourquoi One Memoria</p>
        <h2 class="heading-memorial text-3xl md:text-5xl">Bien plus qu’un site web.</h2>
        <p class="mt-6 text-lg leading-relaxed text-gris">
          One Memoria crée une expérience numérique personnalisée autour d’une histoire — pour qu’elle puisse être vécue, partagée et transmise.
        </p>
      </div>
      <ol class="space-y-8 lg:col-span-7">
        <li
          v-for="(pillar, index) in pillars"
          :key="pillar.title"
          class="grid grid-cols-[auto_1fr] gap-5 border-t border-noir/10 pt-8 first:border-t-0 first:pt-0 dark:border-white/10"
          v-reveal="{ delay: index * 70 }"
        >
          <span class="font-serif text-3xl text-doré">{{ pillar.number }}</span>
          <div>
            <h3 class="font-serif text-2xl">{{ pillar.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gris">{{ pillar.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'

const pillars = [
  { number: '01', title: 'Personnalisé', text: 'Chaque espace est adapté à votre histoire.' },
  { number: '02', title: 'Élégant', text: 'Un design pensé pour mettre vos souvenirs en valeur.' },
  { number: '03', title: 'Accessible', text: 'Votre histoire peut être partagée facilement.' },
  { number: '04', title: 'Durable', text: 'Un espace numérique conçu pour préserver et transmettre.' }
]
</script>
