<template>
  <div class="bg-blanc min-h-screen text-noir">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Notre Processus</Badge>
        <h1 class="text-3xl md:text-5xl font-serif text-noir mb-6">
          Simple et
          <span class="text-doré">Efficace</span>
        </h1>
        <p class="text-lg text-gris max-w-3xl mx-auto">
          Nous rendons la création de votre site web simple et agréable. 
          Suivez ces étapes pour obtenir votre site personnalisé.
        </p>
      </template>
    </Section>

    <!-- Process Timeline -->
    <Section padding="large" background="light">
      <div class="max-w-4xl mx-auto">
        <!-- Timeline Line -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-doré/20"></div>
          
          <!-- Process Steps -->
          <div class="space-y-12">
            <div 
              v-for="(step, index) in processSteps" 
              :key="index"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
            >
              <!-- Step Number -->
              <div class="flex-shrink-0 w-16 h-16 bg-doré rounded-full flex items-center justify-center text-noir font-bold text-xl z-10">
                {{ index + 1 }}
              </div>
              
              <!-- Step Content -->
              <div class="ml-6 md:ml-0 md:flex-1 md:mx-12">
                <Card variant="elevated" hover>
                  <div class="p-6">
                    <h3 class="text-xl font-serif text-noir mb-3">{{ step.title }}</h3>
                    <p class="text-gris mb-4">{{ step.description }}</p>
                    
                    <!-- Step Details -->
                    <div v-if="step.details" class="space-y-2">
                      <div 
                        v-for="detail in step.details" 
                        :key="detail"
                        class="flex items-start"
                      >
                        <svg class="w-4 h-4 text-doré mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm text-gris">{{ detail }}</span>
                      </div>
                    </div>
                    
                    <!-- Duration -->
                    <div class="mt-4 flex items-center text-sm text-doré">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                      </svg>
                      {{ step.duration }}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Detailed Process Steps -->
    <Section padding="large">
      <template #header>
        <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
          Détails du
          <span class="text-doré">Processus</span>
        </h2>
        <p class="text-lg text-gris max-w-3xl mx-auto">
          Chaque étape est conçue pour garantir votre satisfaction et la qualité finale de votre site.
        </p>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(step, index) in detailedSteps" 
          :key="index"
          class="text-center"
        >
          <div class="w-20 h-20 bg-doré/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <component :is="step.icon" class="w-10 h-10 text-doré" />
          </div>
          <h3 class="text-xl font-serif text-noir mb-3">{{ step.title }}</h3>
          <p class="text-gris leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </Section>

    <!-- What We Need Section -->
    <Section padding="large" background="light">
      <template #header>
        <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
          Ce Dont Nous Avons
          <span class="text-doré">Besoin</span>
        </h2>
        <p class="text-lg text-gris max-w-3xl mx-auto">
          Pour créer votre site parfait, voici les éléments que nous aurons besoin de votre part.
        </p>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Informations de base</h3>
              <p class="text-gris text-sm">Nom, dates importantes, biographie, histoire personnelle</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Photos et vidéos</h3>
              <p class="text-gris text-sm">Images haute qualité, vidéos, documents importants</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Préférences de design</h3>
              <p class="text-gris text-sm">Couleurs, style, polices, inspiration visuelle</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Coordonnées</h3>
              <p class="text-gris text-sm">Email, téléphone, réseaux sociaux pour le contact</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h-2a2 2 0 100 4h2a2 2 0 100 4h-2a2 2 0 00-2 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 00-2-2h-2a2 2 0 100-4h2a2 2 0 100-4h-2a2 2 0 100-4h2a2 2 0 002-2 2 2 0 00-2-2H6a2 2 0 00-2 2v1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Informations d'événement</h3>
              <p class="text-gris text-sm">Date, lieu, horaires, instructions pour les invités</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-12 h-12 bg-doré/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-doré" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-noir mb-2">Contenu personnalisé</h3>
              <p class="text-gris text-sm">Textes, citations, messages spéciaux, témoignages</p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Timeline Summary -->
    <Section padding="large">
      <template #header>
        <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
          Chronologie
          <span class="text-doré">Estimée</span>
        </h2>
      </template>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gris-clair rounded-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-serif text-noir mb-4">Phase 1: Préparation (1-2 jours)</h3>
              <ul class="space-y-2 text-gris">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Consultation initiale
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Validation du template
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Paiement 50%
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-serif text-noir mb-4">Phase 2: Création (3-5 jours)</h3>
              <ul class="space-y-2 text-gris">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Développement du site
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Intégration du contenu
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Tests et optimisation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-serif text-noir mb-4">Phase 3: Finalisation (1-2 jours)</h3>
              <ul class="space-y-2 text-gris">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Preview client
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Modifications finales
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Paiement final
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-serif text-noir mb-4">Phase 4: Livraison (Immédiat)</h3>
              <ul class="space-y-2 text-gris">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Mise en ligne
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Formation
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-doré mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  Support continu
                </li>
              </ul>
            </div>
          </div>
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
              Le processus commence par une simple conversation. 
              Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" @click="sendToWhatsApp">
                Démarrer le Processus
              </Button>
              <Button variant="outline" size="large" @click="$router.push('/pricing')">
                Voir les Tarifs
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { h } from 'vue'
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

