<template>
  <section :class="sectionClass">
    <div class="container-custom">
      <div v-if="$slots.header" class="mb-8 text-center sm:mb-10 md:mb-12">
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
    normal: 'py-12 sm:py-16 lg:py-24',
    large: 'py-16 sm:py-20 lg:py-28 xl:py-32'
  }
  
  const backgroundClasses = {
    default: 'bg-ivoire dark:bg-zinc-950',
    light: 'bg-stone-100/90 dark:bg-zinc-900',
    dark: 'bg-noir text-blanc',
    hero: 'bg-memorial-mesh dark:bg-zinc-950'
  }
  
  return [
    paddingClasses[props.padding],
    backgroundClasses[props.background]
  ].join(' ')
})

const contentClass = computed(() => {
  return props.contentCentered ? 'text-center' : ''
})
</script>
