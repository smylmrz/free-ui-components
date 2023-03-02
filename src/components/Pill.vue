<template>
  <button
      class="flex flex-col border border-gray-200 p-3 rounded-md space-y-1"
      :class="isActive && 'bg-blue-500 text-white'"
  >
    <span class="text-lg font-bold">{{ type.title }}</span>
    <span class="text-sm opacity-70" v-if="type.subtitle">{{ type.subtitle }}</span>
  </button>
</template>

<script setup lang="ts">
import { QRCodeType } from "../views/QRCode/qrCodeTypes";

defineProps<{
  isActive: boolean;
  type: QRCodeType
}>()
</script>