// Icon components
const SearchIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { fillRule: 'evenodd', d: 'M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z', clipRule: 'evenodd' })
])

const ChatIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { d: 'M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' }),
  h('path', { d: 'M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' })
])

const PaymentIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { d: 'M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' }),
  h('path', { fillRule: 'evenodd', d: 'M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z', clipRule: 'evenodd' })
])

const CodeIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { fillRule: 'evenodd', d: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
])

const EyeIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { d: 'M10 12a2 2 0 100-4 2 2 0 000 4z' }),
  h('path', { fillRule: 'evenodd', d: 'M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z', clipRule: 'evenodd' })
])

const CheckIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { fillRule: 'evenodd', d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z', clipRule: 'evenodd' })
])

const RocketIcon = () => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20', class: 'w-10 h-10' }, [
  h('path', { fillRule: 'evenodd', d: 'M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z', clipRule: 'evenodd' })
])

const processSteps = [
  {
    title: "Choisir votre template",
    description: "Explorez notre collection de templates et choisissez celui qui correspond à votre vision.",
    details: [
      "Parcourez par catégorie",
      "Voir les démos en direct",
      "Comparer les fonctionnalités"
    ],
    duration: "15-30 minutes"
  },
  {
    title: "Contactez-nous",
    description: "Discutez de votre projet avec notre équipe via WhatsApp pour définir vos besoins.",
    details: [
      "Consultation gratuite",
      "Personnalisation du template",
      "Devis personnalisé"
    ],
    duration: "30-45 minutes"
  },
  {
    title: "Paiement 50%",
    description: "Effectuez un acompte de 50% pour démarrer le développement de votre site.",
    details: [
      "Paiement sécurisé",
      "Facture détaillée",
      "Confirmation immédiate"
    ],
    duration: "5 minutes"
  },
  {
    title: "Formulaire client",
    description: "Remplissez notre formulaire détaillé avec toutes les informations nécessaires.",
    details: [
      "Informations de base",
      "Photos et vidéos",
      "Préférences de design"
    ],
    duration: "20-30 minutes"
  },
  {
    title: "Création du site",
    description: "Notre équipe développe votre site personnalisé selon vos spécifications.",
    details: [
      "Développement professionnel",
      "Intégration de contenu",
      "Tests de qualité"
    ],
    duration: "3-5 jours"
  },
  {
    title: "Preview et validation",
    description: "Recevez un lien preview pour consulter et valider votre site avant livraison finale.",
    details: [
      "Lien preview privé",
      "Demandes de modifications",
      "Validation finale"
    ],
    duration: "1-2 jours"
  },
  {
    title: "Paiement final",
    description: "Effectuez le paiement du solde (50%) avant la livraison finale.",
    details: [
      "Paiement sécurisé",
      "Facture finale",
      "Préparation livraison"
    ],
    duration: "5 minutes"
  },
  {
    title: "Livraison finale",
    description: "Recevez votre site web complet avec tous les accès et documentation.",
    details: [
      "Site en ligne",
      "Accès administrateur",
      "Support technique"
    ],
    duration: "Immédiat"
  }
]

const detailedSteps = [
  {
    title: "Découverte",
    description: "Explorez nos templates et choisissez celui qui vous inspire le plus.",
    icon: SearchIcon
  },
  {
    title: "Consultation",
    description: "Discutons de votre projet pour comprendre parfaitement vos besoins.",
    icon: ChatIcon
  },
  {
    title: "Paiement",
    description: "Paiement simple et sécurisé en deux étapes pour votre tranquillité.",
    icon: PaymentIcon
  },
  {
    title: "Développement",
    description: "Notre équipe crée votre site personnalisé avec attention aux détails.",
    icon: CodeIcon
  },
  {
    title: "Preview",
    description: "Consultez votre site avant la mise en ligne et demandez des modifications.",
    icon: EyeIcon
  },
  {
    title: "Validation",
    description: "Validez le résultat final et recevez votre site complet et fonctionnel.",
    icon: CheckIcon
  },
  {
    title: "Lancement",
    description: "Votre site est mis en ligne et accessible à votre audience.",
    icon: RocketIcon
  },
  {
    title: "Support",
    description: "Bénéficiez de notre support continu pour toute question ou besoin.",
    icon: RocketIcon
  }
]

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
