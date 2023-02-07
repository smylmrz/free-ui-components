<script lang="ts" setup>
defineProps<{
  isActive?: boolean;
}>();
</script>

<template>
  <button
    class="duration-500 text-gray-700 px-3 py-2 rounded-md font-semibold"
    :class="isActive && 'bg-white shadow'"
  >
    <slot></slot>
  </button>
</template>
