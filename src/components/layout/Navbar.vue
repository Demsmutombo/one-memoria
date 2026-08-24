<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-[90] transition-colors duration-300',
      mobileMenuOpen
        ? 'bg-ivoire dark:bg-zinc-950'
        : scrolled
          ? 'border-b border-noir/5 bg-ivoire/88 dark:border-white/10 dark:bg-zinc-950/88'
          : overDarkHero
            ? 'bg-gradient-to-b from-[#070605]/90 to-transparent'
            : 'bg-transparent'
    ]"
  >
    <div class="container-custom">
      <div class="flex min-h-[4.25rem] items-center gap-3 sm:min-h-[4.75rem]">
        <router-link
          to="/home"
          class="flex min-w-0 flex-1 items-center gap-2.5"
          aria-label="One Memoria — Accueil"
          @click="closeMobileMenu"
        >
          <img :src="logoImage" alt="" class="h-8 w-auto shrink-0 object-contain sm:h-9">
          <span
            :class="[
              'truncate font-serif text-lg sm:text-2xl',
              overDarkHero && !mobileMenuOpen ? 'text-blanc' : 'text-noir dark:text-zinc-100'
            ]"
          >
            One Memoria
          </span>
        </router-link>

        <div class="hidden items-center gap-8 lg:flex">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :class="overDarkHero ? 'nav-link nav-link-light' : 'nav-link'"
          >
            {{ item.label }}
          </router-link>
        </div>

        <div class="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            :variant="overDarkHero ? 'outline' : 'primary'"
            :class="overDarkHero ? '!border-doré !text-blanc hover:!bg-doré hover:!text-noir' : ''"
            @click="createSpace"
          >
            Créer mon espace
          </Button>
        </div>

        <div class="flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-nav"
            :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-doré text-noir"
            @click="toggleMobileMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
              <path v-else stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <Teleport to="body">
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <button
        type="button"
        class="fixed inset-0 z-[80] bg-noir/35"
        aria-label="Fermer le menu"
        @click="closeMobileMenu"
      />
      <div
        id="mobile-nav"
        class="fixed inset-x-4 top-[4.75rem] z-[85] rounded-2xl border border-noir/10 bg-[#fffcf7] p-3 shadow-memorial dark:border-white/10 dark:bg-zinc-900 sm:inset-x-6"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <nav class="flex flex-col" aria-label="Menu mobile">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-3 py-3 font-sans text-base font-semibold !text-[#0e0c0a] dark:!text-white"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
        <Button variant="primary" full-width class="mt-2" @click="createSpace">
          Créer mon espace
        </Button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logoImage from '@/assets/images/templates/logo-nav.png'
import Button from '@/components/ui/Button.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { sendCreateSpaceWhatsApp } from '@/services/whatsapp.js'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { to: '/templates', label: 'Réalisations' },
  { to: '/services', label: 'Expériences' },
  { to: '/pricing', label: 'Tarifs' },
  { to: '/process', label: 'Processus' },
  { to: '/contact', label: 'Contact' }
]

const overDarkHero = computed(() =>
  route.path === '/home' && !scrolled.value && !mobileMenuOpen.value
)

const onScroll = () => {
  scrolled.value = window.scrollY > 16
}

watch(() => route.fullPath, () => { mobileMenuOpen.value = false })
watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})

const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }
const createSpace = () => {
  sendCreateSpaceWhatsApp()
  closeMobileMenu()
}
</script>
