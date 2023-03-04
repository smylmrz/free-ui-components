<script lang="ts" setup>
import { RouterLink } from "vue-router";

defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" class="font-semibold text-gray-900 hover:text-blue-500">
    <slot></slot>
  </RouterLink>
</template>
