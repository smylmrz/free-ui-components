<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <svg class="h-5 w-5 flex-none transition" :class="isActive ? 'stroke-sky-500' : 'stroke-slate-600'" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path>
  </svg>
</template>

