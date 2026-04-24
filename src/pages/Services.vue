<template>
  <div class="bg-ivoire dark:bg-zinc-950 min-h-screen text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Header Section -->
    <Section padding="large">
      <template #header>
        <Badge variant="primary" class="mb-4">Nos services</Badge>
        <h1 class="heading-memorial text-3xl font-semibold text-noir dark:text-zinc-100 md:text-5xl mb-6">
          Sites web pour chaque
          <span class="text-doré">moment important</span>
        </h1>
        <div class="divider-gold mb-8" />
        <p class="text-lg text-gris dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Hommages, célébrations et présence en ligne — avec le même soin qu’un bel ouvrage, adapté au web.
        </p>
      </template>
    </Section>

    <!-- Services Grid -->
    <Section padding="large">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Memorial Service -->
        <div 
          class="group cursor-pointer"
          @click="$router.push('/templates?category=memorial')"
        >
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-soft dark:border dark:border-zinc-800 transition-all duration-300 group-hover:shadow-memorial group-hover:-translate-y-1">
            <!-- Service Preview -->
            <div class="aspect-[16/10] bg-gradient-to-br from-noir/80 to-noir/40 relative overflow-hidden">
              <img :src="memorialImage" alt="Sites Mémoriaux" class="w-full h-full object-cover">
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <Badge variant="default" size="small">
                  Mémorial
                </Badge>
              </div>
              
              <!-- Plan Badge -->
              <div class="absolute top-4 right-4">
                <Badge variant="primary" size="small">
                  Service
                </Badge>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-blanc">
                  <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-sm">Voir les templates</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
                Sites Mémoriaux
              </h3>
              <p class="text-sm text-gris mb-4 line-clamp-2">
                Honorez la mémoire de vos proches avec dignité et élégance.
              </p>
              
              <!-- Features Preview -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Biographie complète
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Galerie photos
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Messages
                </span>
                <span class="text-xs text-doré bg-doré/10 px-2 py-1 rounded">
                  +1
                </span>
              </div>
              
              <div class="flex items-center justify-between mb-4">
                <span class="text-doré font-semibold">{{ CATEGORY_CARD_MEMORIAL.label }}</span>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm text-gris">4 fonctionnalités</span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <Button 
                  variant="outline" 
                  size="small" 
                  class="flex-1"
                  @click.stop="$router.push('/templates?category=memorial')"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  Templates
                </Button>
                <Button 
                  variant="primary" 
                  size="small" 
                  class="flex-1"
                  @click.stop="sendToWhatsApp"
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

        <!-- Wedding Service -->
        <div 
          class="group cursor-pointer"
          @click="$router.push('/templates?category=mariage')"
        >
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-soft dark:border dark:border-zinc-800 transition-all duration-300 group-hover:shadow-memorial group-hover:-translate-y-1">
            <!-- Service Preview -->
            <div class="aspect-[16/10] bg-gradient-to-br from-doré/40 to-doré/20 relative overflow-hidden">
              <img :src="weddingImage" alt="Sites de Mariage" class="w-full h-full object-cover">
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <Badge variant="default" size="small">
                  Mariage
                </Badge>
              </div>
              
              <!-- Plan Badge -->
              <div class="absolute top-4 right-4">
                <Badge variant="primary" size="small">
                  Service
                </Badge>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-blanc">
                  <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-sm">Voir les templates</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
                Sites de Mariage
              </h3>
              <p class="text-sm text-gris mb-4 line-clamp-2">
                Célébrez votre amour avec un site web élégant et romantique.
              </p>
              
              <!-- Features Preview -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Histoire d'amour
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Galerie photos
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  RSVP
                </span>
                <span class="text-xs text-doré bg-doré/10 px-2 py-1 rounded">
                  +1
                </span>
              </div>
              
              <div class="flex items-center justify-between mb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-doré font-semibold">{{ CATEGORY_CARD_MARIAGE.label }}</span>
                  <Badge :variant="CATEGORY_CARD_MARIAGE.badgeVariant" size="small">Recommandé</Badge>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm text-gris">4 fonctionnalités</span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <Button 
                  variant="outline" 
                  size="small" 
                  class="flex-1"
                  @click.stop="$router.push('/templates?category=mariage')"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  Templates
                </Button>
                <Button 
                  variant="primary" 
                  size="small" 
                  class="flex-1"
                  @click.stop="sendToWhatsApp"
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

        <!-- Anniversary Service -->
        <div 
          class="group cursor-pointer"
          @click="$router.push('/templates?category=anniversaire')"
        >
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-soft dark:border dark:border-zinc-800 transition-all duration-300 group-hover:shadow-memorial group-hover:-translate-y-1">
            <!-- Service Preview -->
            <div class="aspect-[16/10] bg-gradient-to-br from-yellow-400/30 to-orange-400/20 relative overflow-hidden">
              <img :src="annivImage" alt="Sites d'Anniversaire" class="w-full h-full object-cover">
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <Badge variant="default" size="small">
                  Anniversaire
                </Badge>
              </div>
              
              <!-- Plan Badge -->
              <div class="absolute top-4 right-4">
                <Badge variant="primary" size="small">
                  Service
                </Badge>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-blanc">
                  <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-sm">Voir les templates</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
                Sites d'Anniversaire
              </h3>
              <p class="text-sm text-gris mb-4 line-clamp-2">
                Commémorez vos étapes importantes avec joie et festivité.
              </p>
              
              <!-- Features Preview -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Timeline
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Messages
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Galerie
                </span>
                <span class="text-xs text-doré bg-doré/10 px-2 py-1 rounded">
                  +1
                </span>
              </div>
              
              <div class="flex items-center justify-between mb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-doré font-semibold">{{ FIXED_CARD.label }}</span>
                  <Badge variant="primary" size="small">{{ FIXED_CARD.badge }}</Badge>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm text-gris">4 fonctionnalités</span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <Button 
                  variant="outline" 
                  size="small" 
                  class="flex-1"
                  @click.stop="$router.push('/templates?category=anniversaire')"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  Templates
                </Button>
                <Button 
                  variant="primary" 
                  size="small" 
                  class="flex-1"
                  @click.stop="sendToWhatsApp"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Commander
                </Button>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Service -->
        <div 
          class="group cursor-pointer"
          @click="$router.push('/templates?category=profil')"
        >
          <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-soft dark:border dark:border-zinc-800 transition-all duration-300 group-hover:shadow-memorial group-hover:-translate-y-1">
            <!-- Service Preview -->
            <div class="aspect-[16/10] bg-gradient-to-br from-blue-400/30 to-purple-400/20 relative overflow-hidden">
              <img :src="profileImage" alt="Profils Personnels" class="w-full h-full object-cover">
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <Badge variant="default" size="small">
                  Profil
                </Badge>
              </div>
              
              <!-- Plan Badge -->
              <div class="absolute top-4 right-4">
                <Badge variant="primary" size="small">
                  Service
                </Badge>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-noir/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-blanc">
                  <svg class="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="text-sm">Voir les templates</p>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-serif text-noir mb-2 group-hover:text-doré transition-colors">
                Profils Personnels
              </h3>
              <p class="text-sm text-gris mb-4 line-clamp-2">
                Créez votre présence en ligne avec un site personnel professionnel.
              </p>
              
              <!-- Features Preview -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Portfolio
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  CV numérique
                </span>
                <span class="text-xs text-gris bg-gris-clair px-2 py-1 rounded">
                  Blog
                </span>
                <span class="text-xs text-doré bg-doré/10 px-2 py-1 rounded">
                  +1
                </span>
              </div>
              
              <div class="flex items-center justify-between mb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-doré font-semibold">{{ FIXED_CARD.label }}</span>
                  <Badge variant="primary" size="small">{{ FIXED_CARD.badge }}</Badge>
                </div>
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm text-gris">4 fonctionnalités</span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <Button 
                  variant="outline" 
                  size="small" 
                  class="flex-1"
                  @click.stop="$router.push('/templates?category=profil')"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                  Templates
                </Button>
                <Button 
                  variant="primary" 
                  size="small" 
                  class="flex-1"
                  @click.stop="sendToWhatsApp"
                >
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Commander
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup>
import Section from '@/components/ui/Section.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { ref } from 'vue'
import memorialImage from '@/assets/images/templates/memorial/memorial.jpeg'
import weddingImage from '@/assets/images/templates/mariage/wedding.jpeg'
import annivImage from '@/assets/images/templates/anniversaire/anniv4.jpeg'
import profileImage from '@/assets/images/templates/profil/profile4.jpeg'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'
import { CATEGORY_CARD_MEMORIAL, CATEGORY_CARD_MARIAGE, FIXED_CARD } from '@/data/pricing.js'

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
}
</script>
