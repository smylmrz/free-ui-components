<template>
  <TransitionChild
      as="template"
      enter="duration-200 ease-out"
      enter-from="-translate-x-full"
      enter-to="translate-x-0"
      leave="duration-200 ease-in"
      leave-from="translate-x-0"
      leave-to="-translate-x-full"
  >
    <slot></slot>
  </TransitionChild>
</template>

<script lang="ts" setup>
import { TransitionChild } from "@headlessui/vue";
</script>