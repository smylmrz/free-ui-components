<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Modal from "./components/Component/Modal.vue";
import { ref } from "vue";

const isSearchOpen = ref(false)
</script>

<template>
  <Modal @close="isSearchOpen = false" :is-open="isSearchOpen">
    <div class="w-96 mt-40 p-20 bg-white border rounded-xl"></div>
  </Modal>
  <Header @search="isSearchOpen = true" class="relative z-10" />
  <div class="py-20">
    <RouterView />
  </div>
  <Footer class="relative z-10" />
</template>
