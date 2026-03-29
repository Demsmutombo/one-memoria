<template>
  <div class="bg-blanc min-h-screen text-noir">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Templates</Badge>
        <h1 class="text-3xl md:text-5xl font-serif text-noir mb-6">
          Découvrez Nos
          <span class="text-doré">Templates Premium</span>
        </h1>
        <p class="text-lg text-gris max-w-3xl mx-auto">
          Des designs élégants et modernes pour chaque occasion. 
          Chaque template est personnalisable selon vos besoins.
        </p>
      </template>
    </Section>

    <!-- Filter Section -->
    <Section padding="normal" background="light">
      <div class="max-w-4xl mx-auto">
        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            :variant="selectedCategory === 'all' ? 'primary' : 'outline'"
            @click="filterByCategory('all')"
          >
            Tous les Templates
          </Button>
          <Button 
            :variant="selectedCategory === 'memorial' ? 'primary' : 'outline'"
            @click="filterByCategory('memorial')"
          >
            Sites Mémoriaux
          </Button>
          <Button 
            :variant="selectedCategory === 'mariage' ? 'primary' : 'outline'"
            @click="filterByCategory('mariage')"
          >
            Mariages
          </Button>
          <Button 
            :variant="selectedCategory === 'anniversaire' ? 'primary' : 'outline'"
            @click="filterByCategory('anniversaire')"
          >
            Anniversaires
          </Button>
          <Button 
            :variant="selectedCategory === 'profil' ? 'primary' : 'outline'"
            @click="filterByCategory('profil')"
          >
            Profils
          </Button>
        </div>

        <!-- Plan Filters -->
        <div class="flex flex-wrap justify-center gap-4">
          <Button 
            :variant="selectedPlan === 'all' ? 'secondary' : 'ghost'"
            size="small"
            @click="filterByPlan('all')"
          >
            Tous les plans
          </Button>
          <Button 
            :variant="selectedPlan === 'essentiel' ? 'secondary' : 'ghost'"
            size="small"
            @click="filterByPlan('essentiel')"
          >
            Essentiel
          </Button>
          <Button 
            :variant="selectedPlan === 'standard' ? 'secondary' : 'ghost'"
            size="small"
            @click="filterByPlan('standard')"
          >
            Standard
          </Button>
          <Button 
            :variant="selectedPlan === 'premium' ? 'secondary' : 'ghost'"
            size="small"
            @click="filterByPlan('premium')"
          >
            Premium
          </Button>
        </div>
      </div>
    </Section>

    <!-- Templates Grid -->
    <Section padding="large">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="template in filteredTemplates" 
          :key="template.id"
          class="group cursor-pointer"
          @click="openDemo(template.demoUrl)"
        >
          <div class="relative overflow-hidden rounded-lg bg-blanc shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
            <!-- Template Preview -->
            <div class="aspect-[16/10] bg-gradient-to-br from-noir/10 to-doré/10 relative overflow-hidden">
              <img :src="getTemplateImage(template.category, template.name)" :alt="template.name" class="w-full h-full object-cover">
              
              <!-- Dark Overlay -->
              <div class="absolute inset-0 bg-noir/20"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <Badge variant="default" size="small">
                  {{ getCategoryLabel(template.category) }}
                </Badge>
              </div>
              
              <!-- Plan Badge -->
              <div class="absolute top-4 right-4">
                <Badge 
                  :variant="template.plan === 'premium' ? 'gold' : template.plan === 'standard' ? 'primary' : 'secondary'" 
                  size="small"
                >
                  {{ template.plan }}
                </Badge>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-blanc">
                  <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-sm">Voir les détails</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
                {{ template.name }}
              </h3>
              <p class="text-sm text-gris mb-4 line-clamp-2">
                {{ template.description }}
              </p>
              
              <!-- Features Preview -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(feature, index) in template.features.slice(0, 3)" 
                  :key="index"
                  class="text-xs text-gris bg-gris-clair px-2 py-1 rounded"
                >
                  {{ feature }}
                </span>
                <span 
                  v-if="template.features.length > 3"
                  class="text-xs text-doré bg-doré/10 px-2 py-1 rounded"
                >
                  +{{ template.features.length - 3 }}
                </span>
              </div>
              
              <div class="flex items-center justify-between mb-4">
                <span class="text-doré font-semibold">{{ template.priceRange }}</span>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm text-gris">{{ template.features.length }} fonctionnalités</span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <Button 
                  variant="outline" 
                  size="small" 
                  class="flex-1"
                  @click.stop="openDemo(template.demoUrl)"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  Démo
                </Button>
                <Button 
                  variant="primary" 
                  size="small" 
                  class="flex-1"
                  @click.stop="sendWhatsApp(template)"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Choisir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredTemplates.length === 0" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <svg class="w-16 h-16 text-gris mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
          <h3 class="text-xl font-serif text-noir mb-2">Aucun template trouvé</h3>
          <p class="text-gris mb-4">
            Essayez de modifier vos filtres pour voir plus de templates.
          </p>
          <Button variant="outline" @click="resetFilters">
            Réinitialiser les filtres
          </Button>
        </div>
      </div>

      <!-- Results Count -->
      <div v-if="filteredTemplates.length > 0" class="mt-12 text-center">
        <p class="text-gris">
          {{ filteredTemplates.length }} template{{ filteredTemplates.length > 1 ? 's' : '' }} trouvé{{ filteredTemplates.length > 1 ? 's' : '' }}
        </p>
      </div>
    </Section>

    <!-- CTA Section -->
    <Section padding="large" background="light">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-3xl font-serif text-noir mb-4">
          Prêt à Créer Votre Site ?
        </h2>
        <p class="text-gris mb-8">
          Contactez-nous dès aujourd'hui pour commencer votre projet. 
          Nous vous guiderons à chaque étape pour créer un site web qui vous ressemble.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="large" @click="sendToWhatsAppGeneral">
              Contacter WhatsApp
            </Button>
          <Button variant="outline" size="large" @click="$router.push('/pricing')">
            Voir les Tarifs
          </Button>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import { templates } from '@/data/templates.js'
