<template>
  <Container>
    <div class="text-center space-y-5 mb-10 lg:mb-20">
      <h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-tight font-extrabold">
        Random
        <span class="text-blue-500">Sentence</span> Generator.
      </h1>
    </div>

    <label class="mb-5 gap-2 flex">
      <input v-model="amount" type="number" min="1" class="text-center max-w-fit w-10 border">
      <span>
        Number of sentences:
      </span>
    </label>

    <div class="p-4 rounded-md bg-slate-200 mb-5">
      {{ sentence }}
    </div>

    <button class="bg-gray-900 text-white rounded-md px-4 py-2" @click="generate">
      Regenerate
    </button>
  </Container>
</template>

<script setup lang="ts">
import { useSentenceGenerator } from "./useSentenceGenerator";
import Container from "../../components/Component/Container.vue";

const { sentence, amount, generate } = useSentenceGenerator()

generate()
</script>