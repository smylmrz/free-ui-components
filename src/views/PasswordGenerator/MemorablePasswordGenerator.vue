<template>
  <GeneratedPassword>
    {{ generatedPassword }}
    <template #right>
      <Regenerate @click="generateMemorablePassword" :is-generating="isGenerating" />
    </template>
  </GeneratedPassword>

  <div class="flex flex-col bg-slate-100 p-5 rounded-md md:items-center md:flex-row justify-between gap-3 my-5">

    <Complexity v-model="capitalize">Capitalize</Complexity>

    <label class="flex gap-5 cursor-pointer">
      <span>Length</span>
      <input class="w-full" v-model="memorablePasswordLength" type="range" :min="memoMinLength" :max="memoMaxLength">
      <input class="w-12 text-center border rounded-md max-w-fit w-fit flex" v-model="memorablePasswordLength" type="number" :min="memoMinLength" :max="memoMaxLength">
    </label>
  </div>
</template>

<script setup lang="ts">
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import { watchEffect } from "vue";
import Regenerate from "./Regenerate.vue";
import GeneratedPassword from "./GeneratedPassword.vue";
import Complexity from "./Complexity.vue";

const {
  memorablePasswordLength,
  memoMinLength,
  memoMaxLength,
  generateMemorablePassword,
  generatedPassword,
  isGenerating,
  capitalize
} = usePasswordGenerator()

const emit = defineEmits<{ (e: 'generate', newPassword: string): void }>()

generateMemorablePassword()

watchEffect(() => {
  emit('generate', generatedPassword.value)
})
</script>