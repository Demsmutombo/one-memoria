<template>
  <Section padding="large">
    <template #header>
      <Badge variant="primary" class="mb-4">Tarifs Simples</Badge>
      <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
        Choisissez Votre
        <span class="text-doré">Formule</span>
      </h2>
      <p class="text-lg text-gris max-w-3xl mx-auto">
        Des tarifs transparents adaptés à tous les besoins. 
        Pas de frais cachés, que de la qualité.
      </p>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Essentiel Plan -->
      <div class="relative">
        <Card variant="outlined" hover class="h-full">
          <div class="p-8">
            <div class="text-center mb-8">
              <div class="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <img :src="memorialImage" alt="Essentiel" class="w-full h-full object-cover">
              </div>
              <h3 class="text-2xl font-serif text-noir mb-2">Essentiel</h3>
              <div class="text-3xl font-bold text-noir mb-2">50$ - 80$</div>
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
              Choisir cette formule
            </Button>
          </div>
        </Card>
      </div>

      <!-- Standard Plan (Most Popular) -->
      <div class="relative">
        <!-- Popular Badge -->
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge variant="gold" size="large">Le plus choisi</Badge>
        </div>
        
        <Card variant="elevated" hover class="h-full border-2 border-doré shadow-xl">
          <div class="p-8">
            <div class="text-center mb-8">
              <div class="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <img :src="weddingImage" alt="Standard" class="w-full h-full object-cover">
              </div>
              <h3 class="text-2xl font-serif text-noir mb-2">Standard</h3>
              <div class="text-3xl font-bold text-noir mb-2">100$ - 150$</div>
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
              Choisir cette formule
            </Button>
          </div>
        </Card>
      </div>

      <!-- Premium Plan -->
      <div class="relative">
        <Card variant="outlined" hover class="h-full">
          <div class="p-8">
            <div class="text-center mb-8">
              <div class="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <img :src="annivImage" alt="Premium" class="w-full h-full object-cover">
              </div>
              <h3 class="text-2xl font-serif text-noir mb-2">Premium</h3>
              <div class="text-3xl font-bold text-noir mb-2">150$ - 250$</div>
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
              Choisir cette formule
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

const selectPlan = (plan) => {
  const message = `Bonjour One Memoria,

Je suis intéressé(e) par la formule "${plan}".

Pouvez-vous me donner plus d'informations ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}
</script>
