<script lang="ts" setup>
  const { data } = useFetch('/api/projects/get')
</script>
<template>
  <div>
    <pre>
    {{ data }}
  </pre>
  </div>
</template>


<style>

</style>
