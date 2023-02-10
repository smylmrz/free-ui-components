<script lang="ts" setup>
defineProps<{
  isActive?: boolean;
}>();

import { useSlots } from "vue";
const slots = useSlots()
</script>

<template>
  <button
    :class="{
        'duration-500 text-gray-700 px-2 py-1 text-sm rounded-md font-semibold': true,
        'bg-white shadow': isActive,
        'flex items-center gap-2': slots.icon
     }"
  >
    <slot name="icon" :isActive="isActive"></slot>
    <slot></slot>
  </button>
</template>
