<template>
  <div v-if="isLoading" class="fixed inset-0 bg-ivoire dark:bg-zinc-950 z-50 flex items-center justify-center">
    <div class="text-center">
      <!-- Logo en très très grand -->
      <img 
        :src="logoImage" 
        alt="One Memoria" 
        class="w-96 h-96 mx-auto object-contain"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@/assets/images/templates/logo (1).png'

const router = useRouter()
const isLoading = ref(true)

onMounted(() => {
  // Simuler le chargement initial
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // 3 secondes de chargement
})

// Écouter les changements de route pour afficher le loader
router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // 3 secondes lors de la navigation
})
</script>
