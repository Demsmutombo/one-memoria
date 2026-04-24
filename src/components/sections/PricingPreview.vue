<template>
  <Section padding="large">
    <template #header>
      <Badge variant="primary" class="mb-4">Tarifs simples</Badge>
      <h2 class="heading-memorial mb-6 text-[1.65rem] font-semibold leading-tight text-noir dark:text-zinc-100 sm:text-3xl md:text-4xl">
        Choisissez votre
        <span class="text-doré">formule</span>
      </h2>
      <div class="divider-gold mb-8" />
      <p class="text-lg text-gris dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        Des tarifs clairs, sans surprise — pour un rendu digne d’un bel hommage ou d’un site de mariage
        soigné.
      </p>
      <p class="text-base text-noir dark:text-zinc-300 max-w-2xl mx-auto mt-5">
        Sites d’anniversaire et profils personnels : tarif fixe <span class="text-doré font-semibold">{{ FIXED_PRICE_ANNIVERSAIRE_PROFIL }}</span>.
      </p>
      <p class="mx-auto mt-3 max-w-2xl text-base text-noir dark:text-zinc-300">
        {{ TIER_PRICES_WHATSAPP_LINE_FR }}
      </p>
    </template>

    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
      <!-- Essentiel Plan -->
      <div class="relative">
        <Card variant="outlined" hover class="h-full">
          <div class="p-5 sm:p-8">
            <div class="mb-6 text-center sm:mb-8">
              <div class="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                <img :src="memorialImage" alt="Essentiel" class="h-full w-full object-cover">
              </div>
              <h3 class="mb-2 font-serif text-xl text-noir dark:text-zinc-100 sm:text-2xl">Essentiel</h3>
              <div class="mb-2 text-xl font-bold leading-snug text-noir dark:text-zinc-100 sm:text-2xl md:text-3xl">{{ TIER_PRICES.essentiel }}</div>
              <p class="text-gris">Pour les besoins simples</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Biographie complète</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Galerie photos (25 max)</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Design élégant</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Responsive mobile</span>
              </li>
            </ul>
            
            <Button variant="outline" full-width @click="selectPlan('essentiel')">
              Commander
            </Button>
          </div>
        </Card>
      </div>

      <!-- Standard Plan (Most Popular) -->
      <div class="relative md:pt-2">
        <!-- Popular Badge -->
        <div class="absolute -top-3 left-1/2 z-10 -translate-x-1/2 sm:-top-4">
          <Badge variant="gold" size="large">Recommandé</Badge>
        </div>
        
        <Card variant="elevated" hover class="h-full border-2 border-doré shadow-xl">
          <div class="p-5 pt-8 sm:p-8">
            <div class="mb-6 text-center sm:mb-8">
              <div class="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                <img :src="weddingImage" alt="Standard" class="h-full w-full object-cover">
              </div>
              <h3 class="mb-2 font-serif text-xl text-noir dark:text-zinc-100 sm:text-2xl">Standard</h3>
              <div class="mb-2 text-xl font-bold leading-snug text-doré sm:text-2xl md:text-3xl">{{ TIER_PRICES.standard }}</div>
              <p class="text-gris">Fonctionnalités avancées</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Tout l'essentiel +</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Galerie photos illimitée</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Témoignages et livre d'or</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Timeline interactive</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Formulaire de contact</span>
              </li>
            </ul>
            
            <Button variant="primary" full-width @click="selectPlan('standard')">
              Commander
            </Button>
          </div>
        </Card>
      </div>

      <!-- Premium Plan -->
      <div class="relative">
        <Card variant="outlined" hover class="h-full">
          <div class="p-5 sm:p-8">
            <div class="mb-6 text-center sm:mb-8">
              <div class="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                <img :src="annivImage" alt="Premium" class="h-full w-full object-cover">
              </div>
              <h3 class="mb-2 font-serif text-xl text-noir dark:text-zinc-100 sm:text-2xl">Premium</h3>
              <div class="mb-2 text-xl font-bold leading-snug text-noir dark:text-zinc-100 sm:text-2xl md:text-3xl">{{ TIER_PRICES.premium }}</div>
              <p class="text-gris">Tout inclus, support VIP</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Tout le standard +</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Design sur mesure</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Galerie vidéo</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Animations avancées</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Domaine personnalisé</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Support VIP</span>
              </li>
            </ul>
            
            <Button variant="outline" full-width @click="selectPlan('premium')">
              Commander
            </Button>
          </div>
        </Card>
      </div>
    </div>

    <!-- Money Back Guarantee -->
    <div class="mt-12 text-center">
      <div class="flex items-center justify-center space-x-2 text-gris">
        <svg class="w-5 h-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span>Satisfaction garantie ou remboursement</span>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Section from '@/components/ui/Section.vue'
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'
import {
  TIER_PRICES,
  FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  TIER_PRICES_WHATSAPP_LINE_FR
} from '@/data/pricing.js'

const selectPlan = (plan) => {
  const price = TIER_PRICES[plan]
  const message = `Bonjour One Memoria,

Je suis intéressé(e) par la formule "${plan}" (${price}).

Pouvez-vous me donner plus d'informations ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}
</script>
