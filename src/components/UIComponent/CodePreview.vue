<script lang="ts" setup>
defineProps<{
  sourceCode: string
}>()
</script>

<template>
  <div v-html="sourceCode" class="flex justify-center gap-10 items-center rounded-lg p-10"></div>
</template>
