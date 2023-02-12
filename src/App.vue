<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <Header class="relative z-10" />
  <div class="py-20">
    <RouterView></RouterView>
  </div>
  <Footer class="relative z-10" />
</template>
