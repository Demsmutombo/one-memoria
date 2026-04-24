<template>
  <div class="min-h-screen bg-ivoire dark:bg-zinc-950 flex flex-col items-center justify-center py-16 transition-colors duration-300">
    <!-- Logo et cercle combinés au centre -->
    <div class="relative flex flex-col items-center justify-center">
      <!-- Logo au centre -->
      <div class="relative z-10 mb-4">
        <img 
          :src="logoImage" 
          alt="One Memoria" 
          class="h-44 w-44 object-contain sm:h-52 sm:w-52 md:h-64 md:w-64"
        >
      </div>
      
      <!-- Loader circulaire autour du logo -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-60 w-60 border-4 border-doré/20 rounded-full sm:h-64 sm:w-64 md:h-72 md:w-72"></div>
        <div class="absolute h-60 w-60 border-4 border-doré border-t-transparent rounded-full animate-spin sm:h-64 sm:w-64 md:h-72 md:w-72"></div>
        <div class="absolute h-52 w-52 border-4 border-doré/10 rounded-full sm:h-56 sm:w-56 md:h-64 md:w-64"></div>
        <div class="absolute h-52 w-52 border-4 border-doré/30 border-b-transparent rounded-full animate-spin sm:h-56 sm:w-56 md:h-64 md:w-64" style="animation-direction: reverse; animation-duration: 2s;"></div>
      </div>
    </div>
    
    <!-- Texte One Memoria en bas avec effet clavier -->
    <div class="mt-16">
      <h1 class="text-4xl font-serif text-noir dark:text-zinc-100">
        <span class="inline-block">{{ displayedText }}</span>
        <span class="inline-block w-0.5 h-8 bg-noir dark:bg-zinc-300 animate-pulse ml-1" v-if="showCursor"></span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@/assets/images/templates/logo (1).png'

const router = useRouter()
const displayedText = ref('')
const showCursor = ref(true)
const fullText = 'One Memoria'

onMounted(() => {
  // Effet de clavier
  let currentIndex = 0
  const typeInterval = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayedText.value += fullText[currentIndex]
      currentIndex++
    } else {
      clearInterval(typeInterval)
      // Cacher le curseur après avoir fini d'écrire
      setTimeout(() => {
        showCursor.value = false
      }, 500)
    }
  }, 150) // vitesse de frappe
  
  // Rediriger automatiquement vers la page d'accueil après 3 secondes
  setTimeout(() => {
    router.push('/home')
  }, 3000)
})

// Écouter les changements de route pour réinitialiser le loader
watch(() => router.currentRoute.value, () => {
  if (router.currentRoute.value.name === 'start') {
    // Réinitialiser le texte et le curseur
    displayedText.value = ''
    showCursor.value = true
    
    // Relancer l'effet de clavier
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        displayedText.value += fullText[currentIndex]
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          showCursor.value = false
        }, 500)
        // Rediriger après 3 secondes
        setTimeout(() => {
          router.push('/home')
        }, 3000)
      }
    }, 150)
  }
}, { immediate: true })
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
