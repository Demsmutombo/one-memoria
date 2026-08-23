<template>
  <section class="relative overflow-hidden bg-noir text-blanc">
    <img
      :src="media.memorial"
      alt="Espace mémorial numérique One Memoria"
      class="absolute inset-0 h-full w-full object-cover opacity-35"
      loading="lazy"
      decoding="async"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-noir via-noir/80 to-noir/40" />
    <div class="container-custom relative z-10 py-24 lg:py-32">
      <div class="max-w-2xl" v-reveal>
        <p class="kicker mb-6">Mémoire & transmission</p>
        <h2 class="heading-memorial text-4xl leading-[1.1] text-blanc sm:text-5xl lg:text-6xl">
          Certaines histoires méritent de traverser les générations.
        </h2>
        <p class="mt-8 max-w-lg text-lg leading-relaxed text-blanc/70">
          One Memoria permet de conserver les souvenirs, les récits et les moments importants dans un espace numérique accessible, personnalisé et durable.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { media } from '@/utils/templateMedia.js'
</script>
