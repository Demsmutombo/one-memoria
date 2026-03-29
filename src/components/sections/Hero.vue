<template>
  <Section padding="large" class="relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 bg-doré rounded-full"></div>
      <div class="absolute top-20 right-20 w-48 h-48 bg-noir rounded-full"></div>
      <div class="absolute bottom-10 left-1/4 w-24 h-24 bg-doré rounded-full"></div>
      <div class="absolute bottom-20 right-1/3 w-36 h-36 bg-noir rounded-full"></div>
    </div>

    <div class="relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <Badge variant="gold" size="large" class="mb-6">
            Sites Web Personnalisés
          </Badge>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-noir mb-6 leading-tight">
            Créez des
            <span class="text-doré"> Souvenirs</span>
            <br>
            Inoubliables
          </h1>
          
          <p class="text-lg md:text-xl text-gris mb-8 leading-relaxed">
            Des sites web élégants pour honorer vos moments les plus précieux : 
            mémoriaux, mariages, anniversaires et profils personnels.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="primary" size="large" @click="sendToWhatsApp">
              Commencer Maintenant
            </Button>
            <Button variant="outline" size="large" @click="$router.push('/templates')">
              Voir les Templates
            </Button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <div class="text-2xl font-bold text-doré">150+</div>
              <div class="text-sm text-gris">Sites Créés</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-doré">15</div>
              <div class="text-sm text-gris">Templates</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-doré">98%</div>
              <div class="text-sm text-gris">Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Tablet Mockup -->
        <div class="relative">
          <div class="relative mx-auto w-full max-w-md">
            <!-- Tablet Frame -->
            <div class="p-2 shadow-2xl">
              <SimpleCarousel 
                :slides="serviceSlides"
                :autoplay="true"
                :interval="3000"
                :show-indicators="true"
                class="aspect-[4/3]"
              >
                  <template #default="{ slide }">
                    <div class="bg-gradient-to-br from-doré/20 to-blanc relative h-full">
                      <!-- Background Image -->
                      <img :src="slide.image" :alt="slide.name" class="w-full h-full object-cover">
                      
                      <!-- Dark Overlay -->
                      <div class="absolute inset-0 bg-noir/40"></div>
                      
                      <!-- Content -->
                      <div class="absolute inset-0 flex flex-col items-center justify-center px-8">
                        <div class="w-20 h-20 bg-blanc/90 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center">
                          <span class="text-2xl font-bold text-doré">{{ slide.type === 'memorial' ? '♡' : slide.type === 'mariage' ? '∞' : slide.type === 'anniversaire' ? '✦' : '◆' }}</span>
                        </div>
                        <h3 class="text-xl font-serif text-blanc mb-2">{{ slide.name }}</h3>
                        <p class="text-sm text-blanc/90 mb-4">{{ slide.years }}</p>
                        <div class="w-16 h-0.5 bg-doré mb-4"></div>
                        <p class="text-xs text-blanc/80 text-center italic">
                          "{{ slide.quote }}"
                        </p>
                      </div>
                    </div>
                  </template>
                </SimpleCarousel>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-doré/10 rounded-full animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-noir/5 rounded-full animate-pulse delay-75"></div>
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

// Import hero images
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile4.jpeg'

const router = useRouter()

const serviceSlides = [
  {
    name: 'Sites Mémoriaux',
    years: 'Hommage Durable',
    quote: 'Un espace élégant pour honorer la mémoire de vos proches',
    image: memorialImage,
    type: 'memorial'
  },
  {
    name: 'Sites de Mariage',
    years: 'Célébration d\'Amour',
    quote: 'Partagez votre histoire d\'amour avec un site romantique',
    image: weddingImage,
    type: 'mariage'
  },
  {
    name: 'Sites d\'Anniversaire',
    years: 'Moments Précieux',
    quote: 'Commémorez vos étapes importantes avec joie',
    image: annivImage,
    type: 'anniversaire'
  },
  {
    name: 'Profils Personnels',
    years: 'Présence en Ligne',
    quote: 'Créez votre identité numérique professionnelle',
    image: profileImage,
    type: 'profil'
  }
]

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
