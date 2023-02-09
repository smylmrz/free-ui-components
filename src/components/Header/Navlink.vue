<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink class="font-semibold text-gray-900 hover:text-gray-600 text-sm">
    <slot></slot>
  </RouterLink>
</template>
