<template>
  <div class="bg-ivoire text-noir transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
    <Hero />
    <Services />
    <Why />
    <Process />
    <TemplatesPreview />
    <Importance />
    <PricingPreview />
    <Testimonials />
    <Trust />
    <CTA />
  </div>
</template>

<script setup>
import Hero from '@/components/sections/Hero.vue'
import Services from '@/components/sections/Services.vue'
import Why from '@/components/sections/Why.vue'
import Process from '@/components/sections/Process.vue'
import TemplatesPreview from '@/components/sections/TemplatesPreview.vue'
import Importance from '@/components/sections/Importance.vue'
import PricingPreview from '@/components/sections/PricingPreview.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import Trust from '@/components/sections/Trust.vue'
import CTA from '@/components/sections/CTA.vue'
</script>
