<template>
  <button 
    :class="buttonClass" 
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClass = computed(() => {
  const baseClass =
    'inline-flex min-h-[2.75rem] items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-doré/60 focus:ring-offset-2 active:scale-[0.98] dark:focus:ring-offset-zinc-950'
  
  const variantClasses = {
    primary: 'bg-doré text-noir hover:bg-doré-foncé shadow-soft hover:shadow-memorial',
    secondary: 'bg-noir text-blanc hover:bg-gray-800 dark:hover:bg-zinc-700 shadow-sm',
    outline: 'border border-noir dark:border-zinc-400 text-noir dark:text-zinc-100 hover:bg-noir hover:text-blanc dark:hover:bg-zinc-100 dark:hover:text-noir shadow-sm',
    ghost: 'text-noir dark:text-zinc-200 hover:bg-gris-clair dark:hover:bg-zinc-800'
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return [
    baseClass,
    variantClasses[props.variant],
    sizeClasses[props.size],
    widthClass,
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ].join(' ')
})
</script>
