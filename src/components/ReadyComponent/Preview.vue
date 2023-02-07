<script lang="ts" setup>
defineProps<{
  src: string;
  alt?: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
