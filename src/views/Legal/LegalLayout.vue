<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <main class="legal-page">
    <RouterLink class="legal-page__back" to="/">cnotv.xyz</RouterLink>
    <h1>{{ title }}</h1>
    <slot />
  </main>
</template>

<style scoped>
.legal-page {
  max-width: 42rem;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-12);
  color: var(--color-foreground);
  line-height: 1.6;
}

.legal-page__back {
  color: var(--color-canvas-overlay-accent);
  font-size: var(--font-size-xs);
}
</style>
