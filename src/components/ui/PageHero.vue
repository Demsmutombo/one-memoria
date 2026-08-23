<template>
  <header class="bg-ivoire dark:bg-zinc-950">
    <div class="container-custom pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <p v-if="kicker" class="kicker mb-5">{{ kicker }}</p>
      <h1 class="heading-memorial max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="$slots.default || subtitle" class="mt-6 max-w-xl text-base leading-relaxed text-gris sm:text-lg">
        <slot>{{ subtitle }}</slot>
      </p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  kicker: String,
  title: String,
  subtitle: String,
  image: String
})
</script>
