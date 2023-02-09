<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <svg class="h-5 w-5 flex-none transition" :class="isActive ? 'stroke-sky-500' : 'stroke-slate-600'" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path>
    <circle cx="10" cy="10" r="2.25"></circle>
  </svg>
</template>

