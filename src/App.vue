<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <Header />
  <div class="max-w-7xl mx-auto">
    <RouterView></RouterView>
  </div>
</template>
