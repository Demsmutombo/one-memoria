<template>
  <div id="app" class="min-h-screen bg-ivoire dark:bg-zinc-950 text-noir dark:text-zinc-100 transition-colors duration-300">
    <!-- Loader global : fond noir, logo seul avec zoom d’ouverture -->
    <div
      v-if="showGlobalLoader"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]"
    >
      <img
        :key="splashKey"
        :src="logoImage"
        alt="One Memoria"
        class="logo-intro-zoom h-56 w-56 max-h-[90vmin] max-w-[90vmin] object-contain sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[26rem] lg:w-[26rem] xl:h-[30rem] xl:w-[30rem]"
      >
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
const splashKey = ref(0)

const startLoader = () => {
  showGlobalLoader.value = true
  splashKey.value += 1

  setTimeout(() => {
    showGlobalLoader.value = false
    if (router.currentRoute.value.name === 'start') {
      router.push('/home')
    }
  }, 3000)
}

onMounted(() => {
  startLoader()
})

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    if (newRoute.name === 'start') {
      startLoader()
    }
  }
)
</script>

<style scoped>
@keyframes logo-zoom-open {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.logo-intro-zoom {
  animation: logo-zoom-open 1.1s cubic-bezier(0.34, 1.35, 0.64, 1) both;
}
</style>
