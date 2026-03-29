<template>
  <div class="bg-blanc min-h-screen text-noir">
    <!-- Loading State -->
    <div v-if="!template" class="text-center py-16">
      <div class="max-w-md mx-auto">
        <svg class="w-16 h-16 text-gris mx-auto mb-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
        </svg>
        <p class="text-gris">Chargement du template...</p>
      </div>
    </div>

    <!-- Template Not Found -->
    <div v-else-if="!template" class="text-center py-16">
      <div class="max-w-md mx-auto">
        <svg class="w-16 h-16 text-gris mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <h3 class="text-xl font-serif text-noir mb-2">Template non trouvé</h3>
        <p class="text-gris mb-4">
          Le template que vous recherchez n'existe pas.
        </p>
        <Button variant="outline" @click="$router.push('/templates')">
          Retour aux templates
        </Button>
      </div>
    </div>

    <!-- Template Details -->
    <div v-else>
      <!-- Hero Section -->
      <Section padding="large" class="relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <Badge variant="default" size="large">
                {{ getCategoryLabel(template.category) }}
              </Badge>
              <Badge 
                :variant="template.plan === 'premium' ? 'gold' : template.plan === 'standard' ? 'primary' : 'secondary'" 
                size="large"
              >
                {{ template.plan }}
              </Badge>
            </div>
            
            <h1 class="text-3xl md:text-5xl font-serif text-noir mb-6 leading-tight">
              {{ template.name }}
            </h1>
            
            <p class="text-lg text-gris mb-8 leading-relaxed">
              {{ template.description }}
            </p>
            
            <div class="text-3xl font-bold text-doré mb-8">
              {{ template.priceRange }}
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="large" @click="sendWhatsApp(template)">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Choisir ce template
              </Button>
              <Button variant="outline" size="large" @click="openDemo(template.demoUrl)">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                </svg>
                Voir la démo
              </Button>
            </div>

            <!-- Quick Info -->
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="flex items-center text-gris">
                <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {{ template.features.length }} fonctionnalités
              </div>
              <div class="flex items-center text-gris">
                <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2H4z" clip-rule="evenodd"></path>
                </svg>
                {{ getCategoryLabel(template.category) }}
              </div>
              <div class="flex items-center text-gris">
                <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ template.plan }}
              </div>
              <div class="flex items-center text-gris">
                <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                Livraison 3-5 jours
              </div>
            </div>
          </div>

          <!-- Right Content - Preview -->
          <div class="relative">
            <div class="relative mx-auto w-full max-w-lg">
              <!-- Device Frame -->
              <div class="bg-noir rounded-2xl p-2 shadow-2xl">
                <div class="bg-blanc rounded-xl overflow-hidden">
                  <!-- Screen -->
                  <div class="aspect-[4/3] bg-gradient-to-br from-doré/20 to-blanc relative">
                    <!-- Template Preview -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center px-8">
                      <img :src="template.image" :alt="template.name" class="w-full h-full object-cover rounded-lg mb-4">
                      <h3 class="text-2xl font-serif text-noir mb-3">{{ template.name }}</h3>
                      <div class="w-20 h-1 bg-doré mb-4"></div>
                      <p class="text-sm text-gris text-center italic mb-6">
                        "{{ template.description }}"
                      </p>
                      
                      <!-- Features Preview -->
                      <div class="space-y-2 w-full">
                        <div v-for="(feature, index) in template.features.slice(0, 3)" :key="index" class="flex items-center text-xs text-gris">
                          <svg class="w-3 h-3 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          {{ feature }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-doré/10 rounded-full animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-noir/5 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </Section>

      <!-- Features Section -->
      <Section padding="large" background="light">
        <template #header>
          <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
            Fonctionnalités
            <span class="text-doré">Incluses</span>
          </h2>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div 
            v-for="feature in template.features" 
            :key="feature"
            class="flex items-start"
          >
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-1">{{ feature }}</h3>
              <p class="text-sm text-gris">
                {{ getFeatureDescription(feature) }}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <!-- Process Section -->
      <Section padding="large">
        <template #header>
          <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
            Comment Ça
            <span class="text-doré">Marche</span>
          </h2>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-doré rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-noir">1</span>
            </div>
            <h3 class="text-xl font-serif text-noir mb-2">Choisissez</h3>
            <p class="text-gris">Sélectionnez ce template et contactez-nous</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-doré rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-noir">2</span>
            </div>
            <h3 class="text-xl font-serif text-noir mb-2">Personnalisez</h3>
            <p class="text-gris">Nous adaptons le design à vos besoins</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-doré rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-noir">3</span>
            </div>
            <h3 class="text-xl font-serif text-noir mb-2">Lancez</h3>
            <p class="text-gris">Votre site est en ligne et fonctionnel</p>
          </div>
        </div>
      </Section>

      <!-- CTA Section -->
      <Section padding="large" background="light">
        <div class="text-center max-w-4xl mx-auto">
          <Card variant="elevated">
            <div class="p-8 md:p-12">
              <h2 class="text-3xl font-serif text-noir mb-4">
                Prêt à Commencer ?
              </h2>
              <p class="text-gris mb-8">
                Contactez-nous dès aujourd'hui pour commencer votre projet avec ce template.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large" @click="sendWhatsApp(template)">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Choisir ce template
                </Button>
                <Button variant="outline" size="large" @click="$router.push('/templates')">
                  Voir d'autres templates
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { getTemplateBySlug } from '@/data/templates.js'
import { sendToWhatsApp } from '@/services/whatsapp.js'

