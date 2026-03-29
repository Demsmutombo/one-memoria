<template>
  <section :class="sectionClass">
    <div class="container-custom">
      <div v-if="$slots.header" class="text-center mb-12">
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
    validator: (value) => ['default', 'light', 'dark'].includes(value)
  },
  contentCentered: {
    type: Boolean,
    default: false
  }
})

const sectionClass = computed(() => {
  const paddingClasses = {
    none: '',
    small: 'py-8',
    normal: 'py-16 lg:py-24',
    large: 'py-24 lg:py-32'
  }
  
  const backgroundClasses = {
    default: 'bg-blanc',
    light: 'bg-gris-clair',
    dark: 'bg-noir text-blanc'
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
