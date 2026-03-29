<template>
  <nav class="bg-blanc border-b border-gris-clair sticky top-0 z-50 transition-colors duration-200">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <img :src="logoImage" alt="One Memoria" class="w-8 h-8 object-contain">
            <span class="text-xl font-serif text-noir">One Memoria</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/templates" 
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            Templates
          </router-link>
          <router-link 
            to="/services" 
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            Services
          </router-link>
          <router-link 
            to="/pricing" 
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            Tarifs
          </router-link>
          <router-link 
            to="/process" 
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            Processus
          </router-link>
          <router-link 
            to="/contact" 
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            Contact
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <Button variant="primary" @click="sendToWhatsApp">
            Contacter WhatsApp
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMobileMenu"
            class="text-noir hover:text-doré transition-colors duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gris-clair">
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/templates" 
            class="text-noir hover:text-doré transition-colors duration-300"
            @click="closeMobileMenu"
          >
            Templates
          </router-link>
          <router-link 
            to="/services" 
            class="text-noir hover:text-doré transition-colors duration-300"
            @click="closeMobileMenu"
          >
            Services
          </router-link>
          <router-link 
            to="/pricing" 
            class="text-noir hover:text-doré transition-colors duration-300"
            @click="closeMobileMenu"
          >
            Tarifs
          </router-link>
          <router-link 
            to="/process" 
            class="text-noir hover:text-doré transition-colors duration-300"
            @click="closeMobileMenu"
          >
            Processus
          </router-link>
          <router-link 
            to="/contact" 
            class="text-noir hover:text-doré transition-colors duration-300"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>
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
import { useRouter } from 'vue-router'
import logoImage from '@/assets/images/templates/logo (1).png'
import Button from '@/components/ui/Button.vue'
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
