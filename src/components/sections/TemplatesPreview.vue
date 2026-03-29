<template>
  <Section padding="large" background="light">
    <template #header>
      <Badge variant="primary" class="mb-4">Tous Nos Templates</Badge>
      <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
        Découvrez Nos
        <span class="text-doré">Templates</span>
      </h2>
      <p class="text-lg text-gris max-w-3xl mx-auto">
        Des designs élégants et respectueux pour honorer la mémoire de vos proches, 
        célébrer votre amour, commémorer vos moments importants et créer votre présence en ligne. 
        Chaque template est personnalisable selon vos besoins.
      </p>
    </template>

    <!-- Featured Templates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div 
        v-for="template in featuredTemplates" 
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
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
              {{ template.name }}
            </h3>
            <p class="text-sm text-gris mb-4 line-clamp-2">
              {{ template.description }}
            </p>
            
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
                Démo
              </Button>
              <Button 
                variant="primary" 
                size="small" 
                class="flex-1"
                @click.stop="sendWhatsApp(template)"
              >
                Choisir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View All CTA -->
    <div class="text-center">
      <Button variant="outline" size="large" @click="$router.push('/templates')">
        Voir Tous les Templates
      </Button>
    </div>
  </Section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import { templates } from '@/data/templates.js'
import { sendToWhatsApp } from '@/services/whatsapp.js'

// Import all template images
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import wedding2Image from '@/assets/images/templates/mariage/wedding2.jpeg'
import wedding3Image from '@/assets/images/templates/mariage/wedding3.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile3.jpeg'

const router = useRouter()

// Get specific memorial templates, all wedding templates, and one each of profile and anniversary
const featuredTemplates = computed(() => {
  const memorialTemplates = templates.filter(template => 
    template.category === 'memorial' && 
    ['White Marble', 'Nature Serenity', 'Cross Memorial'].includes(template.name)
  )
  const weddingTemplates = templates.filter(template => template.category === 'mariage')
  const profileTemplate = templates.find(template => template.category === 'profil')
  const anniversaryTemplate = templates.find(template => template.category === 'anniversaire')
  return [...memorialTemplates, ...weddingTemplates, profileTemplate, anniversaryTemplate]
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
      'Cherry Blossoms': memorialImage,
    },
    mariage: {
      'Romantic Wedding': weddingImage,
      'Elegant Union': wedding2Image,
      'Garden Wedding': wedding3Image
    },
    anniversaire: {
      'Premium Anniversary': annivImage,
    },
    profil: {
      'Professional Profile': profileImage,
      'Creative Portfolio': profileImage,
      'Modern CV': profileImage
    }
  }
  
  return templateImages[category]?.[templateName] || memorialImage
}

const openDemo = (url) => {
  window.open(url, '_blank')
}

const sendWhatsApp = (template) => {
  sendToWhatsApp(template)
}
</script>