const route = useRoute()
const router = useRouter()

const template = ref(null)

onMounted(() => {
  const slug = route.params.slug
  template.value = getTemplateBySlug(slug)
  
  if (!template.value) {
    // Template not found
    router.push('/templates')
  }
})

const getCategoryLabel = (category) => {
  const labels = {
    memorial: 'Mémorial',
    mariage: 'Mariage',
    anniversaire: 'Anniversaire',
    profil: 'Profil'
  }
  return labels[category] || category
}

const getFeatureDescription = (feature) => {
  const descriptions = {
    'Biographie': 'Racontez l\'histoire de vie avec photos et textes',
    'Biographie complète': 'Biographie détaillée avec timeline et moments clés',
    'Galerie': 'Espace pour partager vos plus belles photos',
    'Galerie photos': 'Galerie photo avec zoom et organisation',
    'Galerie illimitée': 'Espace de stockage illimité pour vos photos',
    'Galerie vidéo': 'Intégration de vidéos et multimédia',
    'Hommage': 'Section dédiée aux messages et souvenirs partagés',
    'Témoignages': 'Espace pour les témoignages et messages de soutien',
    'Livre d\'or': 'Livre d\'or numérique pour les messages des visiteurs',
    'Timeline': 'Chronologie interactive des moments importants',
    'Informations cérémonie': 'Détails pratiques de la cérémonie',
    'Histoire': 'Récit de votre histoire d\'amour et parcours',
    'Infos cérémonie': 'Informations logistiques pour vos invités',
    'RSVP': 'Système de réponse en ligne pour les invités',
    'Liste de cadeaux': 'Liste de cadeaux avec suggestions et réservations',
    'Messages': 'Espace pour les messages d\'anniversaire',
    'Informations événement': 'Détails de l\'événement et accès',
    'Portfolio': 'Vitrine de vos travaux et réalisations',
    'CV interactif': 'CV moderne et interactif avec téléchargement',
    'Contact': 'Formulaire de contact personnalisé',
    'Réseaux sociaux': 'Intégration de vos profils sociaux',
    'Design personnalisé': 'Design unique créé sur mesure pour vous',
    'Custom design': 'Design entièrement personnalisé selon vos besoins',
    'Design sur mesure': 'Création graphique personnalisée',
    'Animations': 'Animations subtiles et interactions modernes',
    'Domaine personnalisé': 'Votre propre nom de domaine (.com, .fr, etc)',
    'Support premium': 'Support prioritaire et assistance dédiée',
    'Support VIP': 'Service VIP avec assistance prioritaire 24/7',
    'Illimité': 'Fonctionnalités et stockage sans limites',
    'Blog intégré': 'Blog personnel pour partager vos actualités'
  }
  
  return descriptions[feature] || 'Fonctionnalité premium pour améliorer votre site'
}

const openDemo = (url) => {
  window.open(url, '_blank')
}

const sendWhatsApp = (template) => {
  sendToWhatsApp(template)
}
</script>
