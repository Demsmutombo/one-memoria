<template>
  <nav
    class="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/85"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between min-h-[3.5rem] sm:h-16">
        <!-- Logo -->
        <div class="flex min-w-0 flex-1 items-center pr-2">
          <router-link to="/" class="flex min-w-0 items-center gap-2">
            <img :src="logoImage" alt="One Memoria" class="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9">
            <span class="truncate font-serif text-lg text-noir dark:text-zinc-100 sm:text-xl">One Memoria</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/templates" 
            class="text-noir dark:text-zinc-200 hover:text-doré transition-colors duration-300"
          >
            Templates
          </router-link>
          <router-link 
            to="/services" 
            class="text-noir dark:text-zinc-200 hover:text-doré transition-colors duration-300"
          >
            Services
          </router-link>
          <router-link 
            to="/pricing" 
            class="text-noir dark:text-zinc-200 hover:text-doré transition-colors duration-300"
          >
            Tarifs
          </router-link>
          <router-link 
            to="/process" 
            class="text-noir dark:text-zinc-200 hover:text-doré transition-colors duration-300"
          >
            Processus
          </router-link>
          <router-link 
            to="/contact" 
            class="text-noir dark:text-zinc-200 hover:text-doré transition-colors duration-300"
          >
            Contact
          </router-link>
        </div>

        <!-- CTA (écarté du lien Contact) -->
        <div class="hidden items-center space-x-3 md:ml-10 md:flex lg:ml-14">
          <ThemeToggle />
          <Button variant="primary" @click="sendToWhatsApp">
            Contacter WhatsApp
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex shrink-0 items-center md:hidden">
          <button 
            type="button"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-nav"
            @click="toggleMobileMenu"
            class="-mr-1 rounded-lg p-2.5 text-noir transition-colors duration-300 hover:bg-stone-100 dark:text-zinc-200 dark:hover:bg-zinc-800 hover:text-doré"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav"
        class="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto overscroll-contain border-t border-gris-clair py-3 dark:border-zinc-800 md:hidden"
      >
        <div class="flex flex-col gap-1">
          <router-link 
            to="/templates" 
            class="rounded-lg px-1 py-3 text-base text-noir transition-colors duration-300 dark:text-zinc-200 hover:bg-stone-100 hover:text-doré dark:hover:bg-zinc-800"
            @click="closeMobileMenu"
          >
            Templates
          </router-link>
          <router-link 
            to="/services" 
            class="rounded-lg px-1 py-3 text-base text-noir transition-colors duration-300 dark:text-zinc-200 hover:bg-stone-100 hover:text-doré dark:hover:bg-zinc-800"
            @click="closeMobileMenu"
          >
            Services
          </router-link>
          <router-link 
            to="/pricing" 
            class="rounded-lg px-1 py-3 text-base text-noir transition-colors duration-300 dark:text-zinc-200 hover:bg-stone-100 hover:text-doré dark:hover:bg-zinc-800"
            @click="closeMobileMenu"
          >
            Tarifs
          </router-link>
          <router-link 
            to="/process" 
            class="rounded-lg px-1 py-3 text-base text-noir transition-colors duration-300 dark:text-zinc-200 hover:bg-stone-100 hover:text-doré dark:hover:bg-zinc-800"
            @click="closeMobileMenu"
          >
            Processus
          </router-link>
          <router-link 
            to="/contact" 
            class="rounded-lg px-1 py-3 text-base text-noir transition-colors duration-300 dark:text-zinc-200 hover:bg-stone-100 hover:text-doré dark:hover:bg-zinc-800"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>
          <div class="mt-5 border-t border-stone-200/80 pt-5 dark:border-zinc-800">
            <ThemeToggle />
          </div>
          <Button variant="primary" full-width @click="sendToWhatsApp">
            Contacter WhatsApp
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '@/assets/images/templates/logo (1).png'
import Button from '@/components/ui/Button.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { sendGeneralWhatsApp } from '@/services/whatsapp.js'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const sendToWhatsApp = () => {
  sendGeneralWhatsApp()
  closeMobileMenu()
}
</script>