import { sendToWhatsApp, sendGeneralWhatsApp } from '@/services/whatsapp.js'

// Import all template images
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import wedding2Image from '@/assets/images/templates/mariage/wedding2.jpeg'
import wedding3Image from '@/assets/images/templates/mariage/wedding3.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile3.jpeg'

const route = useRoute()
const router = useRouter()

const selectedCategory = ref('all')
const selectedPlan = ref('all')

// Initialize filters from URL params
onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = route.query.category
  }
})

const filteredTemplates = computed(() => {
  let filtered = templates

  // Exclude specific memorial templates we don't want to show
  const excludedMemorialTemplates = ['White Marble', 'Nature Serenity', 'Cross Memorial']
  filtered = filtered.filter(template => 
    !(template.category === 'memorial' && excludedMemorialTemplates.includes(template.name))
  )

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(template => template.category === selectedCategory.value)
  }

  // Filter by plan
  if (selectedPlan.value !== 'all') {
    filtered = filtered.filter(template => template.plan === selectedPlan.value)
  }

  return filtered
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

const getTemplateImage = (category, templateName) => {
  // Map templates to their actual images that exist
  const templateImages = {
    memorial: {
      'Golden Celebration': memorialImage,
      'Green Leaves': memorialImage,
      'Cherry Blossoms': memorialImage
    },
    mariage: {
      'Romantic Wedding': weddingImage,
      'Elegant Union': wedding2Image,
      'Garden Wedding': wedding3Image
    },
    anniversaire: {
      'Premium Anniversary': annivImage
    },
    profil: {
      'Professional Profile': profileImage
    }
  }
  
  return templateImages[category]?.[templateName] || memorialImage
}

const filterByCategory = (category) => {
  selectedCategory.value = category
  
  // Update URL
  const query = { ...route.query }
  if (category === 'all') {
    delete query.category
  } else {
    query.category = category
  }
  router.replace({ query })
}

const filterByPlan = (plan) => {
  selectedPlan.value = plan
}

const resetFilters = () => {
  selectedCategory.value = 'all'
  selectedPlan.value = 'all'
  router.replace({ query: {} })
}

const openDemo = (url) => {
  window.open(url, '_blank')
}

const sendWhatsApp = (template) => {
  sendToWhatsApp(template)
}

const sendToWhatsAppGeneral = () => {
  sendGeneralWhatsApp()
}
</script>
