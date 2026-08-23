<template>
  <button
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    @click="$emit('click', $event)"
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
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'light'].includes(value)
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
  },
  type: {
    type: String,
    default: 'button'
  }
})

defineEmits(['click'])

const buttonClass = computed(() => {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-doré/70 focus-visible:ring-offset-2 active:scale-[0.98] dark:focus-visible:ring-offset-zinc-950'

  const variantClasses = {
    primary: 'bg-noir text-blanc hover:bg-doré hover:text-noir',
    secondary: 'bg-doré text-noir hover:bg-doré-foncé',
    outline: 'border border-noir/20 text-noir hover:border-noir hover:bg-noir hover:text-blanc dark:border-white/25 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-noir',
    ghost: 'text-noir hover:text-doré dark:text-zinc-200',
    light: 'bg-blanc text-noir hover:bg-gris-clair'
  }

  const sizeClasses = {
    small: 'min-h-[2.35rem] px-4 text-sm',
    medium: 'min-h-[2.75rem] px-5 text-[0.94rem]',
    large: 'min-h-[3.2rem] px-7 text-base'
  }

  return [
    baseClass,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.fullWidth ? 'w-full' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ].join(' ')
})
</script>
