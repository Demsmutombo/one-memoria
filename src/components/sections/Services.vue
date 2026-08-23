<template>
  <Section padding="large">
    <template #header>
      <p class="kicker mb-4">Expériences</p>
      <h2 class="heading-memorial text-3xl md:text-5xl">Ce que nous donnons à vivre</h2>
    </template>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
      <article
        v-for="(activity, index) in activities"
        :key="activity.key"
        :class="cardClass(index)"
        class="group relative min-h-[22rem] cursor-pointer overflow-hidden rounded-[1.4rem] bg-noir"
        v-reveal="{ delay: index * 50 }"
        role="link"
        tabindex="0"
        :aria-label="activity.title"
        @click="openActivity(activity)"
        @keydown.enter="openActivity(activity)"
      >
        <img
          v-if="activity.category && categoryImages[activity.category]"
          :src="categoryImages[activity.category]"
          :alt="activity.title"
          class="img-editorial absolute inset-0 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-noir/10" />
        <div class="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
          <div class="flex items-center justify-between text-blanc/70">
            <span class="text-xs tracking-[0.18em]">0{{ index + 1 }}</span>
            <span class="text-xs uppercase tracking-[0.16em] text-doré">{{ activity.kicker }}</span>
          </div>
          <div>
            <h3 class="font-serif text-3xl text-blanc md:text-4xl">{{ activity.title }}</h3>
            <p class="mt-3 max-w-md text-sm leading-relaxed text-blanc/70">{{ activity.description }}</p>
            <div class="mt-5 flex items-center justify-between text-sm text-blanc">
              <span>{{ activity.price?.label || 'Nous en parler' }}</span>
              <span class="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Découvrir →
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import { activities } from '@/data/services.js'
import { categoryImages } from '@/utils/templateMedia.js'
import { sendServiceWhatsApp } from '@/services/whatsapp.js'

const router = useRouter()

const cardClass = (index) => {
  if (index === 0) return 'lg:col-span-7 min-h-[26rem]'
  if (index === 1) return 'lg:col-span-5 min-h-[26rem]'
  return 'lg:col-span-4'
}

const openActivity = (activity) => {
  if (activity.href) {
    router.push(activity.href)
    return
  }
  sendServiceWhatsApp(activity.title)
}
</script>
