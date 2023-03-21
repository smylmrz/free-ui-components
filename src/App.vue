<template>
  <Header class="relative z-10" />
  <div class="py-10 md:py-20">
    <Container>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </Container>
  </div>
  <Footer class="relative z-10" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Container from "./components/Container.vue";

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
