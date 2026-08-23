<template>
  <section :class="sectionClass">
    <div class="container-custom">
      <div v-if="$slots.header" class="mb-12 max-w-2xl sm:mb-14 md:mb-16" v-reveal>
        <slot name="header" />
      </div>

      <div :class="contentClass">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
  },
  background: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'light', 'dark', 'hero'].includes(value)
  },
  contentCentered: {
    type: Boolean,
    default: false
  }
})

const sectionClass = computed(() => {
  const paddingClasses = {
    none: '',
    small: 'py-10 sm:py-12',
    normal: 'py-16 sm:py-20 lg:py-24',
    large: 'py-20 sm:py-24 lg:py-28'
  }

  const backgroundClasses = {
    default: 'bg-ivoire text-noir dark:bg-zinc-950 dark:text-zinc-100',
    light: 'bg-white text-noir dark:bg-zinc-900 dark:text-zinc-100',
    dark: 'bg-noir text-blanc',
    hero: 'bg-ivoire text-noir dark:bg-zinc-950 dark:text-zinc-100'
  }

  return [paddingClasses[props.padding], backgroundClasses[props.background]].join(' ')
})

const contentClass = computed(() => {
  return props.contentCentered ? 'text-center' : ''
})
</script>
