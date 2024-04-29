<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  name: z.string().min(3,'Invalid name'),
})

type Schema = z.output<typeof schema>

const state = reactive({
  name: undefined,
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  await $fetch('/api/projects/create', {
    method: 'POST',
    body: JSON.stringify(event.data),
  })
}
</script>

<template>
 <UContainer>
 <UPageHeader title="Create new project" />
  
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UButton type="submit">
      Create
    </UButton>
  </UForm>

 </UContainer>
</template>

