<template>
  <div :class="cardClass">
    <div v-if="$slots.header" class="border-b border-gris-clair p-6 dark:border-zinc-700">
      <slot name="header" />
    </div>

    <div :class="bodyClass">
      <slot />
    </div>

    <div v-if="$slots.footer" class="border-t border-gris-clair p-6 dark:border-zinc-700">
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
    'overflow-hidden rounded-[1.5rem] bg-white transition-all duration-500 dark:bg-zinc-900 border border-black/5 dark:border-zinc-700/80'

  const variantClasses = {
    default: '',
    elevated: 'shadow-soft dark:shadow-zinc-950/40',
    outlined: 'border-noir/20 dark:border-zinc-500'
  }

  const hoverClass = props.hover ? 'hover:-translate-y-1 hover:shadow-memorial hover:border-doré/30' : ''

  return [baseClass, variantClasses[props.variant], hoverClass].join(' ')
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
