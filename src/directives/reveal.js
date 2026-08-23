const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -8% 0px'
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const reveal = {
  mounted(el, binding) {
    const delay = binding.value?.delay || 0
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (prefersReducedMotion()) {
      el.classList.add('is-revealed')
      return
    }

    el.classList.add('reveal')

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-revealed')
        io.disconnect()
      }
    }, observerOptions)

    io.observe(el)
    el._revealObserver = io
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  }
}

export function registerReveal(app) {
  app.directive('reveal', reveal)
}
