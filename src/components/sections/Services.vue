<template>
  <Section padding="large">
    <template #header>
      <Badge variant="primary" class="mb-4">Nos Services</Badge>
      <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
        Sites Web pour Chaque
        <span class="text-doré">Moment Important</span>
      </h2>
      <p class="text-lg text-gris max-w-3xl mx-auto">
        Nous créons des sites web personnalisés pour célébrer vos moments les plus précieux, 
        avec design élégant et fonctionnalités adaptées à chaque occasion.
      </p>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Memorial Service -->
      <div class="group cursor-pointer" @click="$router.push('/templates?category=memorial')">
        <div class="relative overflow-hidden rounded-lg bg-gris-clair transition-all duration-300 group-hover:shadow-xl">
          <div class="aspect-[4/3] bg-gradient-to-br from-noir/80 to-noir/40 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-16 h-16 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-serif text-noir mb-2">Sites Mémoriaux</h3>
            <p class="text-sm text-gris mb-4">
              Honorez la mémoire de vos proches avec dignité et élégance.
            </p>
            <div class="flex items-center justify-between mb-3">
              <div class="text-doré font-bold text-lg">À partir de 50$</div>
              <Badge variant="primary" size="small">Essentiel</Badge>
            </div>
            <div class="flex items-center text-doré text-sm font-medium">
              <span>Voir templates</span>
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Wedding Service -->
      <div class="group cursor-pointer" @click="$router.push('/templates?category=mariage')">
        <div class="relative overflow-hidden rounded-lg bg-gris-clair transition-all duration-300 group-hover:shadow-xl">
          <div class="aspect-[4/3] bg-gradient-to-br from-doré/40 to-doré/20 relative">
            <img :src="memorialImage" alt="Sites Mémoriaux" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-noir/20"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-serif text-noir mb-2">Mariages</h3>
            <p class="text-sm text-gris mb-4">
              Célébrez votre amour avec un site web élégant et romantique.
            </p>
            <div class="flex items-center justify-between mb-3">
              <div class="text-doré font-bold text-lg">À partir de 80$</div>
              <Badge variant="primary" size="small">Standard</Badge>
            </div>
            <div class="flex items-center text-doré text-sm font-medium">
              <span>Voir templates</span>
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Anniversary Service -->
      <div class="group cursor-pointer" @click="$router.push('/templates?category=anniversaire')">
        <div class="relative overflow-hidden rounded-lg bg-gris-clair transition-all duration-300 group-hover:shadow-xl">
          <div class="aspect-[4/3] bg-gradient-to-br from-yellow-400/30 to-orange-400/20 relative">
            <img :src="annivImage" alt="Sites d'Anniversaire" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-noir/20"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-serif text-noir mb-2">Anniversaires</h3>
            <p class="text-sm text-gris mb-4">
              Commémorez vos étapes importantes avec joie et festivité.
            </p>
            <div class="flex items-center justify-between">
              <div class="text-doré font-bold text-lg">60$</div>
              <Badge variant="primary" size="small">Standard</Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Service -->
      <div class="group cursor-pointer" @click="$router.push('/templates?category=profil')">
        <div class="relative overflow-hidden rounded-lg bg-gris-clair transition-all duration-300 group-hover:shadow-xl">
          <div class="aspect-[4/3] bg-gradient-to-br from-blue-400/30 to-purple-400/20 relative">
            <img :src="weddingImage" alt="Sites de Mariage" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-noir/20"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-serif text-noir mb-2">Profils Personnels</h3>
            <p class="text-sm text-gris mb-4">
              Créez votre présence en ligne avec un site personnel professionnel.
            </p>
            <div class="flex items-center justify-between">
              <div class="text-doré font-bold text-lg">70$</div>
              <Badge variant="primary" size="small">Standard</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="mt-16 text-center">
      <Card variant="elevated" class="max-w-4xl mx-auto">
        <div class="p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-serif text-noir mb-4">
            Prêt à Créer Votre Site ?
          </h3>
          <p class="text-gris mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour commencer votre projet. 
            Nous vous guiderons à chaque étape pour créer un site web qui vous ressemble.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" @click="sendToWhatsApp">
              Contacter WhatsApp
            </Button>
            <Button variant="outline" size="large" @click="$router.push('/templates')">
              Explorer les Templates
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile3.jpeg'
import Section from '@/components/ui/Section.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

const router = useRouter()

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
