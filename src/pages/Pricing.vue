<template>
  <div class="bg-ivoire dark:bg-zinc-950 min-h-screen text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Tarifs</Badge>
        <h1 class="heading-memorial mb-6 text-[1.65rem] font-semibold leading-tight text-noir dark:text-zinc-100 sm:text-4xl md:text-5xl">
          Choisissez votre
          <span class="text-doré">formule</span>
        </h1>
        <div class="divider-gold mb-8" />
        <p class="mx-auto max-w-2xl px-1 text-base leading-relaxed text-gris dark:text-zinc-400 sm:text-lg">
          Des tarifs clairs — pour un projet serein, sans frais cachés.
        </p>
        <p class="mx-auto mt-5 max-w-2xl px-1 text-sm text-noir dark:text-zinc-300 sm:text-base">
          Sites d’anniversaire et profils personnels : tarif fixe <span class="text-doré font-semibold">{{ FIXED_PRICE_ANNIVERSAIRE_PROFIL }}</span>.
        </p>
        <p class="mx-auto mt-3 max-w-2xl px-1 text-sm text-noir dark:text-zinc-300 sm:text-base">
          {{ TIER_PRICES_WHATSAPP_LINE_FR }}
        </p>
      </template>
    </Section>

    <!-- Pricing Cards -->
    <Section padding="large" background="light">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
        <!-- Essentiel Plan -->
        <div class="relative">
          <Card variant="outlined" hover class="h-full">
            <div class="p-5 sm:p-8">
              <div class="mb-6 text-center sm:mb-8">
                <h3 class="mb-2 font-serif text-xl text-noir sm:text-2xl dark:text-zinc-100">Essentiel</h3>
                <div class="mb-2 text-2xl font-bold leading-snug text-noir sm:text-3xl md:text-4xl dark:text-zinc-100">{{ TIER_PRICES.essentiel }}</div>
                <p class="text-gris">Pour les besoins simples</p>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Biographie complète</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Galerie photos (25 max)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Design élégant</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Responsive mobile</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Formulaire de contact</span>
                </li>
              </ul>
              
              <Button variant="outline" full-width @click="selectPlan('essentiel')">
                Commander
              </Button>
            </div>
          </Card>
        </div>

        <!-- Standard Plan (Most Popular) -->
        <div class="relative md:pt-2">
          <!-- Popular Badge -->
          <div class="absolute -top-3 left-1/2 z-10 -translate-x-1/2 sm:-top-4">
            <Badge variant="gold" size="large">Recommandé</Badge>
          </div>
          
          <Card variant="elevated" hover class="h-full border-2 border-doré shadow-xl">
            <div class="p-5 pt-8 sm:p-8 sm:pt-8">
              <div class="mb-6 text-center sm:mb-8">
                <h3 class="mb-2 font-serif text-xl text-noir sm:text-2xl dark:text-zinc-100">Standard</h3>
                <div class="mb-2 text-2xl font-bold leading-snug text-doré sm:text-3xl md:text-4xl">{{ TIER_PRICES.standard }}</div>
                <p class="text-gris">Le meilleur rapport qualité-prix</p>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Tout l'essentiel +</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Galerie photos illimitée</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Témoignages et livre d'or</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Timeline interactive</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Formulaire de contact avancé</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Personnalisation avancée</span>
                </li>
              </ul>
              
              <Button variant="primary" full-width @click="selectPlan('standard')">
                Commander
              </Button>
            </div>
          </Card>
        </div>

        <!-- Premium Plan -->
        <div class="relative">
          <Card variant="outlined" hover class="h-full">
            <div class="p-5 sm:p-8">
              <div class="mb-6 text-center sm:mb-8">
                <h3 class="mb-2 font-serif text-xl text-noir sm:text-2xl dark:text-zinc-100">Premium</h3>
                <div class="mb-2 text-2xl font-bold leading-snug text-noir sm:text-3xl md:text-4xl dark:text-zinc-100">{{ TIER_PRICES.premium }}</div>
                <p class="text-gris">Pour les projets exceptionnels</p>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Tout le standard +</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Design sur mesure</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Galerie vidéo</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Animations avancées</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Domaine personnalisé</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Support VIP 24/7</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-doré mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gris">Maintenance incluse</span>
                </li>
              </ul>
              
              <Button variant="outline" full-width @click="selectPlan('premium')">
                Commander
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>

    <!-- Features Comparison -->
    <Section padding="large">
      <template #header>
        <h2 class="mb-6 font-serif text-2xl text-noir dark:text-zinc-100 sm:text-3xl md:text-4xl">
          Comparaison des
          <span class="text-doré">Fonctionnalités</span>
        </h2>
      </template>

      <div class="mx-auto max-w-4xl">
        <p class="mb-3 text-center text-xs text-gris dark:text-zinc-500 sm:hidden">
          Faites défiler horizontalement pour comparer les formules
        </p>
        <div
          class="overflow-x-auto rounded-xl border border-stone-200/90 bg-white/60 shadow-sm [-webkit-overflow-scrolling:touch] dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <table class="w-full min-w-[32rem] border-collapse text-sm sm:min-w-0 sm:text-base">
            <thead>
              <tr class="border-b border-stone-200/90 dark:border-zinc-800">
                <th class="py-3 pl-4 pr-2 text-left font-semibold text-noir dark:text-zinc-100 sm:px-4 sm:py-4">Fonctionnalités</th>
                <th class="px-2 py-3 text-center font-semibold text-noir dark:text-zinc-100 sm:px-4 sm:py-4">Essentiel</th>
                <th class="px-2 py-3 text-center font-semibold text-noir dark:text-zinc-100 sm:px-4 sm:py-4">Standard</th>
                <th class="py-3 pr-4 text-center font-semibold text-noir dark:text-zinc-100 sm:px-4 sm:py-4">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-stone-200/80 dark:border-zinc-800">
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Nombre de photos</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <span class="text-noir dark:text-zinc-200">25 max</span>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <span class="font-semibold text-doré">Illimité</span>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <span class="font-semibold text-doré">Illimité</span>
                </td>
              </tr>
              <tr class="border-b border-stone-200/80 dark:border-zinc-800">
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Vidéos</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-stone-200/80 dark:border-zinc-800">
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Design personnalisé</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-stone-200/80 dark:border-zinc-800">
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Domaine personnalisé</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-stone-200/80 dark:border-zinc-800">
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Support technique</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <span class="text-noir dark:text-zinc-200">Email</span>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <span class="font-semibold text-doré">Prioritaire</span>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <span class="font-semibold text-doré">VIP 24/7</span>
                </td>
              </tr>
              <tr>
                <td class="py-3 pl-4 pr-2 text-gris sm:px-4 sm:py-4">Maintenance</td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="px-2 py-3 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-gris" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="py-3 pr-4 text-center sm:px-4 sm:py-4">
                  <svg class="mx-auto h-5 w-5 text-doré" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>

    <!-- FAQ Section -->
    <Section padding="large" background="light">
      <template #header>
        <h2 class="mb-6 font-serif text-2xl text-noir dark:text-zinc-100 sm:text-3xl md:text-4xl">
          Questions
          <span class="text-doré">Fréquentes</span>
        </h2>
      </template>

      <div class="mx-auto max-w-3xl space-y-4 sm:space-y-6">
        <div v-for="(faq, index) in faqs" :key="index" class="overflow-hidden rounded-xl border border-stone-200/90 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/30">
          <button 
            type="button"
            @click="toggleFaq(index)"
            class="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-stone-100/80 dark:hover:bg-zinc-800/80 sm:items-center sm:px-6"
          >
            <span class="font-medium leading-snug text-noir dark:text-zinc-100 sm:leading-normal">{{ faq.question }}</span>
            <svg 
              class="w-5 h-5 text-doré transition-transform" 
              :class="{ 'rotate-180': faq.open }"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div v-show="faq.open" class="border-t border-stone-200/80 px-4 pb-4 pt-0 dark:border-zinc-800 sm:px-6">
            <p class="pt-3 text-sm leading-relaxed text-gris dark:text-zinc-400 sm:text-base">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA Section -->
    <Section padding="large">
      <div class="text-center max-w-4xl mx-auto">
        <Card variant="elevated">
          <div class="p-8 md:p-12">
            <h2 class="mb-4 font-serif text-3xl text-noir dark:text-zinc-100">
              Prêt à Commencer ?
            </h2>
            <p class="mb-8 text-gris dark:text-zinc-400">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" @click="sendToWhatsApp">
                Contacter WhatsApp
              </Button>
              <Button variant="outline" size="large" @click="$router.push('/templates')">
                Voir les Templates
              </Button>
            </div>
          </div>
        </Card>
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
  TIER_PRICES,
  FIXED_PRICE_ANNIVERSAIRE_PROFIL,
  FAQ_ANSWER_FIXED_ANNIV_PROFIL_FR,
  FAQ_ANSWER_MEMORIAL_MARIAGE_TARIFS_FR,
  TIER_PRICES_WHATSAPP_LINE_FR
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
    question: "Qu'est-ce qui est inclus dans chaque formule ?",
    answer: "Chaque formule inclut la création du site, l'hébergement pendant 1 an, et le support technique. La formule Premium inclut également la maintenance et un domaine personnalisé.",
    open: false
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Nous appliquerons un crédit pour la formule déjà payée.",
    open: false
  },
  {
    question: "Combien de temps prend la création du site ?",
    answer: "La durée varie selon la complexité : 3-5 jours pour l'Essentiel, 5-7 jours pour le Standard, et 7-10 jours pour le Premium.",
    open: false
  },
  {
    question: "Est-ce que je peux mettre à jour le contenu moi-même ?",
    answer: "Oui, toutes les formules incluent un panneau d'administration simple pour mettre à jour le contenu. La formule Premium inclut également une formation personnalisée.",
    open: false
  },
  {
    question: "Quelles sont les méthodes de paiement acceptées ?",
    answer: "Nous acceptons les paiements par carte de crédit, virement bancaire, et mobile money. Le paiement se fait en 2 fois : 50% au début et 50% à la livraison.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const selectPlan = (plan) => {
  const price = TIER_PRICES[plan]
  const message = `Bonjour One Memoria,

Je suis intéressé(e) par la formule "${plan}" (${price}).

Pouvez-vous me donner plus d'informations ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
