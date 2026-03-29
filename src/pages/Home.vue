<template>
  <div class="bg-blanc text-noir">
    <Hero />
    <Importance />
    <Services />
    <TemplatesPreview />
    <PricingPreview />
    <Process />
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
import CTA from '@/components/sections/CTA.vue'
</script>
