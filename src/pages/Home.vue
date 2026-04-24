<template>
  <div class="bg-ivoire dark:bg-zinc-950 text-noir dark:text-zinc-100 transition-colors duration-300">
    <Hero />
    <Importance />
    <Services />
    <TemplatesPreview />
    <PricingPreview />
    <Process />
    <Testimonials />
    <CTA />
  </div>
</template>

<script setup>
import Hero from '@/components/sections/Hero.vue'
import Importance from '@/components/sections/Importance.vue'
import Services from '@/components/sections/Services.vue'
import TemplatesPreview from '@/components/sections/TemplatesPreview.vue'
import PricingPreview from '@/components/sections/PricingPreview.vue'
import Process from '@/components/sections/Process.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import CTA from '@/components/sections/CTA.vue'
</script>
