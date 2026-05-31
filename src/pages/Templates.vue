<template>
  <div class="bg-ivoire dark:bg-zinc-950 min-h-screen text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Templates</Badge>
        <h1 class="heading-memorial mb-6 text-[1.65rem] font-semibold leading-tight text-noir dark:text-zinc-100 sm:text-4xl md:text-5xl">
          Découvrez nos
          <span class="text-doré">templates</span>
        </h1>
        <div class="divider-gold mb-8" />
        <p class="text-lg text-gris dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Des bases sobres et raffinées, à personnaliser selon votre histoire et votre cérémonie.
        </p>
      </template>
    </Section>

    <!-- Filtres + grille templates -->
    <Section padding="normal" background="light">
      <div class="mx-auto max-w-6xl">
        <!-- Category Filters -->
        <div class="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 md:gap-4">
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

        <!-- Plan Filters (mémorial & mariage uniquement) -->
        <div
          v-if="showPlanFilters"
          class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
        >
          <Button 
            :variant="selectedPlan === 'all' ? 'secondary' : 'ghost'"
            size="small"
            @click="filterByPlan('all')"
          >
            Tous les plans
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
        <p
          v-if="showPlanFilters"
          class="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-noir dark:text-zinc-300 sm:text-sm"
        >
          {{ TIER_PRICES_WHATSAPP_LINE_FR }} — Anniversaire & profil : tarif fixe {{ FIXED_PRICE_ANNIVERSAIRE_PROFIL }}.
        </p>
        <p
          v-else
          class="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-noir dark:text-zinc-300 sm:text-sm"
        >
          Tarif fixe {{ FIXED_PRICE_ANNIVERSAIRE_PROFIL }}.
        </p>

        <!-- Templates Grid -->
        <div class="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="template in filteredTemplates"
            :key="template.id"
            class="group cursor-pointer"
            @click="openDemo(template.demoUrl)"
          >
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-memorial dark:border dark:border-zinc-800 dark:bg-zinc-900">
              <div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-noir/10 to-doré/10">
                <img
                  :src="getTemplateImage(template.category, template.name)"
                  :alt="template.name"
                  class="h-full w-full object-cover"
                >
                <div class="absolute inset-0 bg-noir/20"></div>
                <div class="absolute left-4 top-4">
                  <Badge variant="default" size="small">
                    {{ getCategoryLabel(template.category) }}
                  </Badge>
                </div>
                <div class="absolute right-4 top-4">
                  <Badge
                    v-if="template.plan"
                    :variant="template.plan === 'premium' ? 'gold' : template.plan === 'standard' ? 'primary' : 'secondary'"
                    size="small"
                  >
                    {{ getPlanLabel(template.plan) }}
                  </Badge>
                  <Badge v-else variant="primary" size="small">
                    Prix fixe
                  </Badge>
                </div>
                <div class="absolute inset-0 flex items-center justify-center bg-noir/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div class="text-center text-blanc">
                    <svg class="mx-auto mb-3 h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="text-sm">Voir les détails</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 font-serif text-xl text-noir transition-colors group-hover:text-doré dark:text-zinc-100">
                  {{ template.name }}
                </h3>
                <p class="mb-4 line-clamp-2 text-sm text-gris dark:text-zinc-400">
                  {{ template.description }}
                </p>
                <div class="mb-4 flex flex-wrap gap-2">
                  <span
                    v-for="(feature, index) in template.features.slice(0, 3)"
                    :key="index"
                    class="rounded bg-gris-clair px-2 py-1 text-xs text-gris dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {{ feature }}
                  </span>
                  <span
                    v-if="template.features.length > 3"
                    class="rounded bg-doré/10 px-2 py-1 text-xs text-doré"
                  >
                    +{{ template.features.length - 3 }}
                  </span>
                </div>
                <div class="mb-4 flex items-center justify-end">
                  <div class="flex items-center space-x-2">
                    <svg class="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="text-sm text-gris dark:text-zinc-400">{{ template.features.length }} fonctionnalités</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <Button
                    variant="outline"
                    size="small"
                    class="flex-1"
                    @click.stop="openDemo(template.demoUrl)"
                  >
                    Démo
                  </Button>
                  <Button
                    variant="primary"
                    size="small"
                    class="flex-1"
                    @click.stop="sendWhatsApp(template)"
                  >
                    {{ template.isFixedPrice ? 'Commander' : 'Choisir' }}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredTemplates.length === 0" class="py-16 text-center">
          <div class="mx-auto max-w-md">
            <svg class="mx-auto mb-4 h-16 w-16 text-gris" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
            <h3 class="mb-2 font-serif text-xl text-noir dark:text-zinc-100">Aucun template trouvé</h3>
            <p class="mb-4 text-gris dark:text-zinc-400">
              Essayez de modifier vos filtres pour voir plus de templates.
            </p>
            <Button variant="outline" @click="resetFilters">
              Réinitialiser les filtres
            </Button>
          </div>
        </div>
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
import {
  TIER_PRICES_WHATSAPP_LINE_FR,
  FIXED_PRICE_ANNIVERSAIRE_PROFIL
} from '@/data/pricing.js'

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

const showPlanFilters = computed(() => {
  const cat = selectedCategory.value
  return cat === 'all' || cat === 'memorial' || cat === 'mariage'
})

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

  // Filter by plan (prix fixe anniversaire/profil : ignoré si catégorie correspondante)
  if (selectedPlan.value !== 'all') {
    filtered = filtered.filter((template) => {
      if (template.isFixedPrice || !template.plan) {
        if (selectedCategory.value === 'anniversaire' || selectedCategory.value === 'profil') {
          return template.category === selectedCategory.value
        }
        return false
      }
      return template.plan === selectedPlan.value
    })
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

const getPlanLabel = (plan) => {
  const labels = { standard: 'Standard', premium: 'Premium' }
  return labels[plan] || plan
}

const filterByCategory = (category) => {
  selectedCategory.value = category
  if (category === 'profil' || category === 'anniversaire') {
    selectedPlan.value = 'all'
  }
  
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
