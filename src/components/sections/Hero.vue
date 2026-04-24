<template>
  <Section padding="large" background="hero" class="relative overflow-hidden">
    <!-- Fond discret : grain léger + vignette -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
      aria-hidden="true"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E');
      "
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ivoire/40 to-ivoire dark:from-zinc-950/0 dark:via-zinc-950/80 dark:to-zinc-950"
      aria-hidden="true"
    />

    <div class="relative z-10">
      <div class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <!-- Texte -->
        <div class="text-center lg:text-left">
          <div class="mb-6 flex justify-center lg:justify-start">
            <span
              class="inline-block h-px w-12 bg-gradient-to-r from-transparent to-doré align-middle lg:mr-3"
              aria-hidden="true"
            />
            <Badge variant="gold" size="large" class="!rounded-full px-5 tracking-wide">
              Sites web sur mesure
            </Badge>
          </div>

          <h1
            class="heading-memorial text-4xl font-semibold leading-[1.1] text-noir dark:text-zinc-100 md:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            Créez des
            <span class="text-doré"> souvenirs</span>
            <br class="hidden sm:block" />
            dignes d’être partagés
          </h1>

          <p
            class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gris dark:text-zinc-400 lg:mx-0 lg:text-xl"
          >
            Un design sobre et intemporel pour honorer une vie, un amour ou une étape importante — avec
            la même attention qu’un bel hommage imprimé.
          </p>

          <div
            class="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button variant="primary" size="large" @click="sendToWhatsApp">
              Commencer maintenant
            </Button>
            <Button variant="outline" size="large" @click="router.push('/templates')">
              Voir les templates
            </Button>
          </div>

          <!-- Stats -->
          <div
            class="mt-10 grid grid-cols-3 gap-3 border-t border-stone-200/90 pt-8 dark:border-zinc-800 sm:mt-14 sm:gap-6 sm:pt-10 md:gap-8 lg:max-w-lg"
          >
            <div class="text-center lg:text-left">
              <div class="font-serif text-2xl font-semibold text-doré md:text-3xl">150+</div>
              <div class="mt-1 text-xs uppercase tracking-wider text-gris dark:text-zinc-500">
                Sites créés
              </div>
            </div>
            <div class="text-center lg:text-left">
              <div class="font-serif text-2xl font-semibold text-doré md:text-3xl">15</div>
              <div class="mt-1 text-xs uppercase tracking-wider text-gris dark:text-zinc-500">
                Templates
              </div>
            </div>
            <div class="text-center lg:text-left">
              <div class="font-serif text-2xl font-semibold text-doré md:text-3xl">98%</div>
              <div class="mt-1 text-xs uppercase tracking-wider text-gris dark:text-zinc-500">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        <!-- Aperçu -->
        <div class="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            class="relative rounded-[1.25rem] bg-gradient-to-br from-stone-200/50 to-stone-100/30 p-1.5 shadow-memorial ring-1 ring-stone-300/40 dark:from-zinc-800/50 dark:to-zinc-900/30 dark:ring-zinc-700/50"
          >
            <div class="overflow-hidden rounded-[1rem] bg-noir shadow-innerlight">
              <SimpleCarousel
                :slides="serviceSlides"
                :autoplay="true"
                :interval="4000"
                :show-indicators="true"
                class="aspect-[4/3]"
              >
                <template #default="{ slide }">
                  <div class="relative h-full bg-gradient-to-br from-doré/15 to-stone-900/20">
                    <img :src="slide.image" :alt="slide.name" class="h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/35 to-noir/20" />
                    <div class="absolute inset-0 flex flex-col items-center justify-end px-4 pb-6 pt-10 text-center sm:px-6 sm:pb-8 sm:pt-12">
                      <div
                        class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
                      >
                        <span class="text-2xl text-doré">{{
                          slide.type === 'memorial'
                            ? '♡'
                            : slide.type === 'mariage'
                              ? '∞'
                              : slide.type === 'anniversaire'
                                ? '✦'
                                : '◆'
                        }}</span>
                      </div>
                      <h3 class="font-serif text-xl text-white md:text-2xl">{{ slide.name }}</h3>
                      <p class="mt-1 text-sm font-medium uppercase tracking-memorial text-doré/95">
                        {{ slide.years }}
                      </p>
                      <div class="divider-gold my-4 max-w-[4rem]" />
                      <p class="max-w-xs text-sm italic leading-relaxed text-white/85">
                        « {{ slide.quote }} »
                      </p>
                    </div>
                  </div>
                </template>
              </SimpleCarousel>
            </div>
          </div>
          <p
            class="mt-4 text-center text-xs text-gris dark:text-zinc-500 lg:text-left"
          >
            Aperçu de styles — chaque projet est personnalisé.
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import SimpleCarousel from '@/components/ui/SimpleCarousel.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile4.jpeg'

const router = useRouter()

const serviceSlides = [
  {
    name: 'Sites mémoriaux',
    years: 'Hommage durable',
    quote: 'Un espace élégant pour honorer la mémoire de vos proches',
    image: memorialImage,
    type: 'memorial'
  },
  {
    name: 'Sites de mariage',
    years: 'Célébration d’amour',
    quote: 'Partagez votre histoire avec un site aussi beau que votre journée',
    image: weddingImage,
    type: 'mariage'
  },
  {
    name: 'Sites d’anniversaire',
    years: 'Moments précieux',
    quote: 'Commémorez vos étapes importantes avec joie et sobriété',
    image: annivImage,
    type: 'anniversaire'
  },
  {
    name: 'Profils personnels',
    years: 'Présence en ligne',
    quote: 'Votre identité numérique, professionnelle et raffinée',
    image: profileImage,
    type: 'profil'
  }
]

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
