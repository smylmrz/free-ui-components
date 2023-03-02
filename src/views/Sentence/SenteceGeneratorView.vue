<template>
  <Container>
    <div class="text-center space-y-5 mb-10 lg:mb-20">
      <h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-tight font-extrabold">
        Random
        <span class="text-blue-500">Sentence</span> Generator.
      </h1>
    </div>

    <div class="p-4 rounded-md bg-slate-200">
      {{ sentence }}
    </div>

    <button @click="generate">Regenerate</button>
  </Container>
</template>

<script setup lang="ts">
import { useSentenceGenerator } from "./useSentenceGenerator";
import Container from "../../components/Component/Container.vue";

const { sentence, generate } = useSentenceGenerator()

generate()
</script>