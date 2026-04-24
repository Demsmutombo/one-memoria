<template>
  <div class="bg-ivoire dark:bg-zinc-950 min-h-screen text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Contact</Badge>
        <h1 class="heading-memorial text-3xl font-semibold text-noir dark:text-zinc-100 md:text-5xl mb-6">
          Parlons de votre
          <span class="text-doré">projet</span>
        </h1>
        <div class="divider-gold mb-8" />
        <p class="text-lg text-gris dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Une question, une idée — nous vous répondons avec attention et discrétion.
        </p>
      </template>
    </Section>

    <!-- Contact Methods -->
    <Section padding="large" background="light">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- WhatsApp Contact -->
        <div class="text-center">
          <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <h3 class="text-xl font-serif text-noir mb-2">WhatsApp</h3>
          <p class="text-gris mb-4">Contactez-nous directement pour une réponse rapide</p>
          <Button variant="primary" @click="sendWhatsApp">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Envoyer un message
          </Button>
        </div>

        <!-- Email Contact -->
        <div class="text-center">
          <div class="w-20 h-20 bg-doré/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-serif text-noir mb-2">Email</h3>
          <p class="text-gris mb-4">Envoyez-nous un email détaillé</p>
          <a href="mailto:onememoria@gmail.com" class="text-doré font-semibold hover:text-yellow-500 transition-colors">
            onememoria@gmail.com
          </a>
        </div>
      </div>
    </Section>

    <!-- Office Hours -->
    <Section padding="large" background="light">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-serif text-noir mb-4">Heures d'Ouverture</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gris">Lundi - Vendredi</span>
                <span class="text-noir font-medium">9h - 17h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gris">Samedi</span>
                <span class="text-noir font-medium">10h - 14h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gris">Dimanche</span>
                <span class="text-noir font-medium">Fermé</span>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-doré/10 rounded-lg">
              <p class="text-sm text-gris">
                <strong>Response Time:</strong> Nous nous efforçons de répondre à tous les messages dans les 24 heures.
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-serif text-noir mb-4">Pourquoi Nous Choisir</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Support client dédié et réactif</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Designs élégants et modernes</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Processus simple et transparent</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gris">Tarifs compétitifs et transparents</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    <!-- FAQ Section -->
    <Section padding="large">
      <template #header>
        <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
          Questions
          <span class="text-doré">Fréquentes</span>
        </h2>
      </template>

      <div class="max-w-3xl mx-auto space-y-6">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gris-clair rounded-lg">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gris-clair transition-colors"
          >
            <span class="font-medium text-noir">{{ faq.question }}</span>
            <svg 
              class="w-5 h-5 text-doré transition-transform" 
              :class="{ 'rotate-180': faq.open }"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div v-show="faq.open" class="px-6 pb-4">
            <p class="text-gris">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'
import {
  FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR,
  FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR
} from '@/data/pricing.js'

const faqs = ref([
  {
    question: "Quel est le tarif pour un site d'anniversaire ou un profil personnel ?",
    answer: FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR,
    open: false
  },
  {
    question: "Quel est le tarif pour un site mémorial ou de mariage ?",
    answer: FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR,
    open: false
  },
  {
    question: "Quelle est la durée moyenne de création d'un site ?",
    answer: "La durée varie selon la complexité : 2-4 jours pour l'Essentiel, 2-4 jours pour le Standard, et 2-4 jours pour le Premium.",
    open: false
  },
  {
    question: "Puis-je voir des exemples de sites déjà créés ?",
    answer: "Oui ! Visitez notre page Templates pour voir des démos en direct de tous nos designs.",
    open: false
  },
  {
    question: "Comment puis-je payer pour mon site ?",
    answer: "Nous acceptons les paiements par carte de crédit, virement bancaire, et mobile money. Le paiement se fait en 2 fois : 50% au début et 50% à la livraison.",
    open: false
  },
    {
      question: "Est-ce que je peux modifier le contenu après la livraison ?",
      answer: "Les sites livrés sont des sites statiques, ce qui garantit rapidité, sécurité et stabilité.\n\nToute modification (texte, images, informations) peut être réalisée sur demande en nous contactant directement.",
      open: false
    },
  {
    question: "Offrez-vous un support après la livraison ?",
    answer: "Oui, nous offrons un support technique pour toutes nos formules. La formule Premium inclut un support VIP 24/7 et la maintenance incluse.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const sendWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
