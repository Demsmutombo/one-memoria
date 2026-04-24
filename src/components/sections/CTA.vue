<template>
    <Section padding="large" background="light" class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-doré/[0.06] via-transparent to-transparent dark:from-doré/[0.04]"
      aria-hidden="true"
    />

    <div class="relative z-10 text-center">
      <div class="max-w-4xl mx-auto">
        <Badge variant="gold" size="large" class="mb-6 !rounded-full px-5 tracking-wide">
          Dernière étape
        </Badge>
        
        <h2 class="heading-memorial text-3xl font-semibold text-noir dark:text-zinc-100 md:text-5xl mb-6 leading-tight">
          Votre histoire mérite
          <span class="text-doré block mt-1">d’être racontée</span>
        </h2>
        <div class="divider-gold mb-10" />
        
        <p class="text-lg md:text-xl text-gris dark:text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          Offrez à vos proches un espace calme et élégant pour se recueillir, feuilleter des photos
          et laisser un mot — comme dans un livre d’or, accessible partout.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-doré mb-2">150+</div>
            <div class="text-sm md:text-base text-gris">Sites Créés</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-doré mb-2">15</div>
            <div class="text-sm md:text-base text-gris">Templates Uniques</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-doré mb-2">98%</div>
            <div class="text-sm md:text-base text-gris">Clients Satisfaits</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-doré mb-2">24h</div>
            <div class="text-sm md:text-base text-gris">Réponse Garantie</div>
          </div>
        </div>

        <!-- Main CTA -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button variant="primary" size="large" @click="sendToWhatsApp" class="text-lg px-8 py-4">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Commencer sur WhatsApp
          </Button>
          <Button variant="outline" size="large" @click="$router.push('/templates')" class="text-lg px-8 py-4">
            Voir les Templates
          </Button>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gris">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            +243 818 123 456
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            onememoria@gmail.com
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            Réponse sous 24h
          </div>
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
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

const router = useRouter()

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
