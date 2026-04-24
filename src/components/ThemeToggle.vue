<template>
  <button
    type="button"
    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-gradient-to-b from-white to-stone-100 text-noir shadow-sm transition-all duration-300 hover:border-doré/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-doré focus-visible:ring-offset-2 dark:border-doré/25 dark:from-zinc-800 dark:to-zinc-900 dark:text-doré dark:shadow-[inset_0_1px_0_0_rgba(212,175,55,0.08)] dark:ring-offset-zinc-950 dark:hover:border-doré/50 dark:hover:shadow-[0_0_16px_-4px_rgba(212,175,55,0.25)]"
    :aria-label="isDark ? 'Passer au thème clair' : 'Passer au thème sombre'"
    @click="toggleTheme"
  >
    <!-- Lune : affichée en mode clair → clic active le sombre -->
    <svg
      v-if="!isDark"
      class="h-[1.125rem] w-[1.125rem]"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <!-- Soleil : affiché en mode sombre → clic active le clair -->
    <svg
      v-else
      class="h-[1.125rem] w-[1.125rem]"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
