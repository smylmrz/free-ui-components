<template>
  <div class="space-y-3">
    <h3 class="text-blue-500 text-xl font-bold">
      {{ info.title }}
    </h3>
    <p>
      {{ info.body }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { PasswordInfo } from "./paswordInfo";

defineProps<{
  info: PasswordInfo
}>()
</script>