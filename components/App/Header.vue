
<script setup lang="ts">
const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-map',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>
<template>
    <UHeader :links="links">
    <template #logo>
Skillify
    </template>

    <template #right>
      <UColorModeButton />

      <UButton icon="i-simple-icons-github" to="https://github.com/nuxt/nuxt" target="_blank" color="gray" variant="ghost" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>
