<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession()
</script>

<template>
  <UContainer class="p-10">
    <UMain>
      <AppHome v-if="loggedIn" />
      <div v-else>
        Please login to access the content
      </div>
    </UMain>
  </UContainer>
</template>


<style scoped>

</style>
