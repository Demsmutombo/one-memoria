<template>
  <div id="app" class="min-h-screen bg-blanc">
    <!-- Loader global -->
    <div v-if="showGlobalLoader" class="fixed inset-0 bg-blanc z-50 flex flex-col items-center justify-between py-16">
      <!-- Logo en haut -->
      <div class="flex-1 flex items-center justify-center">
        <img 
          src="/src/assets/images/templates/logo (1).png" 
          alt="One Memoria" 
          class="w-64 h-64 object-contain"
        >
      </div>
      
      <!-- Texte One Memoria en bas avec effet clavier -->
      <div class="flex-1 flex items-center justify-center">
        <h1 class="text-4xl font-serif text-noir">
          <span class="inline-block">{{ displayedText }}</span>
        </h1>
      </div>
    </div>
    
    <!-- Contenu de l'application -->
    <div v-show="!showGlobalLoader">
      <Navbar />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

const router = useRouter()
const showGlobalLoader = ref(false)
const displayedText = ref('')
const fullText = 'One Memoria'

const startLoader = () => {
  showGlobalLoader.value = true
  displayedText.value = ''
  
  // Effet de clavier sans curseur
  let currentIndex = 0
  const typeInterval = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayedText.value += fullText[currentIndex]
      currentIndex++
    } else {
      clearInterval(typeInterval)
    }
  }, 150)
  
  // Rediriger après 3 secondes
  setTimeout(() => {
    showGlobalLoader.value = false
    if (router.currentRoute.value.name === 'start') {
      router.push('/home')
    }
  }, 3000)
}

onMounted(() => {
  // Afficher le loader au démarrage
  startLoader()
})

// Écouter les changements de route
watch(() => router.currentRoute.value, (newRoute) => {
  if (newRoute.name === 'start') {
    startLoader()
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
