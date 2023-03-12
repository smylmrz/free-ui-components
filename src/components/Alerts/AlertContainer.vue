<template>
  <div :class="[bgColor, textColor]" class="rounded-md space-y-2 p-5">
    <div class="flex items-center gap-2">
      <span class="w-4">
        <slot name="icon"></slot>
      </span>
      <span class="text-sm font-medium">
        <slot name="content"></slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  bgColor: string;
  textColor: string
}>()
</script>
