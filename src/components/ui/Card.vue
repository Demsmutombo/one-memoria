<template>
  <div :class="cardClass">
    <div v-if="$slots.header" class="p-6 border-b border-gris-clair">
      <slot name="header" />
    </div>
    
    <div :class="bodyClass">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="p-6 border-t border-gris-clair">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated', 'outlined'].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
  },
  hover: {
    type: Boolean,
    default: false
  }
})

const cardClass = computed(() => {
  const baseClass = 'bg-blanc rounded-lg overflow-hidden transition-all duration-300'
  
  const variantClasses = {
    default: 'border border-gris-clair',
    elevated: 'shadow-lg',
    outlined: 'border-2 border-noir'
  }
  
  const hoverClass = props.hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  
  return [
    baseClass,
    variantClasses[props.variant],
    hoverClass
  ].join(' ')
})

const bodyClass = computed(() => {
  const paddingClasses = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8'
  }
  
  return paddingClasses[props.padding]
})
</script>
