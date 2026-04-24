<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-noir px-4 py-12 transition-colors duration-300"
  >
    <div
      class="relative flex h-80 w-80 max-h-[92vmin] max-w-[92vmin] shrink-0 items-center justify-center sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="h-72 w-72 rounded-full border-4 border-doré/20 sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem]"
        ></div>
        <div
          class="absolute h-72 w-72 animate-spin rounded-full border-4 border-doré border-t-transparent sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem]"
        ></div>
        <div class="absolute h-60 w-60 rounded-full border-4 border-doré/10 sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-96 lg:w-96"></div>
        <div
          class="absolute h-60 w-60 animate-spin rounded-full border-4 border-doré/30 border-b-transparent sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-96 lg:w-96"
          style="animation-direction: reverse; animation-duration: 2s;"
        ></div>
      </div>
      <img
        :key="splashKey"
        :src="logoImage"
        alt="One Memoria"
        class="logo-intro-zoom relative z-10 h-52 w-52 max-h-[75vmin] max-w-[75vmin] object-contain sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@/assets/images/templates/logo (1).png'

const router = useRouter()
const splashKey = ref(0)

const scheduleRedirect = () => {
  setTimeout(() => {
    router.push('/home')
  }, 3000)
}

onMounted(() => {
  splashKey.value += 1
  scheduleRedirect()
})

watch(
  () => router.currentRoute.value.name,
  (name) => {
    if (name === 'start') {
      splashKey.value += 1
      scheduleRedirect()
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
