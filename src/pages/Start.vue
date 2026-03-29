<template>
  <div class="min-h-screen bg-blanc flex flex-col items-center justify-between py-16">
    <!-- Logo en haut -->
    <div class="flex-1 flex items-center justify-center">
      <img 
        src="/src/assets/images/templates/logo (1).png" 
        alt="One Memoria" 
        class="w-32 h-32 object-contain"
      >
    </div>
    
    <!-- Loader circulaire au milieu -->
    <div class="relative">
      <!-- Loader circulaire animé -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-48 h-48 border-4 border-doré/20 rounded-full"></div>
        <div class="absolute w-48 h-48 border-4 border-doré border-t-transparent rounded-full animate-spin"></div>
        <div class="absolute w-40 h-40 border-4 border-doré/10 rounded-full"></div>
        <div class="absolute w-40 h-40 border-4 border-doré/30 border-b-transparent rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 2s;"></div>
      </div>
    </div>
    
    <!-- Texte One Memoria en bas avec effet clavier -->
    <div class="flex-1 flex items-center justify-center">
      <h1 class="text-4xl font-serif text-noir">
        <span class="inline-block">{{ displayedText }}</span>
        <span class="inline-block w-0.5 h-8 bg-noir animate-pulse ml-1" v-if="showCursor"></span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

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
