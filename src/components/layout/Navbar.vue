<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-500',
      scrolled || mobileMenuOpen
        ? 'border-b border-noir/5 bg-ivoire/88 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/88'
        : overDarkHero
          ? 'bg-gradient-to-b from-[#070605]/90 to-transparent'
          : 'bg-transparent'
    ]"
  >
    <div class="container-custom">
      <div class="flex min-h-[4.25rem] items-center justify-between sm:min-h-[4.75rem]">
        <router-link
          to="/home"
          class="inline-flex min-w-0 items-center gap-2.5"
          aria-label="One Memoria — Accueil"
          @click="closeMobileMenu"
        >
          <img :src="logoImage" alt="" class="h-8 w-auto shrink-0 object-contain sm:h-9">
          <span
            :class="[
              'truncate font-serif text-xl sm:text-2xl',
              overDarkHero ? 'text-blanc' : 'text-noir dark:text-zinc-100'
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

        <div class="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            :variant="overDarkHero ? 'outline' : 'primary'"
            :class="overDarkHero ? '!border-doré !text-blanc hover:!bg-doré hover:!text-noir' : ''"
            @click="createSpace"
          >
            Créer mon espace
          </Button>
        </div>

        <div class="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-nav"
            :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            :class="[
              'rounded-full p-2.5 hover:bg-noir/5 dark:hover:bg-white/10',
              overDarkHero ? 'text-blanc' : 'text-noir dark:text-zinc-100'
            ]"
            @click="toggleMobileMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M4 7h16M4 12h16M4 17h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="mobileMenuOpen"
      id="mobile-nav"
      class="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-ivoire px-6 py-8 dark:bg-zinc-950 lg:hidden"
    >
      <div class="flex min-h-full flex-col justify-between pb-8">
        <div class="flex flex-col gap-2">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="border-b border-noir/10 py-4 font-serif text-3xl text-noir dark:border-white/10 dark:text-zinc-100"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </div>
        <Button variant="primary" full-width size="large" class="mt-10" @click="createSpace">
          Créer mon espace
        </Button>
      </div>
    </div>
  </nav>
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
watch(mobileMenuOpen, (open) => { document.body.style.overflow = open ? 'hidden' : '' })

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
