<script lang="ts" setup>
import Logo from "../Header/Logo.vue";
import Container from "../Container.vue";
</script>

<template>
  <Container>
    <div class="flex border-t border-gray-100 py-10 md:py-20 flex-col items-center justify-center gap-5">
      <Logo />
      <p class="text-sm text-gray-600">&copy; 2023 UILand. All rights reserved.</p>
    </div>
  </Container>
</template>

