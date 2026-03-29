<template>
  <div class="bg-blanc min-h-screen text-noir">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Tarifs</Badge>
        <h1 class="text-3xl md:text-5xl font-serif text-noir mb-6">
          Choisissez Votre
          <span class="text-doré">Formule</span>
        </h1>
        <p class="text-lg text-gris max-w-3xl mx-auto">
          Des tarifs transparents adaptés à tous les besoins. 
          Pas de frais cachés, que de la qualité et de l'élégance.
        </p>
      </template>
    </Section>

    <!-- Pricing Cards -->
    <Section padding="large" background="light">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Essentiel Plan -->
        <div class="relative">
          <Card variant="outlined" hover class="h-full">
            <div class="p-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-serif text-noir mb-2">Essentiel</h3>
                <div class="text-4xl font-bold text-noir mb-2">50$ - 80$</div>
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
                Choisir cette formule
              </Button>
            </div>
          </Card>
        </div>

        <!-- Standard Plan (Most Popular) -->
        <div class="relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <Badge variant="gold" size="large">Le plus choisi</Badge>
          </div>
          
          <Card variant="elevated" hover class="h-full border-2 border-doré shadow-xl">
            <div class="p-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-serif text-noir mb-2">Standard</h3>
                <div class="text-4xl font-bold text-doré mb-2">100$ - 150$</div>
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
                Choisir cette formule
              </Button>
            </div>
          </Card>
        </div>

        <!-- Premium Plan -->
        <div class="relative">
          <Card variant="outlined" hover class="h-full">
            <div class="p-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-serif text-noir mb-2">Premium</h3>
                <div class="text-4xl font-bold text-noir mb-2">200$ - 250$</div>
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
                Choisir cette formule
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>

    <!-- Features Comparison -->
    <Section padding="large">
      <template #header>
        <h2 class="text-3xl md:text-4xl font-serif text-noir mb-6">
          Comparaison des
          <span class="text-doré">Fonctionnalités</span>
        </h2>
      </template>

      <div class="max-w-4xl mx-auto">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gris-clair">
                <th class="text-left py-4 px-4 text-noir font-semibold">Fonctionnalités</th>
                <th class="text-center py-4 px-4 text-noir font-semibold">Essentiel</th>
                <th class="text-center py-4 px-4 text-noir font-semibold">Standard</th>
                <th class="text-center py-4 px-4 text-noir font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gris-clair">
                <td class="py-4 px-4 text-gris">Nombre de photos</td>
                <td class="text-center py-4 px-4">
                  <span class="text-noir">25 max</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span class="text-doré font-semibold">Illimité</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span class="text-doré font-semibold">Illimité</span>
                </td>
              </tr>
              <tr class="border-b border-gris-clair">
                <td class="py-4 px-4 text-gris">Vidéos</td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-doré mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gris-clair">
                <td class="py-4 px-4 text-gris">Design personnalisé</td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-doré mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-doré mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gris-clair">
                <td class="py-4 px-4 text-gris">Domaine personnalisé</td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-doré mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </td>
              </tr>
              <tr class="border-b border-gris-clair">
                <td class="py-4 px-4 text-gris">Support technique</td>
                <td class="text-center py-4 px-4">
                  <span class="text-noir">Email</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span class="text-doré font-semibold">Prioritaire</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span class="text-doré font-semibold">VIP 24/7</span>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gris">Maintenance</td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-gris mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </td>
                <td class="text-center py-4 px-4">
                  <svg class="w-5 h-5 text-doré mx-auto" fill="currentColor" viewBox="0 0 20 20">
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

    <!-- CTA Section -->
    <Section padding="large">
      <div class="text-center max-w-4xl mx-auto">
        <Card variant="elevated">
          <div class="p-8 md:p-12">
            <h2 class="text-3xl font-serif text-noir mb-4">
              Prêt à Commencer ?
            </h2>
            <p class="text-gris mb-8">
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

const faqs = ref([
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
  const message = `Bonjour One Memoria,

Je suis intéressé(e) par la formule "${plan}".

Pouvez-vous me donner plus d'informations ?`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/243991683269?text=${encodedMessage}`, '_blank')
}

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
