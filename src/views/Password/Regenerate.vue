<template>
  <button class="absolute right-0 bg-slate-100 p-5">
    <Refresh :class="['stroke-gray-900', isGenerating && 'animate-spin']"/>
  </button>
</template>

<script setup lang="ts">
import Refresh from "../../components/icons/Refresh.vue";

defineProps<{
  isGenerating: boolean
}>()
</script>