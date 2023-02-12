<script lang="ts" setup>
import CTA from "../components/CTA.vue";
import Container from "../components/Component/Container.vue";

</script>

<template>
  <Container>
    <div class="relative">
      <div class=" flex flex-col items-center text-center relative space-y-8 z-10">
        <h1 class="text-7xl font-extrabold tracking-light">
          Build your next idea <br> even faster.
        </h1>
        <p class="text-lg max-w-lg text-slate-700">
          Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
        </p>
        <CTA to="/components" type="primary">
          Start exploring
          <span class="hidden ml-1 text-slate-400 sm:inline">→</span>
        </CTA>
      </div>
    </div>
  </Container>
</template>
