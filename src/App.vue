<template>
  <div id="app" class="min-h-screen bg-ivoire dark:bg-zinc-950 text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Loader global -->
    <div v-if="showGlobalLoader" class="fixed inset-0 z-50 flex flex-col items-center justify-between bg-ivoire px-4 py-10 sm:py-16 dark:bg-zinc-950">
      <!-- Logo en haut -->
      <div class="flex flex-1 items-center justify-center">
        <img 
          :src="logoImage" 
          alt="One Memoria" 
          class="h-52 w-52 object-contain sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
        >
      </div>
      
      <!-- Texte One Memoria en bas avec effet clavier -->
      <div class="flex flex-1 items-center justify-center pb-[max(1rem,env(safe-area-inset-bottom))]">
        <h1 class="font-serif text-2xl text-noir dark:text-zinc-100 sm:text-3xl md:text-4xl">
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
import logoImage from '@/assets/images/templates/logo (1).png'

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
