<template>
  <div
    class="inline-flex rounded-lg border border-stone-200/90 bg-stone-100/80 p-0.5 dark:border-zinc-700 dark:bg-zinc-900/80"
    role="group"
    aria-label="Thème d’affichage"
  >
    <button
      type="button"
      class="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:px-3 sm:text-sm"
      :class="
        !isDark
          ? 'bg-white text-noir shadow-sm dark:bg-zinc-800 dark:text-zinc-100'
          : 'text-gris hover:text-noir dark:text-zinc-400 dark:hover:text-zinc-200'
      "
      :aria-pressed="!isDark"
      @click="setTheme('light')"
    >
      Clair
    </button>
    <button
      type="button"
      class="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 sm:px-3 sm:text-sm"
      :class="
        isDark
          ? 'bg-zinc-800 text-zinc-100 shadow-sm ring-1 ring-zinc-600'
          : 'text-gris hover:text-noir dark:text-zinc-400 dark:hover:text-zinc-200'
      "
      :aria-pressed="isDark"
      @click="setTheme('dark')"
    >
      Sombre
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, setTheme } = useTheme()
</script>
