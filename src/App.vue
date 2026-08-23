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
      <div class="splash-glow" aria-hidden="true" />
      <div class="splash-content">
        <img
          :key="splashKey"
          :src="logoImage"
          alt=""
          class="splash-logo"
        >
        <p class="splash-name">One Memoria</p>
        <span class="splash-line" aria-hidden="true" />
      </div>
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
    }, 700)
  }, 2400)
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
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.splash-screen.is-leaving {
  opacity: 0;
}

.splash-glow {
  position: absolute;
  width: 22rem;
  height: 22rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(184, 148, 74, 0.16) 0%, rgba(184, 148, 74, 0) 68%);
  pointer-events: none;
}

.splash-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.splash-logo {
  height: 5.75rem;
  width: 5.75rem;
  object-fit: contain;
  animation: splash-mark 1.15s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.splash-name {
  margin-top: 1.35rem;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #f4f0e8;
  animation: splash-text 1s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.splash-line {
  display: block;
  width: 2.5rem;
  height: 1px;
  margin-top: 1rem;
  background: #b8944a;
  transform-origin: center;
  animation: splash-line 0.8s 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes splash-mark {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes splash-text {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes splash-line {
  from {
    opacity: 0;
    transform: scaleX(0.3);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (min-width: 640px) {
  .splash-logo {
    height: 6.5rem;
    width: 6.5rem;
  }
  .splash-name {
    font-size: 2.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .splash-screen {
    transition: none;
  }
  .splash-logo,
  .splash-name,
  .splash-line {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
