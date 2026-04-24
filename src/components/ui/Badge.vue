<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'success', 'warning', 'gold'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const badgeClass = computed(() => {
  const baseClass = 'inline-flex items-center font-weight-500 rounded-full'
  
  const variantClasses = {
    default: 'bg-gris-clair dark:bg-zinc-800 text-noir dark:text-zinc-100',
    primary: 'bg-doré text-noir',
    secondary: 'bg-noir text-blanc dark:bg-zinc-800 dark:text-zinc-100',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-noir'
  }
  
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  }
  
  return [
    baseClass,
    variantClasses[props.variant],
    sizeClasses[props.size]
  ].join(' ')
})
</script>
