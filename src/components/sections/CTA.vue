<template>
  <section class="bg-ivoire px-5 pb-16 dark:bg-zinc-950 sm:px-6">
    <div class="relative mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-noir px-8 py-16 text-blanc sm:px-12 lg:px-16 lg:py-24">
      <img
        :src="media.anniv4"
        alt=""
        class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
        decoding="async"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-noir via-noir/85 to-noir/70" />
      <div class="relative z-10 max-w-2xl">
        <p class="kicker mb-5">Commencer</p>
        <h2 class="heading-memorial text-4xl leading-[1.08] text-blanc sm:text-5xl lg:text-6xl">
          Votre histoire commence ici.
        </h2>
        <p class="mt-6 max-w-lg text-lg leading-relaxed text-blanc/70">
          Partagez-nous ce que vous souhaitez préserver. Nous concevons ensemble un espace numérique à votre image.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary" size="large" @click="createSpace">Créer mon espace</Button>
          <Button variant="outline" size="large" class="!border-white/25 !text-blanc hover:!bg-blanc hover:!text-noir" @click="$router.push('/contact')">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import { sendCreateSpaceWhatsApp } from '@/services/whatsapp.js'
import { media } from '@/utils/templateMedia.js'

const createSpace = () => sendCreateSpaceWhatsApp()
</script>
