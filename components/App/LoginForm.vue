<script setup lang="ts">


</script>

<template>
  <UAuthForm
    title="Login"
    description="Enter your credentials to access your account."
    align="bottom"
    icon="i-heroicons-user-circle"    
    :providers="[{ label: 'GitHub', icon: 'i-simple-icons-github', color: 'gray', to: 'auth/github'}]"
    :loading="false"
  />

  <NuxtLink to="/auth/github">Login with GitHub</NuxtLink>
</template>
