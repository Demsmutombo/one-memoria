import { ref, computed } from 'vue'

const theme = ref('light')

function applyToDocument(value) {
  document.documentElement.classList.toggle('dark', value === 'dark')
}

export function initTheme() {
  theme.value = 'light'
  applyToDocument('light')
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (mode) => {
    if (mode !== 'light' && mode !== 'dark') return
    theme.value = mode
    applyToDocument(mode)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme
  }
}
