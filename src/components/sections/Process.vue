<template>
  <Section padding="large" background="light">
    <template #header>
      <Badge variant="primary" class="mb-4">Notre Processus</Badge>
      <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
        Simple et
        <span class="text-doré">Efficace</span>
      </h2>
      <p class="text-lg text-gris max-w-3xl mx-auto">
        Nous rendons la création de votre site web simple et agréable. 
        Suivez ces étapes pour obtenir votre site personnalisé.
      </p>
    </template>

    <div class="max-w-4xl mx-auto">
      <!-- Process Timeline -->
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

    <!-- CTA Section -->
    <div class="mt-16 text-center">
      <Card variant="elevated" class="max-w-4xl mx-auto">
        <div class="p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-serif text-noir mb-4">
            Prêt à Commencer ?
          </h3>
          <p class="text-gris mb-8 max-w-2xl mx-auto">
            Le processus commence par une simple conversation. 
            Contactez-nous dès aujourd'hui pour discuter de votre projet.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" @click="sendToWhatsApp">
              Démarrer le Processus
            </Button>
            <Button variant="outline" size="large" @click="$router.push('/process')">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Section from '@/components/ui/Section.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

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
    duration: "2-4 jours"
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

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
