<template>
  <TransitionChild
      as="template"
      enter="duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
  >
    <slot></slot>
  </TransitionChild>
</template>

<script setup lang="ts">
import { TransitionChild } from "@headlessui/vue";
</script>