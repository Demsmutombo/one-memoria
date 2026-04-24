<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-noir px-4 py-12 transition-colors duration-300"
  >
    <div class="flex max-w-lg flex-col items-center gap-4 text-center sm:gap-5 md:gap-6">
      <!-- Logo et cercles (tailles contenues dans le carré) -->
      <div class="relative flex h-64 w-64 shrink-0 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="h-56 w-56 rounded-full border-4 border-doré/20 sm:h-[15rem] sm:w-[15rem] md:h-[17rem] md:w-[17rem]"></div>
          <div
            class="absolute h-56 w-56 animate-spin rounded-full border-4 border-doré border-t-transparent sm:h-[15rem] sm:w-[15rem] md:h-[17rem] md:w-[17rem]"
          ></div>
          <div class="absolute h-48 w-48 rounded-full border-4 border-doré/10 sm:h-52 sm:w-52 md:h-56 md:w-56"></div>
          <div
            class="absolute h-48 w-48 animate-spin rounded-full border-4 border-doré/30 border-b-transparent sm:h-52 sm:w-52 md:h-56 md:w-56"
            style="animation-direction: reverse; animation-duration: 2s;"
          ></div>
        </div>
        <img
          :src="logoImage"
          alt="One Memoria"
          class="relative z-10 h-36 w-36 object-contain sm:h-44 sm:w-44 md:h-48 md:w-48"
        >
      </div>

      <h1 class="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">
        <span class="inline-block">{{ displayedText }}</span>
        <span
          v-if="showCursor"
          class="ml-1 inline-block h-8 w-0.5 animate-pulse bg-doré"
        ></span>
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
