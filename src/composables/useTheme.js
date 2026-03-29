import { ref, watch } from 'vue'

export function useTheme() {
  const theme = ref('light')
  const isDark = ref(false)

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value)
    updateTheme()
  }

  const updateTheme = () => {
    isDark.value = theme.value === 'dark'
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      theme.value = 'light'
    }
    updateTheme()
  }

  watch(theme, updateTheme, { immediate: true })

  return {
    theme,
    isDark,
    toggleTheme,
    initTheme
  }
}
