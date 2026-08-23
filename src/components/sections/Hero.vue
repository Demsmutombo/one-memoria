<template>
  <section class="relative min-h-[100svh] overflow-hidden bg-[#0e0c0a] text-blanc">
    <div class="absolute inset-0" aria-hidden="true">
      <img
        :src="heroImage"
        alt=""
        class="h-full w-full object-cover object-[center_20%] sm:object-center"
      >
      <div class="absolute inset-0 bg-[#0e0c0a]/70 sm:bg-[#0e0c0a]/55 lg:bg-gradient-to-r lg:from-[#0e0c0a]/88 lg:via-[#0e0c0a]/45 lg:to-[#0e0c0a]/20" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/80 via-transparent to-[#0e0c0a]/40" />
    </div>

    <div class="container-custom relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div class="max-w-xl text-center lg:text-left">
        <p class="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-doré">
          Espaces numériques personnels
        </p>
        <h1 class="font-serif text-[2.4rem] leading-[1.08] text-blanc sm:text-5xl lg:text-[3.55rem]">
          Vos souvenirs méritent plus qu’une photo.
        </h1>
        <p class="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base lg:mx-0">
          One Memoria crée des expériences numériques personnalisées pour préserver, partager et transmettre les moments qui comptent.
        </p>
        <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button
            variant="secondary"
            size="large"
            class="w-full sm:w-auto"
            @click="createSpace"
          >
            Créer mon espace
          </Button>
          <Button
            variant="outline"
            size="large"
            class="w-full !border-white/30 !text-blanc hover:!bg-blanc hover:!text-noir sm:w-auto"
            @click="router.push('/templates')"
          >
            Voir les réalisations
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { sendCreateSpaceWhatsApp } from '@/services/whatsapp.js'
import heroImage from '@/assets/images/her.png'

const router = useRouter()
const createSpace = () => sendCreateSpaceWhatsApp()
</script>
