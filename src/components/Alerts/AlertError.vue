<template>
  <AlertContainer bg-color="bg-red-50" text-color="text-red-700">
    <template #icon>
      <svg class="w-full" viewBox="0 0 16 16">
        <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 6.8688L5.7376 4.6056L4.6056 5.7376L6.8688 8L4.6056 10.2624L5.7376 11.3944L8 9.1312L10.2624 11.3944L11.3944 10.2624L9.1312 8L11.3944 5.7376L10.2624 4.6056L8 6.8688Z" fill="#F87171"/>
      </svg>
    </template>
    <template #content>
      <slot></slot>
    </template>
  </AlertContainer>
</template>

<script setup lang="ts">
import AlertContainer from "./AlertContainer.vue";
</script>
