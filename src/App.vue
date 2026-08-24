<template>
  <div id="app" class="min-h-screen bg-ivoire text-noir transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
    <div
      v-if="showGlobalLoader"
      class="splash-screen"
      :class="{ 'is-leaving': splashLeaving }"
      role="status"
      aria-live="polite"
      aria-label="One Memoria"
    >
      <img
        :key="splashKey"
        :src="logoImage"
        alt="One Memoria"
        class="splash-logo"
      >
    </div>

    <div v-show="!showGlobalLoader">
      <a
        href="#contenu"
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-doré focus:px-4 focus:py-2 focus:text-noir"
      >
        Aller au contenu
      </a>
      <Navbar v-if="route.name !== 'start'" />
      <main id="contenu">
        <router-view />
      </main>
      <Footer v-if="route.name !== 'start'" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import logoImage from '@/assets/images/templates/logo (1).png'

const router = useRouter()
const route = useRoute()
const showGlobalLoader = ref(false)
const splashLeaving = ref(false)
const splashKey = ref(0)
let holdTimer
let hideTimer

const clearSplashTimers = () => {
  clearTimeout(holdTimer)
  clearTimeout(hideTimer)
}

const startLoader = () => {
  clearSplashTimers()
  splashLeaving.value = false
  showGlobalLoader.value = true
  splashKey.value += 1

  holdTimer = setTimeout(() => {
    splashLeaving.value = true
    hideTimer = setTimeout(() => {
      showGlobalLoader.value = false
      splashLeaving.value = false
      if (router.currentRoute.value.name === 'start') {
        router.push('/home')
      }
    }, 800)
  }, 2800)
}

onMounted(() => {
  startLoader()
})

onUnmounted(() => {
  clearSplashTimers()
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
.splash-screen {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #070605;
  padding:
    max(1.5rem, env(safe-area-inset-top))
    max(1.25rem, env(safe-area-inset-right))
    max(1.5rem, env(safe-area-inset-bottom))
    max(1.25rem, env(safe-area-inset-left));
  opacity: 1;
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.splash-screen.is-leaving {
  opacity: 0;
}

.splash-screen.is-leaving .splash-logo {
  animation: none;
  transform: scale(0.9);
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.splash-logo {
  width: min(20rem, 72vw);
  height: min(20rem, 72vw);
  object-fit: contain;
  animation: splash-zoom 2.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes splash-zoom {
  0% {
    opacity: 0;
    transform: scale(0.78);
  }
  22% {
    opacity: 1;
    transform: scale(1.08);
  }
  58% {
    opacity: 1;
    transform: scale(1.14);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (min-width: 640px) {
  .splash-logo {
    width: min(24rem, 42vw);
    height: min(24rem, 42vw);
  }
}

@media (min-width: 1024px) {
  .splash-logo {
    width: 26rem;
    height: 26rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .splash-screen {
    transition: none;
  }
  .splash-logo {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
