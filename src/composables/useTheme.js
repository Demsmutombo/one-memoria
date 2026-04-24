import { ref, computed } from 'vue'

const theme = ref('light')

function applyToDocument(value) {
  document.documentElement.classList.toggle('dark', value === 'dark')
}

function persist(value) {
  try {
    localStorage.setItem('theme', value)
  } catch (_) {
    /* ignore */
  }
}

export function initTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      theme.value = saved
      applyToDocument(saved)
      return
    }
  } catch (_) {
    /* ignore */
  }
  theme.value = 'light'
  applyToDocument('light')
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (mode) => {
    if (mode !== 'light' && mode !== 'dark') return
    theme.value = mode
    persist(mode)
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
