<template>
  <div class="relative w-full overflow-hidden">
    <!-- Carousel Container -->
    <div 
      class="flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="w-full flex-shrink-0"
      >
        <slot :slide="slide" :index="index" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      v-if="false"
      @click="previous"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-noir/50 hover:bg-noir/70 text-blanc p-2 rounded-full transition-colors duration-200 z-10"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      v-if="false"
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-noir/50 hover:bg-noir/70 text-blanc p-2 rounded-full transition-colors duration-200 z-10"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div 
      v-if="false"
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-colors duration-200"
        :class="index === currentIndex ? 'bg-doré' : 'bg-blanc/50'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 4000
  },
  showIndicators: {
    type: Boolean,
    default: true
  }
})

const currentIndex = ref(0)
let autoplayInterval = null

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

const previous = () => {
  currentIndex.value = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && props.slides.length > 1) {
    autoplayInterval = setInterval(next, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>
