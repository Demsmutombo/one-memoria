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
  const baseClass = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-doré focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-doré text-noir hover:bg-yellow-500 shadow-sm',
    secondary: 'bg-noir text-blanc hover:bg-gray-800 shadow-sm',
    outline: 'border border-noir text-noir hover:bg-noir hover:text-blanc shadow-sm',
    ghost: 'text-noir hover:bg-gris-clair'
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
