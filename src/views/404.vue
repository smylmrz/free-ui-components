<template>
  <div class="space-y-10 text-center">
    <h1 class="text-4xl md:text-5xl lg:leading-tight lg:text-7xl font-extrabold">
      Don't know where you are?
    </h1>
    <p class="md:text-2xl text-slate-700">That makes both of us...</p>
    <CTA to="/">
      Back to Home page
    </CTA>
  </div>
</template>

<script setup lang="ts">
import CTA from "../components/CTA.vue";
</script>