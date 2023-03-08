<template>
  <div class="bg-slate-50 p-5 rounded-md space-y-4">
    <h3 class="text-blue-500 text-xl font-bold">
      {{ info.title }}
    </h3>
    <div class="w-2/3 opacity-80">
      <img :src="info.image" :alt="info.imageAlt">
    </div>
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