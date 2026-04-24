<template>
  <div :class="cardClass">
    <div v-if="$slots.header" class="p-6 border-b border-gris-clair dark:border-zinc-700">
      <slot name="header" />
    </div>
    
    <div :class="bodyClass">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="p-6 border-t border-gris-clair dark:border-zinc-700">
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
  const baseClass =
    'bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 border border-stone-200/80 dark:border-zinc-700/80'
  
  const variantClasses = {
    default: 'border border-gris-clair dark:border-zinc-700',
    elevated: 'shadow-soft hover:shadow-memorial dark:shadow-zinc-950/40',
    outlined: 'border-2 border-noir dark:border-zinc-500'
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
