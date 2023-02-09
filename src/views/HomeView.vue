<script lang="ts" setup>
import CTA from "../components/CTA.vue";
import Container from "../components/Component/Container.vue";

</script>

<template>
  <Container>
    <img class="absolute top-0 left-0" src="https://products.ls.graphics/mesh-gradients/images/49.-Soft-Peach_1.jpg" alt="">
    <div class="relative mt-20">
      <div class="relative space-y-8 z-10">
        <h1 class="text-7xl font-extrabold tracking-light">
          Build your next idea <br> even faster.
        </h1>
        <p class="text-lg max-w-lg text-slate-700">
          Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
        </p>
        <CTA to="/components" type="primary">
          Start exploring
        </CTA>
      </div>
    </div>
  </Container>
</template>
