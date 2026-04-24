<template>
  <Section padding="large" background="light">
    <template #header>
      <Badge variant="primary" class="mb-4">Pourquoi nous</Badge>
      <h2 class="heading-memorial text-3xl font-semibold text-noir dark:text-zinc-100 md:text-4xl lg:text-[2.75rem] mb-6">
        L’importance des
        <span class="text-doré">souvenirs numériques</span>
      </h2>
      <div class="divider-gold mb-8" />
      <p class="text-lg text-gris dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        Préserver une mémoire, c’est offrir un lieu de recueillement accessible à tous vos proches,
        avec la dignité d’un bel ouvrage et la simplicité du web.
      </p>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <Card variant="elevated" hover class="text-center">
        <div class="p-8">
          <div class="w-16 h-16 bg-doré/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-serif font-semibold text-noir dark:text-zinc-100 mb-4">Héritage durable</h3>
          <p class="text-gris leading-relaxed">
            Créez un héritage numérique qui perdure au-delà du temps. 
            Vos histoires méritent d'être préservées pour les générations futures.
          </p>
        </div>
      </Card>

      <!-- Card 2 -->
      <Card variant="elevated" hover class="text-center">
        <div class="p-8">
          <div class="w-16 h-16 bg-doré/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-serif font-semibold text-noir dark:text-zinc-100 mb-4">Galerie partagée</h3>
          <p class="text-gris leading-relaxed">
            Partagez photos et vidéos avec vos proches. 
            Une collection centralisée de vos plus beaux souvenirs.
          </p>
        </div>
      </Card>

      <!-- Card 3 -->
      <Card variant="elevated" hover class="text-center">
        <div class="p-8">
          <div class="w-16 h-16 bg-doré/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-doré" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-serif font-semibold text-noir dark:text-zinc-100 mb-4">Connexion familiale</h3>
          <p class="text-gris leading-relaxed">
            Rassemblez vos proches autour d'un espace commun. 
            Laissez des messages et partagez des souvenirs ensemble.
          </p>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
</script>
