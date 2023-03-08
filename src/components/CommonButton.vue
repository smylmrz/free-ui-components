<template>
  <button :class="[
    'duration-200 flex gap-2 items-center py-2 px-4 rounded-md text-white',
    isPrimary ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-800 hover:bg-gray-900'
  ]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isPrimary?: boolean
}>()
</script>