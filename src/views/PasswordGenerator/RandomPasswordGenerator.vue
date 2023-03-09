<template>
  <GeneratedPassword>
    {{ generatedPassword }}
    <template #right>
      <Regenerate @click="generateRandomPassword" :is-generating="isGenerating" />
    </template>
  </GeneratedPassword>

  <div class="flex flex-col bg-slate-100 p-5 rounded-md md:items-center md:flex-row justify-between gap-3 my-5">
    <Complexity v-model="includeUppercase">Uppercase</Complexity>
    <Complexity v-model="includeNumbers">Numbers</Complexity>
    <Complexity v-model="includeSymbols">Symbols</Complexity>

    <label class="flex gap-5 cursor-pointer">
      <span>Length</span>
      <input class="w-full" v-model="randomPasswordLength" type="range" :min="randomMinLength" :max="randomMaxLength">
      <input
          class="w-12 text-center border rounded-md max-w-fit w-fit flex"
          v-model="randomPasswordLength"
          type="number"
          :min="randomMinLength"
          :max="randomMaxLength"
      >
    </label>
  </div>
</template>

<script lang="ts" setup>
import Complexity from "./Complexity.vue";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import { watchEffect } from "vue";
import GeneratedPassword from "./GeneratedPassword.vue";
import Regenerate from "./Regenerate.vue";

const {
  generateRandomPassword,
  generatedPassword,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  randomMaxLength,
  randomMinLength,
  randomPasswordLength,
  isGenerating
} = usePasswordGenerator()

const emit = defineEmits<{ (e: 'generate', newPassword: string): void }>()

generateRandomPassword()

watchEffect(() => {
  emit('generate', generatedPassword.value)
})
</script>