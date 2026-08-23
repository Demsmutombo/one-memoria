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
  const baseClass = 'inline-flex items-center rounded-full font-medium tracking-wide'

  const variantClasses = {
    default: 'bg-gris-clair text-noir dark:bg-zinc-800 dark:text-zinc-100',
    primary: 'bg-noir text-blanc',
    secondary: 'bg-noir text-blanc',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    gold: 'bg-doré text-noir'
  }

  const sizeClasses = {
    small: 'px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.14em]',
    medium: 'px-3 py-1 text-xs uppercase tracking-[0.14em]',
    large: 'px-3.5 py-1.5 text-xs uppercase tracking-[0.14em]'
  }

  return [baseClass, variantClasses[props.variant], sizeClasses[props.size]].join(' ')
})
</script>
